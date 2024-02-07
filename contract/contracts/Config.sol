//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./interface/IAccessControl.sol";

contract Config {

  address public ACCESS_CONTROL = 0x93d30f8dcfD09FE8b1669320E81c459925E05835;

  modifier onlyBeGrant(string memory publicKey) {
    require(IAccessControl(ACCESS_CONTROL).roleCheck(publicKey, msg.sender), "Not authorized by the account owner");
    _;
  }

}
