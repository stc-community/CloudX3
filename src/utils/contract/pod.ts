import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./pod-abi.json?raw";
const ADDR = "0xC033615137D482f51718106489035bE6CCDcE0DD";

export const PARAM = {
  jobID: "780d3dd1933a4a9d839f4c78d92ab595",
  oracle: "0xC1A56c1c85a4D957a513719FdB30eac50a861433"
};

export async function getPodContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
