<script setup lang="ts">
import { markRaw, ref } from "vue";
import { VueFlow } from "@vue-flow/core";
import type { NodeComponent, Element } from "@vue-flow/core";
import ActorNode from "./components/actor-node.vue";
import ProviderNode from "./components/provider-node.vue";
import CapNode from "./components/cap-node.vue";

const nodeTypes: NodeComponent = {
  actor: markRaw(ActorNode),
  provider: markRaw(ProviderNode),
  cap: markRaw(CapNode)
};

const elements = ref<Element[]>([
  {
    id: "a1",
    type: "actor",
    label: "Actor Node 1",
    width: 350,
    height: 100,
    position: { x: 100, y: 50 },
    data: {
      title: "Echo",
      caps: ["wasmcloud:httpserver", "wasmcloud:keyvalue"]
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
      cap: "wasmcloud:httpserver"
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
      cap: "wasmcloud:keyvalue"
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
  }
]);
</script>
<template>
  <VueFlow
    class="border border-slate-100 h-[calc(100vh-120px)]"
    v-model="elements"
    :node-types="nodeTypes"
  />
</template>
