const {networkConfig} = require("../../helper-hardhat-config");
task("get-authorized-senders", "Calls Operator Contract to setAuthorizedSenders")
  .addOptionalParam("contract", "The address of the Operator contract that you want to call")
  .setAction(async (taskArgs, hre) => {
    const networkId = network.config.chainId

    const contractAddress = taskArgs.contract || networkConfig[networkId]["oracle"];
    console.log("Calling Operator contract ", contractAddress, " on network ", network.name)

    const Operator = await ethers.getContractFactory("Operator")

    const operatorContract = await Operator.attach(contractAddress)

    let result = await operatorContract.getAuthorizedSenders()

    console.log("Call getAuthorizedSenders contract, The AuthorizedSenders is", result)
  })
module.exports = {}
