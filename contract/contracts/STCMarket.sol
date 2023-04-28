// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract STCMarket is ERC721URIStorage {

  using Counters for Counters.Counter;
  Counters.Counter private _daoIdCounter;
  Counters.Counter private _tokenIdCounter;
  Counters.Counter private _marketIdCounter;

  struct Soul {
    uint256 soulId;
    uint256 daoId;
    address soulOwner;
    string  metadata;
    string  image;
  }

  struct Dao {
    uint256 daoId;
    string  name;
    string  description;
    string  jsoninfo;
    string  image;
    address daoOwner;
  }

  struct ApiMarket {
    uint256 marketId;
    uint256 daoId;
    string  apiName;
    string  apiMethod;
    string  apiUrl;
    uint256 price;
    string  description;
    address createUser;
  }

  mapping(uint256 => Dao) public _idToDao;

  mapping(uint256 => Soul) private _idToUserSoul;

  mapping(uint256 => ApiMarket) private _idToApiMarket;

  mapping(address => uint256[]) public _providerDaoIds;

  mapping(address => uint256[]) public _userSoulIds;

  mapping(address => uint256[]) public _userMarketApiIds;     // There is a list of marketplaces created by this user

  mapping(uint256 => uint256[]) public _daoMarketApiIds;     // List of markets that currently exist in the dao


  event TokenMinted(address, uint256);

  event TokenTransfered(address, address, uint256);

  constructor() ERC721("STCMarket NFT", "STCN") {
    _daoIdCounter.increment();
    _tokenIdCounter.increment();
    _marketIdCounter.increment();
  }

  function createDao(string memory name, string memory description, string memory jsoninfo, string memory image) external {
    uint256 latestDaoId = _daoIdCounter.current();
    _daoIdCounter.increment();
    _idToDao[latestDaoId] = Dao(latestDaoId, name, description, jsoninfo, image, msg.sender);
    _providerDaoIds[msg.sender].push(latestDaoId);
  }

  function getAllDaos() external view returns (Dao[] memory) {
    uint256 latestDaoId = _daoIdCounter.current() - 1;
    Dao[] memory daos = new Dao[](latestDaoId);
    for (uint256 i = 0; i < latestDaoId; i++){
      daos[i] = _idToDao[i+1];
    }
    return daos;
  }

  function getDao(uint256 daoId) external view returns (Dao memory) {
    return _idToDao[daoId];
  }

  function getMyDaos() external view returns (Dao[] memory) {
    uint256 userDaoLens = _providerDaoIds[msg.sender].length;
    Dao[] memory daos = new Dao[](userDaoLens);

    for (uint i = 0; i < userDaoLens; i++){
      daos[i] = _idToDao[_providerDaoIds[msg.sender][i]];
    }
    return daos;
  }

  function createUserNft(string memory tokenURI, uint256 daoId, string memory metadata, string memory image) public returns (uint256) {
    for (uint i=0; i < _userSoulIds[msg.sender].length; i++){
      require(_idToUserSoul[_userSoulIds[msg.sender][i]].daoId == daoId, "Is Created");
    }
    uint256 tokenId = _tokenIdCounter.current();
    _tokenIdCounter.increment();
    _mint(msg.sender, tokenId);
    _setTokenURI(tokenId, tokenURI);
    _idToUserSoul[tokenId] = Soul(tokenId, daoId, msg.sender, metadata, image);
    _userSoulIds[msg.sender].push(tokenId);

    return tokenId;
  }

  function getUserNft(uint256 daoId) external view returns (Soul memory, bool) {
    Soul memory userSoul;
    uint256 soulId;

    for (uint i=0; i < _userSoulIds[msg.sender].length; i++){
      soulId = _userSoulIds[msg.sender][i];
      if (_idToUserSoul[soulId].daoId == daoId) {
        return (_idToUserSoul[soulId], true);
      }
    }

    return (userSoul, false);
  }

  function getUserAllNft() external view returns (Soul[] memory) {
    uint256 tokenCount = _userSoulIds[msg.sender].length;
    Soul[] memory souls = new Soul[](tokenCount);
    uint256 soulId;

    for (uint i=0; i < tokenCount; i++){
      soulId = _userSoulIds[msg.sender][i];
      souls[i] = _idToUserSoul[soulId];
    }

    return souls;
  }

  function createMarketApi(
    uint256 daoId,
    string memory apiName,
    string memory apiMethod,
    string memory apiUrl,
    uint256 price,
    string memory description
  ) external {
    require(_idToDao[daoId].daoOwner == msg.sender, "No permission to create a market");
    uint256 latestMarketId = _marketIdCounter.current();
    _marketIdCounter.increment();

    _idToApiMarket[latestMarketId] = ApiMarket(latestMarketId, daoId, apiName, apiMethod, apiUrl, price, description, msg.sender);
    _daoMarketApiIds[daoId].push(latestMarketId);
    _userMarketApiIds[msg.sender].push(latestMarketId);
  }

  function getMarketApiByDao(uint256 daoId) view external returns (ApiMarket[] memory) {
    uint256 marketId;
    uint256 marketApiCount = _daoMarketApiIds[daoId].length;
    ApiMarket[] memory markets = new ApiMarket[](marketApiCount);

    for (uint i=0; i < marketApiCount; i++){
      marketId = _daoMarketApiIds[daoId][i];
      markets[i] = _idToApiMarket[marketId];
    }

    return markets;
  }

  function checkToCreateMarket(uint256 daoId) view external returns (bool) {
    if (_idToDao[daoId].daoOwner == msg.sender) {
      return true;
    }
    return false;
  }

}
