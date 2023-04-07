export default {
  path: "/dao",
  name: "dao",
  redirect: "/dao/api",
  component: () => import("@/views/dao/index.vue"),
  meta: {
    title: "Market",
    rank: 2
  },
  children: [
    // {
    //   path: "/dao/dao",
    //   name: "dao.dao",
    //   component: () => import("@/views/dao/dao/index.vue"),
    //   meta: {
    //     title: "Market",
    //     icon: "eos-icons:organisms"
    //   }
    // },
    // {
    //   path: "/dao/dao/:id",
    //   name: "dao.dao.detail",
    //   component: () => import("@/views/dao/dao/detail.vue"),
    //   meta: {
    //     hiddenTag: true,
    //     title: "Market Detail"
    //   }
    // },
    {
      path: "/dao/api",
      name: "dao.api",
      component: () => import("@/views/dao/api/index.vue"),
      meta: {
        title: "API Market",
        icon: "tabler:api-app"
      }
    },
    {
      path: "/dao/api/:id",
      name: "dao.api.detail",
      component: () => import("@/views/dao/api/detail.vue"),
      meta: {
        hiddenTag: true,
        title: "Market Detail"
      }
    }
  ]
} as RouteConfigsTable;
