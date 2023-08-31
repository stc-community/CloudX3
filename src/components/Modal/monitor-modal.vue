<script setup lang="ts">
import EventBus from "@/utils/event-bus";
import { onBeforeUnmount } from "vue";
import { useLang } from "@/hooks/useLang";
import { usePod } from "@/hooks/usePod";

const { t } = useLang();
const { loading, charts, getPodMonitorChartData } = usePod();

onBeforeUnmount(() => {
  EventBus.off("showPodMonitor");
});

EventBus.on("showPodMonitor", pod => {
  console.log("on showPodMonitor");
  getPodMonitorChartData(pod);
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
