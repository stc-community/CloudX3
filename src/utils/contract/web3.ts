import { Contract, ethers } from "ethers";
import { BrowserProvider, JsonRpcSigner } from "ethers";
import type { InterfaceAbi } from "ethers";
import { generatePrivateKey } from "nostr-tools";
import { storageSession } from "@pureadmin/utils";
import { md5 } from "../shared";
import { getCurrentChain } from "@/config/chain";
import { switchToChain } from "../switch-chain";

type Instance = {
  provider: BrowserProvider;
  signer: JsonRpcSigner;
};

let signer: JsonRpcSigner;
let provider: BrowserProvider;
// 获取 provider 实例
export async function getProviderSignerInstance(): Promise<Instance> {
  if (!provider) {
    // @ts-ignore
    if (window.ethereum == null) {
      // If MetaMask is not installed, we use the default provider,
      // which is backed by a variety of third-party services (such
      // as INFURA). They do not have private keys installed so are
      // only have read-only access
      // @ts-ignore
      provider = ethers.getDefaultProvider();
      window.metamask_required.showModal();
    } else {
      // Connect to the MetaMask EIP-1193 object. This is a standard
      // protocol that allows Ethers access to make all read-only
      // requests through MetaMask.
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
    }

    switchNetworkIfNeed();
    reloadPageIfWalletChanged();
  }

  return { provider, signer };
}

export async function signMessage(msg, cached = true): Promise<string> {
  const { signer } = await getProviderSignerInstance();

  if (!cached) {
    return signer.signMessage(msg);
  }

  const address = await signer.getAddress();
  const cacheKey = await md5(address);
  let message = storageSession().getItem(cacheKey) as string;
  if (!message) {
    message = await signer.signMessage(msg);
    storageSession().setItem(cacheKey, message);
  }

  return message;
}

export async function getWalletAddres() {
  const { signer } = await getProviderSignerInstance();

  return signer.getAddress();
}

export async function getReadonlyConractInstance(
  addr: string,
  abi: InterfaceAbi
) {
  const { provider } = await getProviderSignerInstance();
  const contract = new Contract(addr, abi, provider);

  return contract;
}

export async function getWritebleContractInstance(
  addr: string,
  abi: InterfaceAbi
) {
  const { signer } = await getProviderSignerInstance();
  const contract = new Contract(addr, abi, signer);

  return contract;
}

export function getRequestID(len = 0) {
  const id64 = generatePrivateKey();

  if (len) {
    return id64.substr(0, 32);
  }

  return "0x" + id64;
}

function switchNetworkIfNeed() {
  const targetChainId = getCurrentChain().chainId;

  window.ethereum.on("chainChanged", chainId => {
    // 刷新页面
    window.location.reload();
  });

  // 获取当前所连接的网络的 chainId
  window.ethereum.request({ method: "eth_chainId" }).then(currentChainId => {
    if (currentChainId === targetChainId) return;

    switchToChain(getCurrentChain());

    // window.ethereum.request({
    //   method: "wallet_switchEthereumChain",
    //   params: [{ chainId: targetChainId }]
    // });
  });
}

function reloadPageIfWalletChanged() {
  window.ethereum.on("accountsChanged", () => {
    window.location.reload();
  });
}
