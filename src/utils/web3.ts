import { Contract, ethers } from "ethers";
import { BrowserProvider, JsonRpcSigner } from "ethers";
import type { InterfaceAbi } from "ethers";

let signer: JsonRpcSigner;
let provider: BrowserProvider;
// 获取 provider 实例
export async function getProviderInstance(): Promise<BrowserProvider> {
  if (!provider) {
    // @ts-ignore
    if (window.ethereum == null) {
      // If MetaMask is not installed, we use the default provider,
      // which is backed by a variety of third-party services (such
      // as INFURA). They do not have private keys installed so are
      // only have read-only access
      // @ts-ignore
      provider = ethers.getDefaultProvider();
      window.alert("MetaMask not installed; using read-only defaults");
    } else {
      // Connect to the MetaMask EIP-1193 object. This is a standard
      // protocol that allows Ethers access to make all read-only
      // requests through MetaMask.
      provider = new ethers.BrowserProvider(window.ethereum);
    }
  }

  return provider;
}

// 获取 signer 实例
export async function getSignerInstance(): Promise<JsonRpcSigner> {
  if (!signer) {
    const provider = await getProviderInstance();
    signer = await provider.getSigner();
  }

  return signer;
}

export async function getConractReadonlyInstance(
  addr: string,
  abi: InterfaceAbi
) {
  const provider = await getProviderInstance();
  const contract = new Contract(addr, abi, provider);

  return contract;
}

export async function getContractWritebleInstance(
  addr: string,
  abi: InterfaceAbi
) {
  const signer = await getSignerInstance();
  const contract = new Contract(addr, abi, signer);

  return contract;
}
