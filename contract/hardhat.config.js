require("@nomicfoundation/hardhat-toolbox");
require("./tasks");
require("dotenv").config();

const COMPILER_SETTINGS = {
  optimizer: {
    enabled: true,
    runs: 1000000
  },
  metadata: {
    bytecodeHash: "none"
  }
};

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL ||
  "https://sepolia.infura.io/v3/60a1a58a3e8b4aa58451b9467a52818c";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const COSMOS_PRIVATE_KEY = process.env.COSMOS_PRIVATE_KEY;
const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;
const REPORT_GAS = process.env.REPORT_GAS || false;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        COMPILER_SETTINGS
      },
      {
        version: "0.6.6",
        COMPILER_SETTINGS
      },
      {
        version: "0.8.13",
        COMPILER_SETTINGS
      },
      {
        version: "0.7.6",
        COMPILER_SETTINGS
      }
    ]
  },
  defaultNetwork: "opbnb",
  networks: {
    cosmos: {
      chainId: 9000,
      url: "http://localhost:8545/",
      accounts: [COSMOS_PRIVATE_KEY]
    },
    calibration: {
      chainId: 314159,
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY]
    },
    mainnet: {
      chainId: 314,
      url: "https://api.node.glif.io",
      accounts: [MAINNET_PRIVATE_KEY]
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 11155111
    },
    opgoerli: {
      url: process.env.OPGOERLI_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 420,
    },
    opbnb: {
      url: "https://opbnb-testnet.nodereal.io/v1/57ac598465ef4545a95c2ee3d376cd57",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 5611,
      gasPrice: 3500,
    }
  },
  gasReporter: {
    enabled: REPORT_GAS,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true
  },
  contractSizer: {
    runOnCompile: false,
    only: ["APIConsumer"]
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts"
  },
  mocha: {
    timeout: 300000 // 300 seconds max for running tests
  }
};
