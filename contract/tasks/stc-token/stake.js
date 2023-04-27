const { networkConfig } = require("../../helper-hardhat-config");

task("stake", "Calls an STCDao Contract to stake")
  .addOptionalParam(
    "contract",
    "The address of the STCDao contract that you want to call"
  )
  .addParam("amount", "amount")
  .setAction(async taskArgs => {
    const networkId = network.config.chainId;
    const contractAddr =
      taskArgs.contract || networkConfig[networkId]["stcToken"];
    const amount = taskArgs.amount;

    console.log("Contract:", contractAddr, "network:", network.name);

    const STCDaoTokenContract = await ethers.getContractAt(
      "STCDaoToken",
      contractAddr
    );

    const stakeResult = await STCDaoTokenContract.stake(amount);
    console.log(
      "Contract:",
      contractAddr,
      "Transaction Hash: ",
      stakeResult.hash
    );
    await stakeResult.wait();

    const stakerExists = await STCDaoTokenContract.stakerExists();
    console.log("User stake status is:", stakerExists);
  });
module.exports = {};
