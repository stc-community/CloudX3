// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "@chainlink/contracts/src/v0.7/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.7/ConfirmedOwner.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract MspContainerDeploy is ChainlinkClient, ConfirmedOwner {
  using Chainlink for Chainlink.Request;

  uint256 private constant ORACLE_PAYMENT = (1 * LINK_DIVISIBILITY) / 10; // 0.1 * 10**18
  string public currentDeployStatus;

  event requestContainerDeployFulfilled(
    bytes32 indexed requestId,
    string indexed deployStatus
  );

  /**
   * Constructor weelink link token
   * @dev LINK address in weelink network: _link_token_address
   * @dev Check https://docs.chain.link/docs/link-token-contracts/ for LINK address for the right network
   */
  constructor(address _link_token_address) ConfirmedOwner(msg.sender) {
    setChainlinkToken(_link_token_address);
  }

  /**
   * Request msp container cloud api to deploy.
   */
  function requestContainerDeploy(
    address _oracle,
    string memory _jobId,
    string memory _deploy_code,
    string memory _request_url
  ) public {
    Chainlink.Request memory req = buildChainlinkRequest(
      stringToBytes32(_jobId),
      address(this),
      this.fulfillDeployStatus.selector
    );
    req.add("post", _request_url);
    req.add("yaml", _deploy_code);
    address from = msg.sender;
    req.add("sender", addressToString(from));
    sendChainlinkRequestTo(_oracle, req, ORACLE_PAYMENT);
  }

  function fulfillDeployStatus(
    bytes32 _requestId,
    string calldata _deploy_status
  ) public recordChainlinkFulfillment(_requestId) {
    emit requestContainerDeployFulfilled(_requestId, _deploy_status);
    currentDeployStatus = _deploy_status;
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

  function addressToString(address _addr) public pure returns (string memory) {
    bytes32 value = bytes32(uint256(_addr));
    bytes memory alphabet = "0123456789abcdef";
    bytes memory str = new bytes(42);

    str[0] = "0";
    str[1] = "x";

    for (uint256 i = 0; i < 20; i++) {
      str[2 + i * 2] = alphabet[uint8(value[i + 12] >> 4)];
      str[3 + i * 2] = alphabet[uint8(value[i + 12] & 0x0f)];
    }

    return string(str);
  }
}
