const { networkConfig } = require("../../helper-hardhat-config")

task("set-sites", "Call ZtControl Contract to configure site data")
    .addOptionalParam("contract", "The address of the ZtControl contract that you want to call")
    .addParam("name", "site name")
    .addParam("jobid", "job id")
    .addOptionalParam("oracle", "operator contract address")
    .addParam("host", "request address host. eg. http://example.com:8080")
    .setAction(async (taskArgs) => {
        const networkId = network.config.chainId
        const contractAddr = taskArgs.contract || networkConfig[networkId]["ZtControl"];
        const name = taskArgs.name;
        const jobid = taskArgs.jobid;
        const oracle = taskArgs.oracle || networkConfig[networkId]["oracle"];
        const host = taskArgs.host;

        console.log("Contract:", contractAddr, "network", network.name)

        const ztControlContract = await ethers.getContractAt("ZtControl", contractAddr);

        var set = await ztControlContract.setSites(name, jobid, oracle, host)
        console.log(
            "Contract ",
            contractAddr,
            "Transaction Hash: ",
            set.hash
        )

        await set.wait()

        var result = await ztControlContract._sites(name)
        console.log(
            "Contract ",
            contractAddr,
            " Configure site data: ",
            result
        )
    })
module.exports = {}
