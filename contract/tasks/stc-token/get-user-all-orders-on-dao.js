const { networkConfig } = require("../../helper-hardhat-config");
task(
  "get-user-all-orders-on-dao",
  "Calls an STCDaoToken Contract to getUserAllOrdersOnDao"
)
  .addOptionalParam(
    "contract",
    "The address of the STCDaoToken contract that you want to call"
  )
  .addParam("daoId", "daoId")
  .setAction(async taskArgs => {
    const networkId = network.config.chainId;
    const contractAddr =
      taskArgs.contract || networkConfig[networkId]["stcToken"];

    const daoId = taskArgs.daoId;

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

    const result = await STCDaoTokenContract.getUserAllOrdersOnDao(daoId);
    console.log("Data is:", result);
    if (
      result === "" &&
      ["hardhat", "localhost", "ganache"].indexOf(network.name) === 0
    ) {
      console.log(
        "You'll either need to wait another minute, or fix something!"
      );
    }
    if (["hardhat", "localhost", "ganache"].indexOf(network.name) >= 0) {
      console.log(
        "You'll have to manually update the value since you're on a local chain!"
      );
    }
  });

module.exports = {};
