require("hardhat-deploy")
require("hardhat-deploy-ethers")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
  const { deploy } = deployments;
  console.log("Wallet Ethereum Address:", wallet.address);
  try {
    await deploy("STCDao", {
      from: wallet.address,
      // since it's difficult to estimate the gas before f4 address is launched, it's safer to manually set
      // a large gasLimit. This should be addressed in the following releases.
      // since Ethereum's legacy transaction format is not supported on FVM, we need to specify
      // maxPriorityFeePerGas to instruct hardhat to use EIP-1559 tx format
      log: true,
    });
  } catch (error) {
    console.log(error);
  }
}