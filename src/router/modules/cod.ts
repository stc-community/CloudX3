export default {
  path: "/cod",
  name: "cod",
  redirect: "/cod/providers",
  component: () => import("@/views/cod/index.vue"),
  meta: {
    title: "COD",
    rank: 3
  },
  children: [
    {
      path: "hosts",
      name: "cod.hosts",
      component: () => import("@/views/cod/hosts/index.vue"),
      meta: {
        title: "Hosts",
        icon: "tabler:server-2"
      }
    },
    {
      path: "providers",
      name: "cod.providers",
      component: () => import("@/views/cod/providers/index.vue"),
      meta: {
        title: "Providers",
        icon: "healthicons:provider-fst"
      }
    },
    {
      path: "actors",
      name: "cod.actors",
      component: () => import("@/views/cod/actors/index.vue"),
      meta: {
        title: "Actors",
        icon: "simple-icons:wasmer"
      }
    }
  ]
} as RouteConfigsTable;
