require("hardhat-deploy");
require("hardhat-deploy-ethers");

const private_key = network.config.accounts[0];
const wallet = new ethers.Wallet(private_key, ethers.provider);

module.exports = async ({ deployments }) => {
  const { deploy } = deployments;
  console.log("Wallet Ethereum Address:", wallet.address);
  try {
    await deploy("STCMarket", {
      from: wallet.address,
      log: true
    });
  } catch (error) {
    console.log(error);
  }

  try {
    await deploy("STCMarketToken", {
      from: wallet.address,
      log: true
    });
  } catch (error) {
    console.log(error);
  }
};
