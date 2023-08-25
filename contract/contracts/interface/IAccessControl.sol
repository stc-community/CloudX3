//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IAccessControl {

  function roleCheck(string memory publicKeyHash, address account) external view returns (bool);
}
