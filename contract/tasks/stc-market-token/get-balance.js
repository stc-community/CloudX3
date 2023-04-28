const { networkConfig } = require("../../helper-hardhat-config");
task(
  "get-balance",
  "Calls the STCMarketToken contract to read the amount of STCMarketToken owned by the account."
)
  .addOptionalParam("contract", "The address the STCMarketToken contract")
  .addParam("account", "The address of the account you want the balance for")
  .setAction(async taskArgs => {
    const networkId = network.config.chainId;
    const contractAddr = taskArgs.contract || networkConfig[networkId]["STCMarketToken"];
    const account = taskArgs.account;

    console.log("Reading STCMarketToken owned by", account, "on network", network.name)

    const STCMarketTokenContract = await ethers.getContractAt(
      "STCMarketToken",
      contractAddr
    );

    //Call the balanceOf method
    let balance = ethers.utils.formatUnits(await STCMarketTokenContract.balanceOf(account))
    console.log("Amount of STCMarketToken owned by", account, "is", balance)
  });

module.exports = {};
