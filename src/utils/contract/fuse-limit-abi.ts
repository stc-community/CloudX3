import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./fuse-limit-abi.json?raw";
const ADDR = "0x51aeb604fBfC7D40aB331ffFc007F246C2Db9180";

export async function getFuseLimitConrtact() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
