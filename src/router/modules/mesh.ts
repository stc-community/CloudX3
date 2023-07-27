export default {
  path: "/mesh",
  name: "mesh",
  redirect: "/mesh/index",
  component: () => import("@/views/mesh/index.vue"),
  meta: {
    title: "Service Mesh",
    rank: 40
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
    },
    {
      path: "fuse",
      name: "mesh.fuse",
      component: () => import("@/views/mesh/fuse/index.vue"),
      meta: {
        title: "Fuse",
        icon: "mdi:fuse-off"
      }
    },
    {
      path: "rate",
      name: "mesh.rate",
      component: () => import("@/views/mesh/rate/index.vue"),
      meta: {
        title: "Rate Limit",
        icon: "simple-icons:speedtest"
      }
    },
    {
      path: "logs",
      name: "mesh.logs",
      component: () => import("@/views/mesh/logs/index.vue"),
      meta: {
        title: "Logs",
        icon: "ep:document"
      }
    }
  ]
} as RouteConfigsTable;
