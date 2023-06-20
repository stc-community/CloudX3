export default {
  path: "/cod",
  name: "cod",
  redirect: "/cod/providers",
  component: () => import("@/views/cod/index.vue"),
  meta: {
    title: "Serverless",
    rank: 50
  },
  children: [
    {
      path: "/cod/hosts",
      name: "cod.hosts",
      component: () => import("@/views/cod/hosts/index.vue"),
      meta: {
        title: "Hosts",
        icon: "tabler:server-2"
      }
    },
    {
      path: "/cod/providers",
      name: "cod.providers",
      component: () => import("@/views/cod/providers/index.vue"),
      meta: {
        title: "Providers",
        icon: "healthicons:provider-fst"
      }
    },
    {
      path: "/cod/actors",
      name: "cod.actors",
      component: () => import("@/views/cod/actors/index.vue"),
      meta: {
        title: "Actors",
        icon: "simple-icons:wasmer"
      }
    },
    {
      path: "/cod/providers/market",
      name: "cod.providers.market",
      component: () => import("@/views/cod/providers/market.vue"),
      meta: {
        title: "Providers Market",
        icon: "mdi:marketplace"
      }
    },
    {
      path: "/cod/actors/market",
      name: "cod.actors.market",
      component: () => import("@/views/cod/actors/market.vue"),
      meta: {
        title: "Actors Market",
        icon: "mdi:marketplace"
      }
    }
  ]
} as RouteConfigsTable;
