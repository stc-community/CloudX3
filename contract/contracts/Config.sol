//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./interface/IAccessControl.sol";

contract Config {

  address public ACCESS_CONTROL = 0x4D736E5c2B0c5C8E9EE88955964ead24C8D70469;

  modifier onlyBeGrant(string memory publicKey) {
    require(IAccessControl(ACCESS_CONTROL).roleCheck(publicKey, msg.sender), "Not authorized by the account owner");
    _;
  }

}
