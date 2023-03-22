import {
  getReadonlyConractInstance,
  getWritebleContractInstance
} from "./web3";

// @ts-ignore
import ABI from "./dao-abi.json?raw";
const ADDR = "0xA3A07c5fdd2b7cea1c7aD9d67292206dBf8832D8";

export async function getDaoContract() {
  const contract = await getWritebleContractInstance(ADDR, ABI);

  return contract;
}

export async function getReadonlyDaoContract() {
  const contract = await getReadonlyConractInstance(ADDR, ABI);

  return contract;
}

export type DAO = {
  daoId: string;
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
