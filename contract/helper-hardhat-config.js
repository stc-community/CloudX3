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

    fee: "100000000000000000",
    fundAmount: "1000000000000000000", // 1
    automationUpdateInterval: "30"
  }
};

module.exports = {
  networkConfig
};
