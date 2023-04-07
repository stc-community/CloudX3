import {
  getReadonlyConractInstance,
  getWritebleContractInstance
} from "./web3";

// @ts-ignore
import ABI from "./dao-abi.json?raw";
const ADDR = "0x8b321Dde4CAe93848f756895fdb34E889A6c831b";

let writeContract;
export async function getDaoContract() {
  if (!writeContract) {
    writeContract = await getWritebleContractInstance(ADDR, ABI);
  }

  return writeContract;
}

let readContract;
export async function getReadonlyDaoContract() {
  if (!readContract) {
    readContract = await getReadonlyConractInstance(ADDR, ABI);
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
