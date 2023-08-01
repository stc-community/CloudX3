import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./user-hub.json?raw";
const ADDR = "0x0B6900b5306b49F6B32113BeeB9BA6c43982ce10";

export async function getUserHubContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
