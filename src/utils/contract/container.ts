import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./container-abi.json?raw";
const ADDR = "0xD87500B1A333c5F0F5cbB6FC9d77c7bD6715c49f";

export async function getContainerContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
