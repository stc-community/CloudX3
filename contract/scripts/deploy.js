const hre = require("hardhat");

async function main() {
  const STCMarket = await hre.ethers.getContractFactory("STCMarket");
  const lock = await STCMarket.deploy();

  await lock.deployed();

  console.log(`deployed to ${lock.address}`);

  const STCMarketToken = await hre.ethers.getContractFactory("STCMarketToken");
  const STCMarketTokenDeploy = await STCMarketToken.deploy();

  await STCMarketTokenDeploy.deployed();

  console.log(`deployed to ${STCMarketTokenDeploy.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
