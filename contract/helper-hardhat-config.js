const networkConfig = {
  3141: {
    name: "hyperspace",

    STCMarket: "0x8b321Dde4CAe93848f756895fdb34E889A6c831b",

    STCMarketToken: "0xe9aeeA52781Cb265a83c65d44DB398Ad78571892",

    // Deploy Operator contract parameters
    owner: "",

    // linkToken address
    linkToken: "",

    // Oracle contract address
    oracle: "",

    // Parameters for calling the setAuthorizedSenders method in the Operator contract
    authorizedSenders: "",

    fee: "100000000000000000",
    fundAmount: "1000000000000000000", // 1
    automationUpdateInterval: "30"
  },
  314159: {
    name: "calibration",

    STCMarket: "0x07e5959627d3473e3948a7A9F9d8652Ea634510B",

    STCMarketToken: "0x9672F063Ccba1e4aC40d31f4c00fdC9dE491aB59",

    // Deploy Operator contract parameters
    owner: "",

    // linkToken address
    linkToken: "",

    // Oracle contract address
    oracle: "",

    // Parameters for calling the setAuthorizedSenders method in the Operator contract
    authorizedSenders: "",

    fee: 0.1 * 10 ** 18,
    fundAmount: "1000000000000000000", // 1
    automationUpdateInterval: "30"
  },
  420: {
    name: "opgoerli",

    STCMarket: "",

    STCMarketToken: "",

    // Deploy Operator contract parameters
    owner: "0x72Cd49C4434b583a5f09d10FCe91443554706316",

    // linkToken address
    linkToken: "0x8670a92eE8677892E3aa390f92d10Bf83FfF710c",

    // Oracle contract address
    oracle: "0xac463983a9379e175D6117d2F961a8621037931c",

    // ZtControl Oracle contract address
    ZtControl: "0x68f79DbDBb231BCAA1BcB0e8ff370d99fdBde0bf",

    // Parameters for calling the setAuthorizedSenders method in the Operator contract
    authorizedSenders: "0xBde01D181dfb7b7786A0cbEE5Cf65879505Aa35a,0x9485dAdE7fD5aB17625a302948850445d9B0b2b6",

    fee: "0.1",
    fundAmount: "100", // 100
    automationUpdateInterval: "30"
  }
};
const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS
};
