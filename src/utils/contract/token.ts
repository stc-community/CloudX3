import {
  getReadonlyConractInstance,
  getWritebleContractInstance
} from "./web3";

// @ts-ignore
import ABI from "./token.json?raw";
const ADDR = "0x955938AddCAA040f425e3c5615b36BF12856Cd56";

let writeContract;
export async function getTokenContract() {
  if (!writeContract) {
    writeContract = await getWritebleContractInstance(ADDR, ABI);
  }

  return writeContract;
}

let readContract;
export async function getReadonlyTokenContract() {
  if (!readContract) {
    readContract = await getReadonlyConractInstance(ADDR, ABI);
  }

  return readContract;
}
