export default {
  path: "/iot",
  name: "iot",
  redirect: "/iot/mqtt",
  component: () => import("@/views/iot/index.vue"),
  meta: {
    title: "iot",
    rank: 20
  },
  children: [
    {
      path: "mqtt",
      name: "iot.mqtt",
      component: () => import("@/views/iot/mqtt/index.vue"),
      meta: {
        title: "MQTT",
        icon: "simple-icons:mqtt"
      }
    }
  ]
} as RouteConfigsTable;
