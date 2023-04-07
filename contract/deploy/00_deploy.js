require("hardhat-deploy");
require("hardhat-deploy-ethers");

const private_key = network.config.accounts[0];
const wallet = new ethers.Wallet(private_key, ethers.provider);

module.exports = async ({ deployments }) => {
  const { deploy } = deployments;
  console.log("Wallet Ethereum Address:", wallet.address);
  try {
    await deploy("STCDao", {
      from: wallet.address,
      log: true
    });
  } catch (error) {
    console.log(error);
  }

  try {
    await deploy("STCDaoToken", {
      from: wallet.address,
      log: true
    });
  } catch (error) {
    console.log(error);
  }
};
