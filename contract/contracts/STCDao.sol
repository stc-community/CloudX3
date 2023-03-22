// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./STCDao.sol";

// import "./comman/FERC721URIStorage.sol";

contract STCDao is ERC721URIStorage {

  using Counters for Counters.Counter;
  Counters.Counter private _daoIdCounter;
  Counters.Counter private _tokenIdCounter;

  struct Soul {
    uint256 tokenId;
    uint256 daoId;
    address user;
    string metadata;
    string image;
  }

  struct Dao {
    uint256 daoId;
    string name;
    string description;
    string jsoninfo;
    string image;
  }

  Dao [] daoArr;

  mapping(uint256 => Dao) public idToDao;

  mapping(uint256 => Soul) private idToUserSoul;

  mapping(address => uint256[]) public userSoulIds;

  mapping(address => uint256) public userSoulCount;

  function createDao(string memory name, string memory description, string memory jsoninfo, string memory image) external {
    uint256 daoId = _daoIdCounter.current();
    _daoIdCounter.increment();
    daoArr.push(Dao(daoId, name, description, jsoninfo, image));
    idToDao[daoId] = Dao(daoId, name, description, jsoninfo, image);
  }

  function getAllDaos() external view returns (Dao[] memory) {
    uint256 daoId = _daoIdCounter.current();
    Dao[] memory daos = new Dao[](daoId+1);
    for (uint256 i=0; i <= daoId; i++){
      daos[i] = idToDao[i];
    }
    return daos;
  }

  function getDao(uint256 daoId) external view returns (Dao memory) {
    return idToDao[daoId];
  }

  event TokenMinted(address, uint256);

  event TokenTransfered(address, address, uint256);

  constructor() ERC721("STCDao", "STCN") {}

  function createUserNft(string memory tokenURI, uint256  _daoId, string memory _metadata, string memory _image) public returns (uint256) {
    uint256 tokenId = _tokenIdCounter.current();
    _tokenIdCounter.increment();
    _mint(msg.sender, tokenId);
    _setTokenURI(tokenId, tokenURI);

    idToUserSoul[tokenId] = Soul(tokenId, _daoId, msg.sender, _metadata, _image);
    userSoulIds[msg.sender].push(tokenId);
    userSoulCount[msg.sender] = userSoulCount[msg.sender] + 1;
    return tokenId;
  }

  function getUserNft(uint256 daoId) external view returns (Soul memory, bool) {

    Soul memory userSoul;
    for (uint i=0; i < userSoulIds[msg.sender].length; i++){
      if (idToUserSoul[userSoulIds[msg.sender][i]].daoId == daoId) {
        return (idToUserSoul[userSoulIds[msg.sender][i]], true);
      }
    }
    return (userSoul, false);
  }

  function getUserAllNft() external view returns (Soul[] memory) {
    uint256 tokenCount = userSoulIds[msg.sender].length;
    Soul[] memory souls = new Soul[](tokenCount);

    for (uint i=0; i < tokenCount; i++){
      souls[i] = idToUserSoul[userSoulIds[msg.sender][i]];
    }

    return souls;
  }
}
