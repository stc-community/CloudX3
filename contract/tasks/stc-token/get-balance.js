const { networkConfig } = require("../../helper-hardhat-config");
task(
  "get-balance",
  "Calls the STCDaoToken contract to read the amount of STCDaoToken owned by the account."
)
  .addOptionalParam("contract", "The address the STCDaoToken contract")
  .addParam("account", "The address of the account you want the balance for")
  .setAction(async taskArgs => {
    const networkId = network.config.chainId;
    const contractAddr = taskArgs.contract || networkConfig[networkId]["stcToken"];
    const account = taskArgs.account;

    console.log("Reading STCDaoToken owned by", account, "on network", network.name)

    const STCDaoTokenContract = await ethers.getContractAt(
      "STCDaoToken",
      contractAddr
    );

    //Call the balanceOf method
    let balance = ethers.utils.formatUnits(await STCDaoTokenContract.balanceOf(account))
    console.log("Amount of STCDaoToken owned by", account, "is", balance)
  });

module.exports = {};
