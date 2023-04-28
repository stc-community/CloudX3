const { networkConfig } = require("../../helper-hardhat-config");

task("stake", "Calls an STCMarket Contract to stake")
  .addOptionalParam(
    "contract",
    "The address of the STCMarket contract that you want to call"
  )
  .addParam("amount", "amount")
  .setAction(async taskArgs => {
    const networkId = network.config.chainId;
    const contractAddr =
      taskArgs.contract || networkConfig[networkId]["STCMarketToken"];
    const amount = taskArgs.amount;

    console.log("Contract:", contractAddr, "network:", network.name);

    const STCMarketTokenContract = await ethers.getContractAt(
      "STCMarketToken",
      contractAddr
    );

    const stakeResult = await STCMarketTokenContract.stake(amount);
    console.log(
      "Contract:",
      contractAddr,
      "Transaction Hash: ",
      stakeResult.hash
    );
    await stakeResult.wait();

    const stakerExists = await STCMarketTokenContract.stakerExists();
    console.log("User stake status is:", stakerExists);
  });
module.exports = {};
