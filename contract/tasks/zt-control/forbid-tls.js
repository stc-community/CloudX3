const { networkConfig } = require("../../helper-hardhat-config")

task("forbid-tls", "Calls an ZtControl Contract to request external data")
    .addOptionalParam("contract", "The address of the ZtControl contract that you want to call")
    .addParam("site", "site name")
    .addParam("requestdata", "The request-data")
    .addParam("reqid", "reqid")
    .setAction(async (taskArgs) => {
        const networkId = network.config.chainId
        const contractAddr = taskArgs.contract || networkConfig[networkId]["ZtControl"];
        const requestdata = taskArgs.requestdata;
        const site = taskArgs.site;
        const reqid = taskArgs.reqid;

        console.log("Contract:", contractAddr, "network:", network.name)

        const ztControlContract = await ethers.getContractAt("ZtControl", contractAddr);

        var result = await ztControlContract.forbidTls(site, requestdata, reqid)
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
            reqid
        )
    })
module.exports = {}
