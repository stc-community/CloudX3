// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "../Config.sol";
import "../interface/IAccessControl.sol";


/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract ContainerPod is ChainlinkClient, ConfirmedOwner, Config {
  using Chainlink for Chainlink.Request;

  uint256 private constant ORACLE_PAYMENT = (1 * LINK_DIVISIBILITY) / 10; // 0.1 * 10**18
  string public currentDeployStatus;
  string public currentDeleteStatus;

  event RequestContainerPodFulfilled(
    bytes32 indexed requestId,
    string deployStatus
  );
  event RequestDeletePodFulfilled(
    bytes32 indexed requestId,
    string deleteStatus
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
   */
  function requestContainerPod(
    address _oracle,
    string memory _jobId,
    string memory _pod_code,
    string memory _request_url,
    string memory _public_key
  ) external onlyBeGrant(_public_key) {
    Chainlink.Request memory req = buildChainlinkRequest(
      stringToBytes32(_jobId),
      address(this),
      this.fulfillDeployStatus.selector
    );
    req.add("post",_request_url);
    req.add("yaml", _pod_code);
    req.add("userid", _public_key);
    address from = msg.sender;
    req.add("sender",Strings.toHexString(from));
    sendChainlinkRequestTo(_oracle, req, ORACLE_PAYMENT);
  }

  function fulfillDeployStatus(
    bytes32 _requestId,
    string calldata _pod_status
  ) public recordChainlinkFulfillment(_requestId) {
    emit RequestContainerPodFulfilled(_requestId, _pod_status);
    currentDeployStatus = _pod_status;
  }

  /**
     * Request container cloud api to delete.
     */
  function requestDeletePod(
    address _oracle,
    string memory _jobId,
    string memory _request_url,
    string memory _public_key
  ) public onlyBeGrant(_public_key) {
    Chainlink.Request memory req = buildChainlinkRequest(
      stringToBytes32(_jobId),
      address(this),
      this.fulfillDeleteStatus.selector
    );
    req.add("delete",_request_url);
    req.add("userid", _public_key);
    sendChainlinkRequestTo(_oracle, req, ORACLE_PAYMENT);
  }

  function fulfillDeleteStatus(
    bytes32 _requestId,
    string calldata _pod_status
  ) public recordChainlinkFulfillment(_requestId) {
    emit RequestDeletePodFulfilled(_requestId, _pod_status);
    currentDeleteStatus = _pod_status;
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
