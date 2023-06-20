export default {
  path: "/container",
  name: "container",
  redirect: "/container/deployments",
  component: () => import("@/views/container/index.vue"),
  meta: {
    title: "Container",
    rank: 20
  },
  children: [
    {
      path: "deployments",
      name: "container.deployments",
      component: () => import("@/views/container/deployments/index.vue"),
      meta: {
        title: "Deployments",
        icon: "ic:outline-autorenew"
      }
    },
    {
      path: "pods",
      name: "container.pods",
      component: () => import("@/views/container/pods/index.vue"),
      meta: {
        title: "Pods",
        icon: "ion:cube"
      }
    },
    {
      path: "nodes",
      name: "container.nodes",
      component: () => import("@/views/container/nodes/index.vue"),
      meta: {
        title: "Nodes",
        icon: "tabler:server-2"
      }
    }
  ]
} as RouteConfigsTable;
