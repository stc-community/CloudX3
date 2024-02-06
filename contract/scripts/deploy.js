const hre = require("hardhat");

const private_key = hre.network.config.accounts[0];
const wallet = new hre.ethers.Wallet(private_key, hre.ethers.provider);

async function main() {
  console.log("Wallet Ethereum Address:", wallet.address);
  const STCMarket = await hre.ethers.getContractFactory("STCMarket");
  const lock = await STCMarket.deploy();

  await lock.deployed();

  console.log(`STCMarket deployed to ${lock.address}`);

  const STCMarketToken = await hre.ethers.getContractFactory("STCMarketToken");
  const STCMarketTokenDeploy = await STCMarketToken.deploy();

  await STCMarketTokenDeploy.deployed();

  console.log(`STCMarketToken deployed to ${STCMarketTokenDeploy.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
