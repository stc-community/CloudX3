import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./container-abi.json?raw";
const ADDR = "0xb24d97a542aF908248163bB76c006e099877a1e6";

export async function getContainerContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
