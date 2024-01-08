import { RouteRecordName } from "vue-router";
import type Nostr from "@/utils/nostr";

export type cacheType = {
  mode: string;
  name?: RouteRecordName;
};

export type setType = {
  title: string;
};

export type accountType = {
  name: string; // show name
  address: string; // show address
  publicKey: string; // public key
  privateKey: string; // private key
};
