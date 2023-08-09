import { getWritebleContractInstance } from "./web3";
import { getCurrentChain } from "@/config/chain";

// @ts-ignore
import ABI from "./pod-abi.json?raw";

export async function getPodContract() {
  const contract = await getWritebleContractInstance(
    getCurrentChain().podContract,
    ABI
  );

  return contract;
}
