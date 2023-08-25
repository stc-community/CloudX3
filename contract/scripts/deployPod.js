const { ethers, network, run } = require("hardhat")
const {
  VERIFICATION_BLOCK_CONFIRMATIONS,
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config")
const LINK_TOKEN_ABI = require("@chainlink/contracts/abi/v0.4/LinkToken.json")

async function main() {
  await run("compile")
  console.log("deployPod start")
  //set log level to ignore non errors
  ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

  const chainId = network.config.chainId

  const accounts = await ethers.getSigners()
  const deployer = accounts[0]


  const linkTokenAddress = networkConfig[chainId]["linkToken"]
  const linkToken = new ethers.Contract(linkTokenAddress, LINK_TOKEN_ABI, deployer)


  const containerPodFactory = await ethers.getContractFactory("ContainerPod")
  const containerPod = await containerPodFactory.deploy(linkTokenAddress)

  const waitBlockConfirmations = developmentChains.includes(network.name)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS
  await containerPod.deployTransaction.wait(waitBlockConfirmations)

  console.log(`ContainerPod deployed on ${network.name}, contract address is ${containerPod.address} `)

  // auto-funding
  const fundAmount = ethers.utils.parseUnits(networkConfig[chainId]["fundAmount"])
  await linkToken.transfer(containerPod.address, fundAmount)

  console.log(`transfer ContainerPod with ${fundAmount/1000000000000000000} Link`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
