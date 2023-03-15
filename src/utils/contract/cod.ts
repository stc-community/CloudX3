import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./cod-abi.json?raw";
const ADDR = "0x754e87664F278f2be89b3f496955752f127fBdf8";

export async function getCodConrtact() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
