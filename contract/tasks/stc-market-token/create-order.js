const { networkConfig } = require("../../helper-hardhat-config");

task("create-order", "Calls an STCMarket Contract to create dao")
  .addOptionalParam(
    "contract",
    "The address of the STCMarket contract that you want to call"
  )
  .addParam("daoId", "daoId")
  .addParam("marketId", "marketId")
  .addParam("totalCalls", "totalCalls")
  .addParam("orderPrice", "orderPrice")
  .setAction(async taskArgs => {
    const networkId = network.config.chainId;
    const contractAddr =
      taskArgs.contract || networkConfig[networkId]["STCMarketToken"];
    const daoId = taskArgs.daoId;
    const description = taskArgs.marketId;
    const jsoninfo = taskArgs.totalCalls;
    const image = taskArgs.orderPrice;

    console.log("Contract:", contractAddr, "network:", network.name);

    const STCMarketTokenContract = await ethers.getContractAt(
      "STCMarketToken",
      contractAddr
    );

    const result = await STCMarketTokenContract.createOrder(
      daoId,
      description,
      jsoninfo,
      image
    );
    console.log("Contract:", contractAddr, "Transaction Hash: ", result.hash);
  });
module.exports = {};
