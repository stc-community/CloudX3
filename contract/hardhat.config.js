require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
// require("./tasks")
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hyperspace",
  etherscan: {
    apiKey: "R2EX7FUME887H41HNEAR91U5B551ZVBHCT"
  },
  networks: {
    hyperspace: {
      chainId: 3141,
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY]
    },
    mainnet: {
      chainId: 314,
      url: "https://api.node.glif.io",
      accounts: [MAINNET_PRIVATE_KEY]
    },
    sepolia: {
      chainId: 11155111,
      url: "https://sepolia.infura.io/v3/60a1a58a3e8b4aa58451b9467a52818c",
      accounts: [PRIVATE_KEY]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
