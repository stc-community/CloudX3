import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./user-hub.json?raw";
const ADDR = "0x76b77D1b625f5ad1Ed462C02C9a01f9622A60D8A";

export async function getUserHubContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
