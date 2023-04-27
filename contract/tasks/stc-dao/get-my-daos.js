const { networkConfig } = require("../../helper-hardhat-config");
task(
  "get-my-daos",
  "Calls an STCDao Contract to getMyDaos"
)
  .addOptionalParam(
    "contract",
    "The address of the STCDao contract that you want to call"
  )
  .setAction(async taskArgs => {
    const networkId = network.config.chainId;
    const contractAddr =
      taskArgs.contract || networkConfig[networkId]["stcDao"];

    console.log(
      "Reading data from STCDao contract ",
      contractAddr,
      "on network",
      network.name
    );
    const STCDaoContract = await ethers.getContractAt(
      "STCDao",
      contractAddr
    );

    const result = await STCDaoContract.getMyDaos();
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
