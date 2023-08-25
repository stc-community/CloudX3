import { getWritebleContractInstance } from "./web3";
import { getCurrentChain } from "@/config/chain";

// @ts-ignore
import ABI from "./user-hub.json?raw";

export async function getUserHubContract() {
  const contract = await getWritebleContractInstance(
    getCurrentChain().userHubContract,
    ABI
  );

  return contract;
}
