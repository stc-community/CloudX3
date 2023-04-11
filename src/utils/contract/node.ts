import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./node-abi.json?raw";
const ADDR = "0x1Acc504c02768ff00fBcEB331dB5Eda37fAC006E";

export const PARAM = {
  jobID: "aa7198c0190f4cc29d4e4470c08f6391",
  oracle: "0x248E10ec1C54CB570F7A15933286BAa1D59B70c0"
};

export async function getNodeContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
