<template>
  <h2>Summary</h2>
  <p class="text-slate-500 mt-2">Metrics aggregated from this device</p>

  <div class="grid grid-cols-2 gap-5 mt-10">
    <div
      v-for="i in 10"
      class="border border-slate-200 rounded-md p-5 shadow-sm hover:shadow-lg"
    >
      <p class="text-slate-800">Metric {{ i }}</p>
      <p class="text-slate-500 mt-2 text-xs">
        Metrics aggregated from this device
      </p>

      <div class="flex justify-center items-center text-slate-400 my-5">
        <IconifyIconOnline
          icon="ri:bar-chart-line"
          width="20px"
          height="20px"
        />
        <p class="ml-2">No data to show</p>
      </div>
    </div>
  </div>
</template>
