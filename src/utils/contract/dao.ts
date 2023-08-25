import {
  getReadonlyConractInstance,
  getWritebleContractInstance
} from "./web3";
import { getCurrentChain } from "@/config/chain";

// @ts-ignore
import ABI from "./dao-abi.json?raw";

let writeContract;
export async function getDaoContract() {
  if (!writeContract) {
    writeContract = await getWritebleContractInstance(
      getCurrentChain().stcMarketContract,
      ABI
    );
  }

  return writeContract;
}

let readContract;
export async function getReadonlyDaoContract() {
  if (!readContract) {
    readContract = await getReadonlyConractInstance(
      getCurrentChain().stcMarketContract,
      ABI
    );
  }

  return readContract;
}

export type DAO = {
  // daoId: string;
  image: string;
  name: string;
  description: string;
  jsoninfo: string;
};

export type UserNFT = {
  tokenId: number;
  daoId: number;
  user: string;
  metadata: string;
  image: string;
};
