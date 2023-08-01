//SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;
import "./interface/IAccessControl.sol";

abstract contract Config {

  address public constant ACCESS_CONTROL = 0xb173A5644a5B743A152dB86A32B7cc1Cf3FBa7Ba;

  modifier onlyBeGrant(address account) {
    if (msg.sender != account){
      require(IAccessControl(ACCESS_CONTROL).hasRole(account, msg.sender), "Not authorized by the account owner");
    }
    _;
  }

}
