import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./pod-abi.json?raw";
const ADDR = "0x923e23099d0Ea52717a493c31720Aba13E2a98Ec";

export const PARAM = {
  jobID: "a72692a03b654762a11857c7e186d990",
  oracle: "0x248E10ec1C54CB570F7A15933286BAa1D59B70c0",
  requestUrl: "https://stc-test.gw105.oneitfarm.com/brige/providers/pod"
};

export async function getPodContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
