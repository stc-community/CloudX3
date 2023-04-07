// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract STCDaoToken is ERC20 {
  using Counters for Counters.Counter;
  Counters.Counter private _orderIdCounter;

  struct ApiOrder {
    uint256 orderId;
    uint256 daoId;
    uint256 marketId;
    uint256 totalCalls;     // Number of API calls
    uint256 remainingCalls;
    uint256 orderPrice;
    address buyerAddress;
  }

  mapping(uint256 => ApiOrder) public _idToApiOrder;

  mapping(address => uint256[]) public _userOrderIds;  // User's order list

  mapping(uint256 => uint256) public _remainingCalls; // mapping(orderId => remainCalls)

  constructor() ERC20("STCDao", "STCT") {
    _mint(msg.sender, 100000000 * 10 ** decimals());
    _orderIdCounter.increment();
  }

  function createOrder(uint256 daoId, uint256 marketId, uint256 totalCalls, uint256 orderPrice) external {
    uint256 orderId = _orderIdCounter.current();
    _orderIdCounter.increment();
    _idToApiOrder[daoId] = ApiOrder(orderId, daoId, marketId, totalCalls, totalCalls, orderPrice, msg.sender);
    _remainingCalls[marketId] = totalCalls;
    _userOrderIds[msg.sender].push(orderId);
  }

  function getUserAllOrdersOnDao(uint256 daoId) external view returns (ApiOrder[] memory) {
    uint256 userOrderCount = _userOrderIds[msg.sender].length;
    uint256 orderId;
    ApiOrder[] memory orders = new ApiOrder[](userOrderCount);
    uint256 orderCounters = 0;

    for (uint i = 0; i < userOrderCount; i++){
      orderId = _userOrderIds[msg.sender][i];
      if (_idToApiOrder[orderId].daoId == daoId){
        orders[orderCounters] = _idToApiOrder[orderId];
        orders[orderCounters].remainingCalls = _remainingCalls[orders[i].orderId];
        orderCounters = orderCounters + 1;
      }
    }
    return orders;
  }

  function getUserAllOrders() external view returns (ApiOrder[] memory) {
    uint256 userOrderCount = _userOrderIds[msg.sender].length;
    ApiOrder[] memory orders = new ApiOrder[](userOrderCount);

    for (uint i = 0; i < userOrderCount; i++){
      orders[i] = _idToApiOrder[_userOrderIds[msg.sender][i]];
      orders[i].remainingCalls = _remainingCalls[orders[i].orderId];
    }
    return orders;
  }
}
