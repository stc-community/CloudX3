<script setup lang="ts">
import { useRoute } from "vue-router";
import { useLang } from "@/hooks/useLang";
import { usePod } from "@/hooks/usePod";

const route = useRoute();
const { t } = useLang();
const { loading, charts, getPodMonitorChartData } = usePod();
getPodMonitorChartData({
  metadata: {
    namespace: "deviceshifu",
    name: (route.params.name || "undefined") + "-0"
  }
});
</script>
<template>
  <h2>{{ t("iot.summary") }}</h2>
  <p class="text-slate-500 mt-2">{{ t("iot.summaryTips") }}</p>

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
</template>
