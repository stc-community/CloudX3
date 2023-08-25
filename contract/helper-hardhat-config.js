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

    STCMarket: "0xE972F4bB8313102bFEF7Fe1F7adfC6Ae2Bc0f933",

    STCMarketToken: "0xc07f40758d3bb0f8B8E4C4d146f79265484ba6Fe",

    // Deploy Operator contract parameters
    owner: "0x72Cd49C4434b583a5f09d10FCe91443554706316",

    // linkToken address
    linkToken: "0x8670a92eE8677892E3aa390f92d10Bf83FfF710c",

    // Oracle contract address
    oracle: "0xac463983a9379e175D6117d2F961a8621037931c",

    // ZtControl Oracle contract address
    ZtControl: "0x0A873038d29bf16871232f59D589deA2B849C846",
    mesh: "0x7A338445C1eAE2f13E294C28050541686187Cd5F",
    cod: "0x0F5F6485F20E41325ce4feBBFCE92DCd47aF08Ea",

    //Container
    pod: "0x3aDb761e02a76e9E8C8aBD12B2744f32F15D7166",
    deployment: "0xD6540c5eC23f664D3Fee7E2Aa608C6B197FD24ce",
    cluster: "0x6f7Cb43Eba76fdAA1d86386a031B1c9a3faE4ffe",
    node: "0x05D3256D6aEd676dcd65A7250dE4094239Aa6a67",

    // Parameters for calling the setAuthorizedSenders method in the Operator contract
    authorizedSenders: "0x9485dAdE7fD5aB17625a302948850445d9B0b2b6",

    fee: "0.1",
    fundAmount: "100", // 100
    automationUpdateInterval: "30"
  },
  5611: {
    name: "opbnb",
    // Deploy Operator contract parameters
    owner: "0x72Cd49C4434b583a5f09d10FCe91443554706316",

    // linkToken address
    linkToken: "0x07e5959627d3473e3948a7A9F9d8652Ea634510B",

    // Oracle contract address
    oracle: "0x141Ee019dE7bBd96441a6287C506B35C9718094f",

    // Serverless Oracle contract address
    ZtControl: "0xd72E21A51594f1Cacf5F1231bA432c392323Fd8c",
    mesh: "0x73Cb12189FCAcDE3d742E2ad0ABD2068011F56Ac",
    cod: "0x0A873038d29bf16871232f59D589deA2B849C846",
    // Container contract
    pod: "0xed809AF6f37889c7914Bf9f10a210c49EFF9011F",
    deployment: "0xCe76ab89Cac76d67Bd43Ed901AE6544b03103a63",
    cluster: "0xcfB3900Aa34b1584229fb06f405D7691910d1980",
    node: "0x962E121f6067B0dA6F90D07d565ba21004922B9d",
    // ApiMarket
    STCMarket: "0xBd0F68775aA77288Ea2083D7d7776D2D0C3bf0Ee",
    STCMarketToken: "0x5d3c43875589f4881E769f4b46cFf6257dC5Ad1C",

    //Serverless Site Info
    sitename: "gw105",
    sitehost: "http://192.168.103.113:4441",
    ztMeshJob: "84981edb58a2455aade2e9d797ae86f1",
    codjob: "3c09c86cffbd4563a3c0b2b97f411aec",

    // Parameters for calling the setAuthorizedSenders method in the Operator contract
    authorizedSenders: "0x68dd2c02ae32fc47EafE970dfc02d14030a0c624",

    fee: "0.1",
    fundAmount: "100", // 100
    automationUpdateInterval: "30"
  },

};
const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS
};
