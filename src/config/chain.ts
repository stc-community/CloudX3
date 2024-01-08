// 合约相关的配置

type ChainName = "Optimism Goerli Testnet" | "Sepolia" | "opBNB Testnet";

export type Chain = {
  chainId: string;
  chainName: ChainName;

  chainlistUrl?: string;
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls?: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[];

  oracle: string;

  podContract: string; // 新建 pod
  podJobId: string;

  deploymentContract: string; // 新建 deployment
  deploymentJobId: string;

  nodeContract: string; // 新建 node
  nodeJobId: string;
  nodeOracle: string;

  zeroTrustContract: string; //  mesh 菜单中的切换网络状态和证书监听状态
  meshContract: string; // 服务熔断限流
  codContract: string; // 函数运算

  stcMarketContract: string;
  stcMarketTokenContract: string;

  userHubContract: string;
};

const chains: Chain[] = [
  {
    chainId: "0x1a4",
    chainName: "Optimism Goerli Testnet",
    chainlistUrl: "https://chainlist.org/chain/420",
    rpcUrls: [
      "https://endpoints.omniatech.io/v1/op/goerli/public",
      "https://optimism-goerli.publicnode.com"
    ],
    blockExplorerUrls: ["https://optimism-goerli.blockscout.com"],
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    },
    iconUrls: ["https://chainlist.org/unknown-logo.png"],

    oracle: "0xac463983a9379e175D6117d2F961a8621037931c",

    podContract: "0x3aDb761e02a76e9E8C8aBD12B2744f32F15D7166",
    podJobId: "780d3dd1933a4a9d839f4c78d92ab595",

    deploymentContract: "0xD6540c5eC23f664D3Fee7E2Aa608C6B197FD24ce",
    deploymentJobId: "68c1dc5cd63841459ff2395a931f042c",

    nodeContract: "0x05D3256D6aEd676dcd65A7250dE4094239Aa6a67",
    nodeJobId: "aa7198c0190f4cc29d4e4470c08f6391",
    nodeOracle: "0xac463983a9379e175D6117d2F961a8621037931c",

    zeroTrustContract: "0x0A873038d29bf16871232f59D589deA2B849C846",

    meshContract: "0x7A338445C1eAE2f13E294C28050541686187Cd5F",

    codContract: "0x0F5F6485F20E41325ce4feBBFCE92DCd47aF08Ea",

    stcMarketContract: "0xE972F4bB8313102bFEF7Fe1F7adfC6Ae2Bc0f933",
    stcMarketTokenContract: "0xc07f40758d3bb0f8B8E4C4d146f79265484ba6Fe",

    userHubContract: "0x1a441523e6FF0f657222bb673C05BF1EeE551174"
  },
  {
    chainId: "0xaa36a7",
    chainName: "Sepolia",
    chainlistUrl: "https://chainlist.org/chain/11155111",
    rpcUrls: [
      "https://eth-sepolia.g.alchemy.com/v2/demo",
      "https://rpc.sepolia.org"
    ],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    },
    iconUrls: ["https://chainlist.org/unknown-logo.png"],

    oracle: "0x84f146aD17078D9C278832768B0cd9EA597E0E67",

    podContract: "0xC7F694fbbc168CE02F2ce9cE84d748957F283336",
    podJobId: "c1efad95d1b34cc9b3e2ee06802a2a6d",

    deploymentContract: "0x6Ca351492b3b137aBb94052B847Af891bb067eFe",
    deploymentJobId: "d61b61a4e6684116be70d6ec6e58b52e",

    nodeContract: "0x1Acc504c02768ff00fBcEB331dB5Eda37fAC006E",
    nodeJobId: "aa7198c0190f4cc29d4e4470c08f6391",
    nodeOracle: "0x248E10ec1C54CB570F7A15933286BAa1D59B70c0",

    zeroTrustContract: "0x1Dd5940C70FFAeFe80EF4902ea5Ae9a2Ec3b574D",

    meshContract: "0x51aeb604fBfC7D40aB331ffFc007F246C2Db9180",

    codContract: "0x754e87664F278f2be89b3f496955752f127fBdf8",

    stcMarketContract: "0xa05D733aE699a1cd3Eb3443ca932FfB69e1e7fFC",
    stcMarketTokenContract: "0xe0bf50E501236845580A090c180B218CdAc46204",

    userHubContract: "0x51923dcd6Bb170bd28AD4425A6Dd5cD0456F8e52"
  },
  {
    chainId: "0x15eb",
    chainName: "opBNB Testnet",
    // chainlistUrl: "https://chainlist.org/chain/420",
    nativeCurrency: {
      name: "tBNB",
      symbol: "tBNB",
      decimals: 18
    },
    rpcUrls: ["https://opbnb-testnet-rpc.bnbchain.org/"],
    blockExplorerUrls: ["https://mainnet.opbnbscan.com/"],
    iconUrls: ["https://docs.bnbchain.org/opbnb-docs/img/logo.svg"],

    oracle: "0x141Ee019dE7bBd96441a6287C506B35C9718094f", //

    podContract: "0xc07f40758d3bb0f8B8E4C4d146f79265484ba6Fe", //
    podJobId: "780d3dd1933a4a9d839f4c78d92ab595", //

    deploymentContract: "0x67F47fC6cdCcD13bbe6ee88B3E7eb71726225e97", //
    deploymentJobId: "68c1dc5cd63841459ff2395a931f042c", //

    nodeContract: "0x962E121f6067B0dA6F90D07d565ba21004922B9d", //
    nodeJobId: "aa7198c0190f4cc29d4e4470c08f6391",
    nodeOracle: "0x248E10ec1C54CB570F7A15933286BAa1D59B70c0",

    zeroTrustContract: "0xd72E21A51594f1Cacf5F1231bA432c392323Fd8c", //

    meshContract: "0x73Cb12189FCAcDE3d742E2ad0ABD2068011F56Ac", //

    codContract: "0x0A873038d29bf16871232f59D589deA2B849C846", //

    stcMarketContract: "0xBd0F68775aA77288Ea2083D7d7776D2D0C3bf0Ee", //
    stcMarketTokenContract: "0x5d3c43875589f4881E769f4b46cFf6257dC5Ad1C", //

    userHubContract: "0xD436429Cf172a79A5E4D8F672c698A2E98315dc0" //
  }
];

let currentChain: ChainName = "Sepolia";
export function setCurrentChain(name: ChainName) {
  currentChain = name;
}

export function getCurrentChain() {
  return chains.find(i => i.chainName === currentChain);
}
