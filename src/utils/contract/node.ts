import { getWritebleContractInstance } from "./web3";
import { getCurrentChain } from "@/config/chain";

// @ts-ignore
import ABI from "./node-abi.json?raw";

export async function getNodeContract() {
  const contract = await getWritebleContractInstance(
    getCurrentChain().nodeContract,
    ABI
  );

  return contract;
}
