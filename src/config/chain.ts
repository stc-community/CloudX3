// 合约相关的配置

type ChainName = "Optimism Goerli Testnet" | "Sepolia";

type Chain = {
  chainId: string;
  chainName: ChainName;

  chainlistUrl: string;

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

    codContract: "0x98e7f2Bc989Bd181a009DA780C83A78e00AD9549",

    stcMarketContract: "0xE972F4bB8313102bFEF7Fe1F7adfC6Ae2Bc0f933",
    stcMarketTokenContract: "0xc07f40758d3bb0f8B8E4C4d146f79265484ba6Fe",

    userHubContract: "0x1a441523e6FF0f657222bb673C05BF1EeE551174"
  },
  {
    chainId: "0xaa36a7",
    chainName: "Sepolia",
    chainlistUrl: "https://chainlist.org/chain/11155111",

    oracle: "0xC1A56c1c85a4D957a513719FdB30eac50a861433",

    podContract: "0xC033615137D482f51718106489035bE6CCDcE0DD",
    podJobId: "780d3dd1933a4a9d839f4c78d92ab595",

    deploymentContract: "0x70F4C5425bf1eAcd1fcfdaC5BfF5393EF45cA53E",
    deploymentJobId: "68c1dc5cd63841459ff2395a931f042c",

    nodeContract: "0x1Acc504c02768ff00fBcEB331dB5Eda37fAC006E",
    nodeJobId: "aa7198c0190f4cc29d4e4470c08f6391",
    nodeOracle: "0x248E10ec1C54CB570F7A15933286BAa1D59B70c0",

    zeroTrustContract: "0x1Dd5940C70FFAeFe80EF4902ea5Ae9a2Ec3b574D",

    meshContract: "0x51aeb604fBfC7D40aB331ffFc007F246C2Db9180",

    codContract: "0x754e87664F278f2be89b3f496955752f127fBdf8",

    stcMarketContract: "0x6051273DB68F2af68617589f30F8a91f859e5b82",
    stcMarketTokenContract: "0x8b321Dde4CAe93848f756895fdb34E889A6c831b",

    userHubContract: "0x0B6900b5306b49F6B32113BeeB9BA6c43982ce10"
  }
];

let currentChain: ChainName = "Optimism Goerli Testnet";
export function setCurrentChain(name: ChainName) {
  currentChain = name;
}

export function getCurrentChain() {
  return chains.find(i => i.chainName === currentChain);
}
