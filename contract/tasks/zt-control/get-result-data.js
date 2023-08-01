const { networkConfig } = require("../../helper-hardhat-config");
task("get-result-data", "Calls an ZtControl Contract to read data obtained from an external API")
    .addOptionalParam("contract", "The address of the ZtControl contract that you want to call")
    .addParam("reqid", "reqid")
    .setAction(async (taskArgs) => {
        const contractAddr = taskArgs.contract || networkConfig[networkId]["ZtControl"];
        const reqid = taskArgs.reqid;

        console.log(
            "Reading data from ZtControl contract ",
            contractAddr,
            "on network",
            network.name
        )
        const ztControlContract = await ethers.getContractAt("ZtControl", contractAddr);

        let result = await ztControlContract.getResultData(reqid)
        console.log("Data is:", result)
        if (result === "" && ["hardhat", "localhost", "ganache"].indexOf(network.name) === 0) {
            console.log("You'll either need to wait another minute, or fix something!")
        }
        if (["hardhat", "localhost", "ganache"].indexOf(network.name) >= 0) {
            console.log("You'll have to manually update the value since you're on a local chain!")
        }
    })

module.exports = {}
