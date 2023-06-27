<script setup lang="ts">
import { loadData } from "@/utils/shared";
import EventBus from "@/utils/event-bus";
import { reactive, onBeforeUnmount, ref } from "vue";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const loading = ref(false);
const data = reactive({});
onBeforeUnmount(() => {
  EventBus.off("showPodMonitor");
});

EventBus.on("showPodMonitor", pod => {
  console.log("on showPodMonitor");
  loading.value = true;
  loadData(
    data,
    "cloud.monitor.podmonitor",
    {
      name: pod.metadata.name,
      namespace: pod.metadata.namespace
    },
    loading,
    makeChartData
  );
});

const charts = reactive({
  cpu: { series: [], options: {} },
  memory: { series: [], options: {} },
  net_transmit: { series: [], options: {} },
  net_receive: { series: [], options: {} }
});
const makeChartData = () => {
  const { cpu, memory, net_transmit, net_receive } = data.data;

  const makeData = obj => {
    const _data = [];
    const _categories = [];
    obj.data.forEach(d => {
      _categories.push(new Date(d[0] * 1000).toISOString());
      _data.push(d[1]);
    });

    return {
      series: [{ name: cpu.metric_name, data: _data }],
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
          categories: _categories
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      }
    };
  };

  charts.cpu = makeData(cpu);
  charts.memory = makeData(memory);
  charts.net_transmit = makeData(net_transmit);
  charts.net_receive = makeData(net_receive);
};

defineOptions({
  name: "monitor-modal"
});
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="monitor-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <label
        for="monitor-modal"
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
        <h3>{{ t("container.pod monitor") }}</h3>
      </div>

      <progress v-if="loading" class="progress max-w-md mt-5" />
      <div class="grid grid-cols-2 text-xs mt-5 gap-5" v-else>
        <div>
          <p>Pod CPU {{ t("container.usage") }}</p>
          <apexchart
            type="area"
            height="250"
            :options="charts.cpu.options"
            :series="charts.cpu.series"
          />
        </div>
        <div>
          <p>Pod {{ t("container.memory") }} {{ t("container.usage") }}</p>
          <apexchart
            type="area"
            height="250"
            :options="charts.memory.options"
            :series="charts.memory.series"
          />
        </div>
        <div>
          <p>{{ t("container.Pod Net Bytes Transmitted") }}</p>
          <apexchart
            type="area"
            height="250"
            :options="charts.net_transmit.options"
            :series="charts.net_transmit.series"
          />
        </div>
        <div>
          <p>{{ t("container.Pod Net Bytes Received") }}</p>
          <apexchart
            type="area"
            height="250"
            :options="charts.net_receive.options"
            :series="charts.net_receive.series"
          />
        </div>
      </div>
    </div>
  </div>
</template>
