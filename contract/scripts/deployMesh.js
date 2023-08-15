const { ethers, network, run } = require("hardhat");
const {
  VERIFICATION_BLOCK_CONFIRMATIONS,
  networkConfig,
  developmentChains
} = require("../helper-hardhat-config");
const LINK_TOKEN_ABI = require("@chainlink/contracts/abi/v0.4/LinkToken.json");

async function main() {
  await run("compile");
  console.log("deployMeshControl start");
  //set log level to ignore non errors
  ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR);

  const chainId = network.config.chainId;

  const accounts = await ethers.getSigners();
  const deployer = accounts[0];

  let linkToken
  let linkTokenAddress

  linkTokenAddress = networkConfig[chainId]["linkToken"]
  linkToken = new ethers.Contract(linkTokenAddress, LINK_TOKEN_ABI, deployer)

  const fee = ethers.utils.parseUnits(networkConfig[chainId]["fee"])
  const meshControlFactory = await ethers.getContractFactory("MeshControl");
  const meshControl = await meshControlFactory.deploy(fee, linkTokenAddress);
  await meshControl.deployed()

  console.log(
    `MeshControl deployed on ${network.name}, contract address is ${meshControl.address} `
  );

  // auto-funding
  const fundAmount = ethers.utils.parseUnits(networkConfig[chainId]["fundAmount"]);
  await linkToken.transfer(meshControl.address, fundAmount);

  console.log(
    `transfer MeshControl with ${fundAmount / 1000000000000000000} Link`
  );


  var set = await meshControl.setSites(networkConfig[chainId]["sitename"], networkConfig[chainId]["ztMeshJob"],
    networkConfig[chainId]["oracle"], networkConfig[chainId]["sitehost"])

  console.log("Contract MeshControl setSites success, hash: ", set.hash)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
