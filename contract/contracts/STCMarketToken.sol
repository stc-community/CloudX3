// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract STCMarketToken is ERC20, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _orderIdCounter;

  bytes32 public constant MY_ROLE = keccak256("MY_ROLE");
  uint256 _stackToken = 100 ether;

  struct ApiOrder {
    uint256 orderId;
    uint256 daoId;
    uint256 marketId;
    uint256 totalCalls;     // Number of API calls
    uint256 remainingCalls;
    uint256 orderPrice;
    address buyerAddress;
  }

  // Order
  mapping(uint256 => ApiOrder) public _idToApiOrder;
  mapping(address => uint256[]) public _userOrderIds;  // User's order list

  // Calls
  mapping(uint256 => uint256) public _orderRemainingCalls; // mapping(orderId => remainCalls)
  mapping(address => mapping(uint256 => uint256)) public _userRemainingCalls; // address => mapping(marketId => remainCalls)

  mapping(address => uint256) public stakes;

  constructor() ERC20("STCAPIMarket Token", "STCT") {
    _mint(msg.sender, 100000000 * 10 ** decimals());
    _orderIdCounter.increment();
  }

  function getStakeToken() view public returns(uint256) {
    return _stackToken;
  }

  function stakerExists(address user) public view returns(bool){
    return stakes[user] != 0;
  }

  function stake(uint256 amount) external {
    require(transfer(address(this), amount), "Unable to transfer your tokens to this contract");
    if (stakerExists(msg.sender)) {
      stakes[msg.sender] = stakes[msg.sender] + amount;
    } else {
      stakes[msg.sender] = amount;
    }
  }

  function refund() external {
    require(stakerExists(msg.sender), "This address has never contributed Tokens to the protocol");
    uint256 amount = stakes[msg.sender];
    stakes[msg.sender] = 0;
    transferFrom(address(this), msg.sender, amount);
  }

  function createOrder(uint256 daoId, uint256 marketId, uint256 totalCalls, uint256 orderPrice) external {
    require(balanceOf(msg.sender) >= orderPrice,"Not enough STC Tokens");

    transfer(address(this), orderPrice);
    uint256 orderId = _orderIdCounter.current();
    _orderIdCounter.increment();

    _idToApiOrder[orderId] = ApiOrder(orderId, daoId, marketId, totalCalls, totalCalls, orderPrice, msg.sender);
    _orderRemainingCalls[orderId] = totalCalls;
    _userRemainingCalls[msg.sender][marketId] = _userRemainingCalls[msg.sender][marketId] + totalCalls;
    _userOrderIds[msg.sender].push(orderId);
  }

  function getUserAllOrdersOnDao(uint256 daoId) external view returns (ApiOrder[] memory) {
    return _getUserOrders(msg.sender, daoId);
  }

  function getUserAllOrders() public view returns (ApiOrder[] memory) {
    return _getUserOrders(msg.sender, 0);
  }

  function _marketIsExist(ApiOrder[] memory orders, uint256 marketId) private returns(bool) {
    for (uint i = 0; i < orders.length; i++) {
      if (orders[i].marketId == marketId) {
        return true;
      }
    }
    return false;
  }

  function _getUserOrders(address user, uint256 daoId) view private returns(ApiOrder[] memory){
    uint256 userOrderCount = _userOrderIds[user].length;
    ApiOrder[] memory orders = new ApiOrder[](userOrderCount);

    if ( daoId == 0 ) {
      for (uint i = 0; i < userOrderCount; i++) {
        orders[i] = _idToApiOrder[_userOrderIds[msg.sender][i]];
        // orders[i].remainingCalls = _orderRemainingCalls[orders[i].orderId];
      }
    } else {
      uint256 orderCounters;
      for (uint i = 0; i < userOrderCount; i++) {
        if (_idToApiOrder[_userOrderIds[msg.sender][i]].daoId == daoId) {
          orders[orderCounters] = _idToApiOrder[_userOrderIds[msg.sender][i]];
          orders[orderCounters].remainingCalls = _userRemainingCalls[msg.sender][_idToApiOrder[_userOrderIds[msg.sender][i]].marketId];

          orderCounters = orderCounters + 1;
        }
      }
    }
    return orders;
  }
}
