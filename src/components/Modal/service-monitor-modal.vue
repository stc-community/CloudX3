<script setup lang="ts">
import { loadData } from "@/utils/shared";
import EventBus from "@/utils/event-bus";
import { reactive, onBeforeUnmount, ref } from "vue";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();
import dayjs from "dayjs";

const loading = ref(true);
const data = reactive({});
const loadingMem = ref(true);
const memData = reactive({});
onBeforeUnmount(() => {
  EventBus.off("showServiceMonitor");
});

const RESOURCE_TYPE = {
  SIDECAR_CPU: 1, // 1.sideCar cpu;
  SIDECAR_MEM_USAGE_MB: 2, // 2.sideCar进程使用内存(MB);
  SIDECAR_CONTAINER_MEM_USAGE_PERCENT: 3, // 3.sideCar容器使用内存(百分比);
  SIDECAR_CONTAINER_MEM_LEFT_MB: 4, // 4.sieCar容器剩余可用内存
  SERVICE_CPU: 5, // 5.service cpu;
  SERVICE_MEM_USAGE_PERCENT: 6, // 6.service使用内存(百分比);
  SERVICE_MEM_LEFT_MB: 7, // 7.service剩余内存(MB)
  SIDECAR_DISK_READ_SPEED: 8, // 8.sideCar磁盘读取速率;
  SIDECAR_DISK_WRITE_SPEED: 9, // 9.sideCar磁盘写入速率;
  SERVICE_DISK_READ_SPEED: 10, // 10.service磁盘读取速率;
  SERVICE_DISK_WRITE_SPEED: 11, // 11.service磁盘写入速率;
  SERVICE_NETWORK_RX_BYTES: 12, // 12.network_rx_bytes 网卡接收流量速率;
  SERVICE_NETWORK_TX_BYTES: 13, // 13.network_tx_bytes 网卡发送流量速率;
  NETSTAT: 14, // 14.netstat
  SERVICE_MEM_USAGE_MB: 15 // 16 服务内存使用(字节);
};

EventBus.on("showServiceMonitor", service => {
  loading.value = true;
  loadData(
    data,
    "govern.resource.trend",
    {
      start_time: dayjs(new Date()).subtract(1, "hour").unix(),
      end_time: dayjs(new Date()).unix(),
      unique_id: service.unique_id,
      resource_type: RESOURCE_TYPE.SERVICE_CPU
    },
    loading,
    makeChartData
  );

  loadData(
    memData,
    "govern.resource.trend",
    {
      start_time: dayjs(new Date()).subtract(15, "minute").unix(),
      end_time: dayjs(new Date()).unix(),
      unique_id: service.unique_id,
      resource_type: RESOURCE_TYPE.SERVICE_MEM_USAGE_MB
    },
    loadingMem,
    makeMemChartData
  );
});

const charts = reactive({
  cpu: { series: [], options: {} },
  mem: { series: [], options: {} }
});

const makeData = arr => {
  const categories = [];

  const series = arr.map(({ metric, values }) => {
    const data = [];
    const shouldMakeCategories = categories.length === 0;
    values.forEach(d => {
      if (shouldMakeCategories) {
        // categories.push(new Date(d[0] * 1000).toISOString());
        categories.push(
          dayjs(d[0] * 1000).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
        );
      }
      data.push(d[1]);
    });

    return {
      name: metric.host_name,
      data
    };
  });

  return {
    series,
    options: {
      chart: {
        height: 200,
        type: "area",
        toolbar: { show: false }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories
      },
      tooltip: {
        x: {
          format: "yyyy-MM-dd HH:mm:ss"
        }
      }
    }
  };
};
const makeChartData = () => {
  charts.cpu = makeData(data.data);
};

const makeMemChartData = () => {
  charts.mem = makeData(memData.data);
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="service-monitor-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-9/12 max-w-4xl">
      <label
        for="service-monitor-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="ph:chart-line-bold"
          width="25px"
          height="25px"
        />
        <h3>{{ t("mesh.service monitor") }}</h3>
      </div>

      <progress v-if="loading" class="progress max-w-md mt-5" />
      <div class="grid grid-cols-1 text-xs mt-5 gap-5" v-else>
        <div>
          <p>CPU {{ t("container.usage") }}</p>
          <apexchart
            type="area"
            height="250"
            :options="charts.cpu.options"
            :series="charts.cpu.series"
          />
        </div>
      </div>

      <progress v-if="loadingMem" class="progress max-w-md mt-5" />
      <div class="grid grid-cols-1 text-xs mt-5 gap-5" v-else>
        <div>
          <p>Memory {{ t("container.usage") }} MB</p>
          <apexchart
            type="area"
            height="250"
            :options="charts.mem.options"
            :series="charts.mem.series"
          />
        </div>
      </div>
    </div>
  </div>
</template>
