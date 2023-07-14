//SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

interface IAccessControl {
    function hasRole(address granter, address account) external view returns (bool);

    function grantRole(address grantee, uint256 expireTime) external;

    function revokeRole(address account) external;

    function renounceRole(address granter) external;
}
