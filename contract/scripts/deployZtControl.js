const { ethers, network, run } = require("hardhat")
const {
    VERIFICATION_BLOCK_CONFIRMATIONS,
    networkConfig,
    developmentChains,
} = require("../helper-hardhat-config")
const LINK_TOKEN_ABI = require("@chainlink/contracts/abi/v0.4/LinkToken.json")

async function main() {
  await run("compile")
    console.log("deployZtControl start")
    //set log level to ignore non errors
    ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

    const chainId = network.config.chainId

    const accounts = await ethers.getSigners()
    const deployer = accounts[0]

    let linkToken
    let linkTokenAddress

    if (chainId == 31337) {
        const linkTokenFactory = await ethers.getContractFactory("LinkToken")
        linkToken = await linkTokenFactory.connect(deployer).deploy()
        linkTokenAddress = linkToken.address
    } else {
        linkTokenAddress = networkConfig[chainId]["linkToken"]
        linkToken = new ethers.Contract(linkTokenAddress, LINK_TOKEN_ABI, deployer)
    }

    const fee = networkConfig[chainId]["fee"]

    const ztControlFactory = await ethers.getContractFactory("ZtControl")
    // const ztControl = await ztControlFactory.deploy(fee, linkTokenAddress)
    const ztControl = await ztControlFactory.deploy(fee, linkTokenAddress)

    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    await ztControl.deployTransaction.wait(waitBlockConfirmations)

    console.log(`ZtControl deployed on ${network.name}, contract address is ${ztControl.address} `)

    // auto-funding
    const fundAmount = networkConfig[chainId]["fundAmount"]
    await linkToken.transfer(ztControl.address, fundAmount)

    console.log(`transfer ZtControl with ${fundAmount/1000000000000000000} Link`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
