import { getWritebleContractInstance } from "./web3";

// @ts-ignore
import ABI from "./container-abi.json?raw";
const ADDR = "0x5a47A855444138b1bc7402976EC4fAd067A7163F";

export async function getContainerContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}
