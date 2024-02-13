<script setup lang="ts">
import { markRaw, ref } from "vue";
import { VueFlow } from "@vue-flow/core";
import type { NodeComponent, Element } from "@vue-flow/core";
import { Controls } from "@vue-flow/controls";
import { Background } from "@vue-flow/background";
import { MiniMap } from "@vue-flow/minimap";
import "@vue-flow/controls/dist/style.css";
import "@vue-flow/minimap/dist/style.css";

import ActorNode from "./components/actor-node.vue";
import ProviderNode from "./components/provider-node.vue";
import NetworkNode from "./components/network-node.vue";

const nodeTypes: NodeComponent = {
  actor: markRaw(ActorNode),
  provider: markRaw(ProviderNode),
  network: markRaw(NetworkNode)
};

const elements = ref<Element[]>([
  {
    id: "a2",
    type: "actor",
    label: "Actor Node 1",
    width: 350,
    height: 100,
    position: { x: 100, y: 50 },
    data: {
      title: "Echo",
      caps: ["cloudx3:httpserver"]
    }
  },
  {
    id: "a1",
    type: "actor",
    label: "Actor Node 1",
    width: 350,
    height: 100,
    position: { x: 100, y: 250 },
    data: {
      title: "kvcounter",
      caps: ["cloudx3:httpserver", "cloudx3:keyvalue"]
    }
  },
  {
    id: "p1",
    type: "provider",
    label: "provider Node 1",
    width: 350,
    height: 100,
    position: { x: 500, y: 50 },
    data: {
      title: "HTTP Server(default)",
      cap: "cloudx3:httpserver"
    }
  },
  {
    id: "p2",
    type: "provider",
    width: 350,
    height: 100,
    position: { x: 500, y: 200 },
    data: {
      title: "Redis Keyvalue Store(default)",
      cap: "cloudx3:keyvalue"
    }
  },
  {
    id: "n1",
    type: "network",
    width: 250,
    height: 50,
    position: { x: 900, y: 80 },
    data: {
      title: "network"
    }
  },

  {
    id: "link1",
    source: "a1",
    target: "p1",
    animated: true
  },
  {
    id: "link2",
    source: "a1",
    sourceHandle: "a-1",
    target: "p2",
    animated: true
  },
  {
    id: "link3",
    source: "a2",
    target: "p1",
    animated: true
  },
  {
    id: "link4",
    source: "p1",
    sourceHandle: "cap2",
    target: "n1",
    animated: true
  }
]);
</script>
<template>
  <VueFlow
    class="border border-slate-100 h-[calc(100vh-120px)]"
    v-model="elements"
    :node-types="nodeTypes"
  >
    <div class="join join-vertical absolute ml-2 mt-2 z-10 text-xs">
      <button
        class="btn join-item tooltip tooltip-right normal-case"
        data-tip="Add a new actor"
        onclick="select_actor_modal.showModal()"
      >
        <IconifyIconOnline
          icon="simple-icons:wasmer"
          width="20px"
          height="20px"
        />
      </button>
      <button
        class="btn join-item tooltip tooltip-right normal-case"
        data-tip="Add a new provider"
      >
        <IconifyIconOnline
          icon="healthicons:provider-fst"
          width="20px"
          height="20px"
        />
      </button>
      <button
        class="btn join-item tooltip tooltip-right normal-case"
        data-tip="Add a new network"
      >
        <IconifyIconOnline icon="ri:earth-line" width="20px" height="20px" />
      </button>
    </div>
    <Background />
    <Controls />
    <MiniMap />
  </VueFlow>
  <dialog id="select_actor_modal" class="modal">
    <form method="dialog" class="modal-box">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
      <h3 class="font-bold text-lg">Select an actor from market</h3>
      <div class="py-4 grid grid-cols-2 gap-4">
        <button
          v-for="i in 8"
          class="border border-primary rounded-md px-2 py-3 bg-white hover:shadow-2xl"
        >
          <div class="flex items-center">
            <IconifyIconOnline
              class="text-primary mr-2"
              icon="simple-icons:wasmer"
              width="20px"
              height="20px"
            />
            <span class="text-sm">Echo</span>
          </div>
          <div
            v-for="j in 2"
            class="bg-slate-100 py-2 mt-1 rounded-md flex items-center relative"
          >
            <IconifyIconOnline
              class="ml-2 mr-2 text-primary"
              icon="mdi:code-tags"
              width="14px"
              height="14px"
            />
            <div class="text-xs">HI</div>
          </div>
        </button>
      </div>
    </form>
  </dialog>
</template>
