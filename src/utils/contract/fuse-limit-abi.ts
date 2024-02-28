import { getWritebleContractInstance } from "./web3";

import { getCurrentChain } from "@/config/chain";
// @ts-ignore
import ABI from "./fuse-limit-abi.json?raw";

export async function getFuseLimitConrtact() {
  const contract = await getWritebleContractInstance(
    getCurrentChain().meshContract,
    ABI
  );

  return contract;
}
