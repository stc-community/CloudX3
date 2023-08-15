const { networkConfig } = require("../../helper-hardhat-config")
const {formatBytes32String} = require("ethers/lib/utils");

task("call-cod", "Calls an codControl Contract to request external data")
  .addParam("contract", "The address of the codControl contract that you want to call")
  .addParam("requestid", "requestid")
  .addParam("sitename", "sitename")
  .addParam("url", "url")
  .addParam("httpmethod", "httpmethod")
  .addParam("requestdata", "The request-data")
  .setAction(async (taskArgs) => {


    const contractAddr = taskArgs.contract;
    const requestid = taskArgs.requestid;
    const sitename = taskArgs.sitename;
    const url = taskArgs.url;
    const httpmethod = taskArgs.httpmethod;
    const requestdata = taskArgs.requestdata;

    console.log("Contract:", contractAddr, "network:", network.name)

    const codControlContract = await ethers.getContractAt("CodControl", contractAddr);

    var result = await codControlContract.CallCOD(formatBytes32String(requestid), sitename, url, httpmethod, requestdata)
    console.log(
      "Contract:",
      contractAddr,
      "Transaction Hash: ",
      result.hash
    )
    console.log("Run get result:")
    console.log(
      "npx hardhat get-result-data --contract",
      contractAddr,
      "--network",
      network.name,
      "--reqid",
      requestid
    )
  })
module.exports = {}
