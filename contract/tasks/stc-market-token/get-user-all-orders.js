const { networkConfig } = require("../../helper-hardhat-config");
task(
  "get-user-all-orders",
  "Calls an STCMarketToken Contract to getUserAllOrders"
)
  .addOptionalParam(
    "contract",
    "The address of the STCMarketToken contract that you want to call"
  )
  .setAction(async taskArgs => {
    const networkId = network.config.chainId;
    const contractAddr =
      taskArgs.contract || networkConfig[networkId]["STCMarketToken"];

    console.log(
      "Reading data from STCMarketToken contract ",
      contractAddr,
      "on network",
      network.name
    );
    const STCMarketTokenContract = await ethers.getContractAt(
      "STCMarketToken",
      contractAddr
    );

    const result = await STCMarketTokenContract.getUserAllOrders();
    console.log("Data is:", result);
  });

module.exports = {};
