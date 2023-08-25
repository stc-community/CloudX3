import {
  getReadonlyConractInstance,
  getWritebleContractInstance
} from "./web3";
import { getCurrentChain } from "@/config/chain";

// @ts-ignore
import ABI from "./token.json?raw";

let writeContract;
export async function getTokenContract() {
  if (!writeContract) {
    writeContract = await getWritebleContractInstance(
      getCurrentChain().stcMarketTokenContract,
      ABI
    );
  }

  return writeContract;
}

let readContract;
export async function getReadonlyTokenContract() {
  if (!readContract) {
    readContract = await getReadonlyConractInstance(
      getCurrentChain().stcMarketTokenContract,
      ABI
    );
  }

  return readContract;
}
