const {networkConfig} = require("../../helper-hardhat-config");
task("set-authorized-senders", "Calls Operator Contract to setAuthorizedSenders")
    .addOptionalParam("contract", "The address of the Operator contract that you want to call")
    .addOptionalParam("senders", "The AuthorizedSendersAddress of you want to set")
    .setAction(async (taskArgs, hre) => {
        const networkId = network.config.chainId

        const contractAddress = taskArgs.contract || networkConfig[networkId]["oracle"];
        const senders = taskArgs.senders || networkConfig[networkId]["authorizedSenders"];
        console.log("Calling Operator contract ", contractAddress, " on network ", network.name)

        const Operator = await ethers.getContractFactory("Operator")

        const operatorContract = await Operator.attach(contractAddress)
        console.log("Call setAuthorizedSenders contract, set ", senders, " to Operator. Operator address is ", contractAddress)
        var sendersArr = senders.split(',');
        const transaction = await operatorContract.setAuthorizedSenders(sendersArr)

        await transaction.wait()

        let result = await operatorContract.getAuthorizedSenders()

        console.log("Call getAuthorizedSenders contract, The AuthorizedSenders is", result)
    })
module.exports = {}
