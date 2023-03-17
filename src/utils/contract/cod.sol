//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * 零信任预言机控制
 */

contract ZtControl is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    // 结果数据map: requestId => result
    mapping(string => string) private _result;

    string private jobId;
    uint256 private fee;
    string public currentKey;
    string public currentData;

    mapping(string => site) private _siteControl;
    struct site {
        string jobId;
        address oracle;
    }

    function registerSite(
        string memory name,
        string memory job,
        address oracle
    ) public onlyOwner {
        require(bytes(name).length > 0);
        require(bytes(job).length > 0);
        require(oracle != address(0));
        site memory s = site({ jobId: job, oracle: oracle });
        _siteControl[name] = s;
    }

    /**
     * @notice Initialize the link token and target oracle
     * @dev The oracle address must be an Operator contract for multiword response
     *
     */
    // constructor(address _oracle, string memory _jobId, uint256 _fee, address _link) ConfirmedOwner(msg.sender) {
    //     // setChainlinkToken(_link);
    //     // setChainlinkOracle(_oracle);
    //     // jobId = _jobId;
    //     // fee = _fee; // 0,1 * 10**18 (Varies by network and job)
    // }
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x4E9bfAB50AE5aA47838921450BBc1b12a81798ba);
        // setChainlinkOracle(0x248E10ec1C54CB570F7A15933286BAa1D59B70c0);
        // jobId = "0c3fa923adea4e6b9cc37daf44420a92";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    // test url https://wasmcloud-httpserver.gw105.oneitfarm.com/api/counter/zhangchao

    // 调用COD平台函数
    function CallCOD(
        bytes32 _requestID,
        string memory _siteName,
        string memory _url,
        string memory _httpMethod,
        string memory _requestData
    ) public {
        require(bytes(_siteName).length > 0);
        _requestData = (bytes(_requestData).length > 0 ? _requestData : "e30=");
        // _httpMethod = (bytes(_httpMethod).length > 0 ? _httpMethod : "GET");
        request(
            _requestID,
            _siteName,
            _httpMethod,
            _url,
            "W10=",
            _requestData,
            "CallCOD"
        );
    }

    // 查询数据
    function GetResultData(
        bytes32 _requestUID
    ) public view returns (string memory) {
        // _requestData = (bytes(_requestData).length > 0 ? _requestData : "e30=");
        string memory _key = string(abi.encodePacked(_requestUID));
        return _result[_key];
    }

    // function GetStr(string memory str1, string memory str2) public pure returns (string memory) {
    //     string memory cc = string(abi.encodePacked(str1, str2));
    //     return cc;
    // }

    /**
     * @notice Request variable string from the oracle
     */
    function request(
        bytes32 _requestUID,
        string memory _siteName,
        string memory _method,
        string memory _url,
        string memory _headers,
        string memory _requestData,
        string memory _func
    ) public {
        _method = (bytes(_method).length > 0 ? _method : "GET");
        require(bytes(_url).length > 0);
        require(bytes(_siteName).length > 0);
        _headers = (bytes(_headers).length > 0 ? _headers : "W10=");
        _requestData = (bytes(_requestData).length > 0 ? _requestData : "e30=");
        site memory _site = _siteControl[_siteName];
        require(bytes(_site.jobId).length > 0);

        Chainlink.Request memory req = buildChainlinkRequest(
            stringToBytes32(_site.jobId),
            address(this),
            this.fulfill.selector
        );
        req.add("url", _url);
        req.add("method", _method);
        req.add("headers", _headers);
        req.add("requestData", _requestData);
        req.add("func", _func);
        req.add("site", _siteName);
        req.addBytes("requestUID", abi.encodePacked(_requestUID));
        sendChainlinkRequestTo(_site.oracle, req, fee);
    }

    event RequestFulfilled(bytes32 indexed requestId, string indexed data);

    /**
     * @notice Fulfillment function for variable string
     * @dev This is called by the oracle. recordChainlinkFulfillment must be used.
     */
    function fulfill(
        bytes32 _requestId,
        bytes32 _requestUID,
        string memory _stringData
    ) public recordChainlinkFulfillment(_requestId) {
        emit RequestFulfilled(_requestUID, _stringData);
        string memory _key = string(abi.encodePacked(_requestUID));
        _result[_key] = _stringData;
        currentKey = _key;
        currentData = _stringData;
    }

    /**
     * Allow withdraw of Link tokens from the contract
     */
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }

    function stringToBytes32(
        string memory source
    ) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            // solhint-disable-line no-inline-assembly
            result := mload(add(source, 32))
        }
    }
}
