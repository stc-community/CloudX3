const { networkConfig } = require("../../helper-hardhat-config");
task(
  "get-user-all-orders",
  "Calls an STCDaoToken Contract to getUserAllOrders"
)
  .addOptionalParam(
    "contract",
    "The address of the STCDaoToken contract that you want to call"
  )
  .setAction(async taskArgs => {
    const networkId = network.config.chainId;
    const contractAddr =
      taskArgs.contract || networkConfig[networkId]["stcToken"];

    console.log(
      "Reading data from STCDaoToken contract ",
      contractAddr,
      "on network",
      network.name
    );
    const STCDaoTokenContract = await ethers.getContractAt(
      "STCDaoToken",
      contractAddr
    );

    const result = await STCDaoTokenContract.getUserAllOrders();
    console.log("Data is:", result);
  });

module.exports = {};
