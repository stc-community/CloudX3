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
  // Nodes
  // An input node, specified by using `type: 'input'`
  { id: "1", type: "input", label: "Node 1", position: { x: 250, y: 5 } },

  {
    id: "actor1",
    type: "actor",
    label: "Actor Node 1",
    width: 350,
    height: 100,
    position: { x: 100, y: 300 },
    data: {
      title: "actor title",
      caps: ["cap1", "cap2", "cap3"]
    }
  },

  {
    id: "provider1",
    type: "provider",
    label: "provider Node 1",
    width: 350,
    height: 100,
    position: { x: 500, y: 300 },
    data: {
      title: "provider title",
      cap: "cap1"
    }
  },

  {
    id: "link1",
    source: "actor1",
    target: "provider1",
    animated: true
  },
  {
    id: "link2",
    source: "actor1",
    sourceHandle: "a-1",
    target: "provider1",
    animated: true
  },

  // {
  //   id: "cap1",
  //   type: "cap",
  //   label: "Cap Node 1",
  //   parentNode: "actor1",
  //   draggable: true,
  //   position: { x: 10, y: 30 }
  // },

  // {
  //   id: "cap2",
  //   type: "cap",
  //   label: "Cap Node 2",
  //   parentNode: "actor1",
  //   draggable: false,
  //   position: { x: 10, y: 70 }
  // },

  // Default nodes, you can omit `type: 'default'`
  { id: "2", label: "Node 2", position: { x: 100, y: 100 } },
  { id: "3", label: "Node 3", position: { x: 400, y: 100 } },

  // An output node, specified by using `type: 'output'`
  { id: "4", type: "output", label: "Node 4", position: { x: 400, y: 200 } },

  // Edges
  // Most basic edge, only consists of an id, source-id and target-id
  { id: "e1-3", source: "1", target: "3" },

  // An animated edge
  { id: "e1-2", source: "1", target: "2", animated: true }
]);
</script>
<template>
  <VueFlow
    class="border border-slate-100 h-[calc(100vh-120px)]"
    v-model="elements"
    :node-types="nodeTypes"
  />
</template>
