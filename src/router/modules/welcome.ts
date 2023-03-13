export default {
  path: "/welcome",
  name: "welcome",
  component: () => import("@/views/welcome/index.vue"),
  rank: 1,
  meta: {
    title: "Welcome",
    rank: 1
  }
} as RouteConfigsTable;
