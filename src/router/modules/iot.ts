export default {
  path: "/iot",
  name: "iot",
  redirect: "/iot/mqtt/service",
  component: () => import("@/views/iot/index.vue"),
  meta: {
    title: "iot",
    rank: 20
  },
  children: [
    {
      path: "metrics",
      name: "iot.metrics",
      component: () => import("@/views/iot/mqtt/index.vue"),
      meta: {
        title: "Metrics",
        icon: "uil:chart"
      }
    },
    {
      path: "devices",
      name: "iot.devices",
      component: () => import("@/views/iot/mqtt/index.vue"),
      meta: {
        title: "Devices",
        icon: "mingcute:device-line"
      }
    },
    {
      path: "triggers",
      name: "iot.triggers",
      component: () => import("@/views/iot/mqtt/index.vue"),
      meta: {
        title: "Triggers",
        icon: "fluent-mdl2:trigger-auto"
      }
    },
    {
      path: "data",
      name: "iot.data",
      component: () => import("@/views/iot/mqtt/index.vue"),
      meta: {
        title: "Data",
        icon: "majesticons:data-line"
      }
    },
    {
      path: "logs",
      name: "iot.logs",
      component: () => import("@/views/iot/mqtt/index.vue"),
      meta: {
        title: "Logs",
        icon: "octicon:log-16"
      }
    },

    {
      path: "mqtt/:tab",
      name: "iot.mqtt",
      component: () => import("@/views/iot/mqtt/index.vue"),
      meta: {
        title: "MQTT",
        icon: "simple-icons:mqtt"
      }
    }
  ]
} as RouteConfigsTable;
