import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./dao-abi.json?raw";
const ADDR = "0x07e5959627d3473e3948a7A9F9d8652Ea634510B";

export async function getDaoContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
