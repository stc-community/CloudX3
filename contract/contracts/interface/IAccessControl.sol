//SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

interface IAccessControl {
  function hasRole(string memory publicKeyHash, address account) external view returns (bool);

  function grantRole(string memory publicKeyHash, address account, uint256 expireTime) external;

  function revokeRole(string memory publicKeyHash, address account) external;

  function renounceRole(string memory publicKeyHash) external;
}
