import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./mesh-abi.json?raw";
const ADDR = "0xBa97BC5e46E4dB3E3A49f04773B3FF84B33C1087";

export async function getMeshConrtact() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
