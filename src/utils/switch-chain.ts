import { chains, type Chain } from "@/config/chain";

export const switchToChain = async (chain: Chain) => {
  try {
    await (window.ethereum as any).request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chain.chainId }]
    });
    console.log("链切换成功");
  } catch (error) {
    if (error.code === 4902) {
      console.log("链未添加，开始添加链...");
      await addChain(chain);
      console.log("链添加成功");
    } else {
      console.error("链切换失败:", error);
    }
  }
};

export const addChain = async (chain: Chain) => {
  try {
    await (window.ethereum as any).request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: chain.chainId,
          chainName: chain.chainName,
          nativeCurrency: {
            name: chain.nativeCurrency.name,
            symbol: chain.nativeCurrency.symbol,
            decimals: chain.nativeCurrency.decimals
          },
          rpcUrls: chain.rpcUrls,
          blockExplorerUrls: chain.blockExplorerUrls,
          iconUrls: chain.iconUrls
        }
      ]
    });
  } catch (error) {
    console.error("链添加失败:", error);
  }
};
