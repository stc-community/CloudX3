export default {
  path: "/container",
  name: "container",
  redirect: "/container/deployments",
  component: () => import("@/views/container/index.vue"),
  meta: {
    title: "Container",
    rank: 3
  },
  children: [
    {
      path: "deployments",
      name: "container.deployments",
      component: () => import("@/views/container/deployments/index.vue"),
      meta: {
        title: "Deployments",
        icon: "ant-design:deployment-unit-outlined"
      }
    },
    {
      path: "pods",
      name: "container.pods",
      component: () => import("@/views/container/pods/index.vue"),
      meta: {
        title: "Pods",
        icon: "pajamas:pod"
      }
    }
  ]
} as RouteConfigsTable;
