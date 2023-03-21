import {
  getReadonlyConractInstance,
  getWritebleContractInstance
} from "./web3";

// @ts-ignore
import ABI from "./dao-abi.json?raw";
const ADDR = "0x5FeeBB15A0cdb30EFd286Dc1210f4aB3D239d1E3";

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
