import {
  getReadonlyConractInstance,
  getWritebleContractInstance
} from "./web3";

// @ts-ignore
import ABI from "./token.json?raw";
const ADDR = "0xA3A07c5fdd2b7cea1c7aD9d67292206dBf8832D8";

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
