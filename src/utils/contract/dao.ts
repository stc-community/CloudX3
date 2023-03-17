import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./dao-abi.json?raw";
const ADDR = "0xA4eEea6A6E960892253a37A5fBF4b3cfD654B455";

export async function getDaoContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
