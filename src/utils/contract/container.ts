import { getWritebleContractInstance } from "./web3";
import { getCurrentChain } from "@/config/chain";

// @ts-ignore
import ABI from "./container-abi.json?raw";

export async function getContainerContract() {
  const contract = await getWritebleContractInstance(
    getCurrentChain().deploymentContract,
    ABI
  );

  return contract;
}
