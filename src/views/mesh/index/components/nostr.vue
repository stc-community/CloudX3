<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import Nostr from "@/utils/nostr";
import { useAccountStore } from "@/store/modules/account";

const accountStore = useAccountStore();

const sk = accountStore.getPrivateKey;
const url = "ws://182.61.59.53:2700";
// const url = "ws://110.41.16.146:2700";
const nostr = new Nostr(sk, url);

onMounted(async () => {
  await nostr.init();
});

const handleClick = (type: number) => {
  if (type === 1) {
    nostr.request(
      {
        m: "site",
        c: "site",
        a: "detail"
      },
      function (event) {
        console.log("site detail callback");
        console.log(event);
      }
    );
  } else if (type === 2) {
    nostr.request(
      {
        m: "site",
        c: "service",
        a: "list",
        content: {
          limit_num: 5
        }
      },
      function (event) {
        console.log("site list callback");
        console.log(event);
      }
    );
  }
};

onBeforeUnmount(() => {
  nostr.close();
  console.log("relay closed");
});
</script>

<template>
  <button class="btn btn-primary mt-5" @click="handleClick(1)">
    Site Detail
  </button>
  <button class="btn btn-primary mt-5 ml-10" @click="handleClick(2)">
    Site List
  </button>
</template>
