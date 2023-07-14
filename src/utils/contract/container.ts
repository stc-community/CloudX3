import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./container-abi.json?raw";
const ADDR = "0x70F4C5425bf1eAcd1fcfdaC5BfF5393EF45cA53E";

export async function getContainerContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
