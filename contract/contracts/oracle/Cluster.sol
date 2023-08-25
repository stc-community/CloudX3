// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "../Config.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract ContainerCluster is ChainlinkClient, ConfirmedOwner, Config {
  using Chainlink for Chainlink.Request;

  uint256 private constant ORACLE_PAYMENT = (1 * LINK_DIVISIBILITY) / 10; // 0.1 * 10**18
  mapping(string => string) public currentClusterInfoMap;

  event RequestClusterInfoFulfilled(
    bytes32 indexed requestId,
    string indexed clusterInfoCid
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
   * Request container cloud api to query cluster info.
   * @param _oracle query oracle contract address
     * @param _jobId chainlink job id by def in chainlink ui.
     * @param _request_url backend server url to query cluster info
     */
  function requestClusterInfo(
    address _oracle,
    string memory _jobId,
    string memory _request_url
  ) public onlyOwner {
    Chainlink.Request memory req = buildChainlinkRequest(
      stringToBytes32(_jobId),
      address(this),
      this.fulfillClusterInfo.selector
    );
    req.add("api", _request_url);
    sendChainlinkRequestTo(_oracle, req, ORACLE_PAYMENT);
  }

  /**
   * @param _requestId is backfilled jobid by chainlink.
     * @param _cluster_info_cid is container cloud returned cluster-info cid data that is backfilled by chainlink.
     * @param _cid_update_timestamp is container cloud returned cluster-info cid data that is backfilled by chainlink.
     */
  function fulfillClusterInfo(
    bytes32 _requestId,
    string memory _cluster_info_cid,
    string memory _cid_update_timestamp
  ) public recordChainlinkFulfillment(_requestId) {
    emit RequestClusterInfoFulfilled(_requestId, _cluster_info_cid);
    if (bytes(_cluster_info_cid).length > 0) {
      currentClusterInfoMap["cid"] = _cluster_info_cid;
      currentClusterInfoMap["timestamp"] = _cid_update_timestamp;
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
}
