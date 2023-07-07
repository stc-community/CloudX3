const { ethers, network, run } = require("hardhat")
const {
  VERIFICATION_BLOCK_CONFIRMATIONS,
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config")

async function main() {
  await run("compile")
  console.log("deployOperator start")
  //set log level to ignore non errors
  ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

  let linkTokenAddress
  let ownerAddress
  const chainId = network.config.chainId

  ownerAddress = networkConfig[chainId]["owner"]
  linkTokenAddress = networkConfig[chainId]["linkToken"]
  console.log(`deploying operator, owner is ${ownerAddress} , linkTokenAddress is ${linkTokenAddress} to ${network.name}`)


  const operatorFactory = await ethers.getContractFactory("Operator")
  const operator = await operatorFactory.deploy(linkTokenAddress, ownerAddress)

  const waitBlockConfirmations = developmentChains.includes(network.name)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS
  await operator.deployTransaction.wait(waitBlockConfirmations)

  console.log(`operator deployed on ${network.name}, contract address is ${operator.address} `)
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

