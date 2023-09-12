export default {
  path: "/iot",
  name: "iot",
  redirect: "/iot/devices",
  component: () => import("@/views/iot/index.vue"),
  meta: {
    title: "iot",
    rank: 2
  },
  children: [
    {
      path: "/iot/devices",
      name: "iot.devices",
      component: () => import("@/views/iot/device/index.vue"),
      meta: {
        title: "Devices",
        icon: "mingcute:device-line"
      }
    },
    {
      path: "/iot/devices/detail",
      name: "iot.devices.detail",
      component: () => import("@/views/iot/device/detail/index.vue"),
      children: [
        {
          path: "/iot/device/:name/metrics",
          name: "iot.device.metrics",
          component: () => import("@/views/iot/device/detail/metrics.vue"),
          meta: {
            title: "Metrics",
            icon: "uil:chart"
          }
        },
        {
          path: "/iot/device/:name/devices",
          name: "iot.device.devices",
          component: () => import("@/views/iot/device/detail/devices.vue"),
          meta: {
            title: "Devices",
            icon: "ri:device-line"
          }
        },
        {
          path: "/iot/device/:name/events",
          name: "iot.device.events",
          component: () => import("@/views/iot/device/detail/events.vue"),
          meta: {
            title: "Events",
            icon: "fluent-mdl2:trigger-auto"
          }
        },
        {
          path: "/iot/device/:name/data",
          name: "iot.device.data",
          component: () => import("@/views/iot/device/detail/data.vue"),
          meta: {
            title: "Data",
            icon: "majesticons:data-line"
          }
        },
        {
          path: "/iot/device/:name/logs",
          name: "iot.device.logs",
          component: () => import("@/views/iot/device/detail/logs.vue"),
          meta: {
            title: "Logs",
            icon: "octicon:log-16"
          }
        }
      ]
    }
  ]
} as RouteConfigsTable;
