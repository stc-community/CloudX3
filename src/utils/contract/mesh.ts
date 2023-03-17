import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./mesh-abi.json?raw";
const ADDR = "0x1Dd5940C70FFAeFe80EF4902ea5Ae9a2Ec3b574D";

export async function getMeshConrtact() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
