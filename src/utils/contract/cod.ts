import { getWritebleContractInstance } from "./web3";
import { getCurrentChain } from "@/config/chain";

// @ts-ignore
import ABI from "./cod-abi.json?raw";

export async function getCodConrtact() {
  const contract = await getWritebleContractInstance(
    getCurrentChain().codContract,
    ABI
  );

  return contract;
}
