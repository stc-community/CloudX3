import { getWritebleContractInstance } from "./web3";
import { getCurrentChain } from "@/config/chain";

// @ts-ignore
import ABI from "./mesh-abi.json?raw";

export async function getMeshConrtact() {
  const contract = await getWritebleContractInstance(
    getCurrentChain().zeroTrustContract,
    ABI
  );

  return contract;
}
