<script setup lang="ts">
import { useLang } from "@/hooks/useLang";
import { useDeploymentCPU } from "@/hooks/useDeploymentCPU";
import { useDeploymentMem } from "@/hooks/useDeploymentMem";
import { useDeploymentNetReceived } from "@/hooks/useDeploymentNetReceived";
import { useDeploymentNetSent } from "@/hooks/useDeploymentNetSent";

const { t } = useLang();
const { loadingCPU, cpuCharts, getDeploymentCPUChartData } = useDeploymentCPU();
const { loadingMem, memCharts, getDeploymentMemChartData } = useDeploymentMem();
const {
  loadingNetReceived,
  getDeploymentNetReceivedChartData,
  netReceivedCharts
} = useDeploymentNetReceived();
const { loadingNetSent, getDeploymentNetSentChartData, netSentCharts } =
  useDeploymentNetSent();

getDeploymentCPUChartData();
getDeploymentMemChartData();
getDeploymentNetReceivedChartData();
getDeploymentNetSentChartData();
</script>
<template>
  <h2>{{ t("iot.summary") }}</h2>
  <p class="text-slate-500 mt-2">{{ t("iot.summaryTips") }}</p>

  <div class="grid grid-cols-1 text-xs gap-5 mt-10">
    <div>
      <p>Pod CPU Usage {{ t("container.usage") }}</p>
      <progress v-if="loadingCPU" class="progress max-w-md mt-5" />
      <apexchart
        v-else
        type="area"
        height="250"
        :options="cpuCharts.options"
        :series="cpuCharts.series"
      />
    </div>
    <div>
      <p>Pod {{ t("container.memory") }} {{ t("container.usage") }}</p>
      <progress v-if="loadingMem" class="progress max-w-md mt-5" />
      <apexchart
        v-else
        type="area"
        height="250"
        :options="memCharts.options"
        :series="memCharts.series"
      />
    </div>
    <div>
      <p>{{ t("container.Pod Net Bytes Received") }}</p>
      <progress v-if="loadingNetReceived" class="progress max-w-md mt-5" />
      <apexchart
        v-else
        type="area"
        height="250"
        :options="netReceivedCharts.options"
        :series="netReceivedCharts.series"
      />
    </div>
    <div>
      <p>{{ t("container.Pod Net Bytes Transmitted") }}</p>
      <progress v-if="loadingNetSent" class="progress max-w-md mt-5" />
      <apexchart
        v-else
        type="area"
        height="250"
        :options="netSentCharts.options"
        :series="netSentCharts.series"
      />
    </div>
  </div>
</template>
