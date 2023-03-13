export default {
  path: "/mesh",
  name: "mesh",
  redirect: "/mesh/index",
  component: () => import("@/views/mesh/index.vue"),
  meta: {
    title: "Mesh",
    rank: 2
  },
  children: [
    {
      path: "index",
      name: "mesh.index",
      component: () => import("@/views/mesh/index/index.vue"),
      meta: {
        title: "Dashboard",
        icon: "carbon:dashboard"
      }
    },
    {
      path: "services",
      name: "mesh.services",
      component: () => import("@/views/mesh/services/index.vue"),
      meta: {
        title: "Services",
        icon: "healthicons:provider-fst"
      }
    }
  ]
} as RouteConfigsTable;
