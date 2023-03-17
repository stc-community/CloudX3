export default {
  path: "/dao",
  name: "dao",
  redirect: "/dao/dao",
  component: () => import("@/views/dao/index.vue"),
  meta: {
    title: "Dao",
    rank: 2
  },
  children: [
    {
      path: "dao",
      name: "dao.dao",
      component: () => import("@/views/dao/dao/index.vue"),
      meta: {
        title: "Daos",
        icon: "tabler:server-2"
      }
    },
    {
      path: "providers",
      name: "dao.providers",
      component: () => import("@/views/dao/providers/index.vue"),
      meta: {
        title: "Providers",
        icon: "healthicons:provider-fst"
      }
    },
    {
      path: "actors",
      name: "dao.actors",
      component: () => import("@/views/dao/actors/index.vue"),
      meta: {
        title: "Actors",
        icon: "simple-icons:wasmer"
      }
    }
  ]
} as RouteConfigsTable;
