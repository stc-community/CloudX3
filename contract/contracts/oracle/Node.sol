// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
// pragma abicoder v2; //启用 ABI Coder v2

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "../Config.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract ContainerNode is ChainlinkClient, ConfirmedOwner, Config {
  using Chainlink for Chainlink.Request;

  uint256 private constant ORACLE_PAYMENT = (1 * LINK_DIVISIBILITY) / 10; // 0.1 * 10**18
  mapping(string => string) public currentNodeListResult;
  mapping(string => string) public currentNodeSchedulingStatusMap;
  mapping(string => string) public currentNodeSchedulingStatusResult;

  event RequestNodeListFulfilled(
    bytes32 indexed requestId,
    string indexed nodeListRawJson
  );

  event RequestNodeSchedulingStatusFulfilled(
    bytes32 indexed requestId,
    string indexed nodeSchedulingStatusRawJson
  );

  /**
   * Constructor FVM link token
   * @dev LINK address in FVM network: _link_token_address
     * @dev Check https://docs.chain.link/docs/link-token-contracts/ for LINK address for the right network
     */
  constructor(address _link_token_address) ConfirmedOwner(msg.sender) {
    setChainlinkToken(_link_token_address);
  }

  /**
   * Request container cloud api to deploy.
   * @param _oracle deploy oracle contract address
     * @param _jobId chainlink job id by def in chainlink ui.
     * @param _page nodelist page num
     * @param _limit nodelist page size
     * @param _request_url backend server url to get nodelist.
     */
  function requestNodeList(
    address _oracle,
    string memory _jobId,
    string memory _page,
    string memory _limit,
    string memory _request_url //nodelist url
  ) public {
    Chainlink.Request memory req = buildChainlinkRequest(
      stringToBytes32(_jobId),
      address(this),
      this.fulfillNodeList.selector
    );
    req.add("api", _request_url);
    req.add("page", _page);
    req.add("limit", _limit);
    sendChainlinkRequestTo(_oracle, req, ORACLE_PAYMENT);
  }

  /**
   * @param _requestId is backfilled jobid by chainlink.
     * @param _node_list_cid is container cloud returned nodes json data that is backfilled by chainlink.
     * @param _cid_update_timestamp is container cloud returned node list timestamp that is backfilled by chainlink.
     */
  function fulfillNodeList(
    bytes32 _requestId,
    string memory _node_list_cid,
    string memory _cid_update_timestamp
  ) public recordChainlinkFulfillment(_requestId) {
    emit RequestNodeListFulfilled(_requestId, _node_list_cid);
    if (bytes(_node_list_cid).length > 0) {
      currentNodeListResult["cid"] = _node_list_cid;
      currentNodeListResult["timestamp"] = _cid_update_timestamp;
    }
  }

  /**
   * Request container cloud api to scheduling node.
   * @param _oracle deploy oracle contract address
     * @param _jobId chainlink job id by def in chainlink ui.
     * @param _request_url backend server url to cordon node
     */
  function requestContainerNodeCordon(
    address _oracle,
    string memory _jobId,
    string memory _request_url //nodecordon url
  ) public {
    Chainlink.Request memory req = buildChainlinkRequest(
      stringToBytes32(_jobId),
      address(this),
      this.fulfillNodeSchedulingStatus.selector
    );
    req.add("api", _request_url);
    sendChainlinkRequestTo(_oracle, req, ORACLE_PAYMENT);
  }

  /**
   * Request container cloud api to scheduling node.
   * @param _oracle deploy oracle contract address
     * @param _jobId chainlink job id by def in chainlink ui.
     * @param _request_url backend server url to uncordon node
     */
  function requestContainerNodeUncordon(
    address _oracle,
    string memory _jobId,
    string memory _request_url //nodeuncordon url
  ) public {
    Chainlink.Request memory req = buildChainlinkRequest(
      stringToBytes32(_jobId),
      address(this),
      this.fulfillNodeSchedulingStatus.selector
    );
    req.add("api", _request_url);
    sendChainlinkRequestTo(_oracle, req, ORACLE_PAYMENT);
  }

  /**
   * @param _requestId is backfilled jobid by chainlink.
     * @param _name is container cloud returned node name
     * @param _data is container cloud returned node scheduling status json data that is backfilled by chainlink.
     */
  function fulfillNodeSchedulingStatus(
    bytes32 _requestId,
    string memory _name,
    string memory _data
  ) public recordChainlinkFulfillment(_requestId) {
    emit RequestNodeSchedulingStatusFulfilled(_requestId, _data);
    if (bytes(_name).length > 0) {
      currentNodeSchedulingStatusMap[_name] = _data;
    }
  }

  /**
   * @param _node_scheduling_status_cid is container cloud returned cluster-info cid data that is backfilled by chainlink.
     * @param _cid_update_timestamp is container cloud returned node scheduling status timestamp that is backfilled by chainlink.
     */
  function fulfillAllNodeSchedulingStatus(
    string memory _node_scheduling_status_cid,
    string memory _cid_update_timestamp
  ) public {
    if (bytes(_node_scheduling_status_cid).length > 0) {
      currentNodeSchedulingStatusResult["cid"] = _node_scheduling_status_cid;
      currentNodeSchedulingStatusResult["timestamp"] = _cid_update_timestamp;
    }
  }

  function getChainlinkToken() public view returns (address) {
    return chainlinkTokenAddress();
  }

  function withdrawLink() public onlyOwner {
    LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
    require(
      link.transfer(msg.sender, link.balanceOf(address(this))),
      "Unable to transfer"
    );
  }

  function cancelRequest(
    bytes32 _requestId,
    uint256 _payment,
    bytes4 _callbackFunctionId,
    uint256 _expiration
  ) public onlyOwner {
    cancelChainlinkRequest(
      _requestId,
      _payment,
      _callbackFunctionId,
      _expiration
    );
  }

  function stringToBytes32(
    string memory source
  ) private pure returns (bytes32 result) {
    bytes memory tempEmptyStringTest = bytes(source);
    if (tempEmptyStringTest.length == 0) {
      return 0x0;
    }

    assembly {
    // solhint-disable-line no-inline-assembly
      result := mload(add(source, 32))
    }
  }

  //merge strings
  function mergeStrings(
    string memory a,
    string memory b
  ) private pure returns (string memory newStr) {
    bytes memory _a = bytes(a);
    bytes memory _b = bytes(b);
    bytes memory res = new bytes(_a.length + _b.length);
    for (uint i = 0; i < _a.length; i++) res[i] = _a[i];
    for (uint j = 0; j < _b.length; j++) res[_a.length + j] = _b[j];
    newStr = string(res);
  }
}
