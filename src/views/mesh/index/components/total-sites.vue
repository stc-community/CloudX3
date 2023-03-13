<script setup lang="ts">
import { getConfig } from "@/config";

const relays = getConfig().Relay;
</script>

<template>
  <div class="stats shadow" v-if="0">
    <div class="stat">
      <div class="stat-figure text-secondary">
        <IconifyIconOnline
          icon="carbon:assembly-cluster"
          width="40px"
          height="40px"
        />
      </div>
      <div class="stat-title">Sites</div>
      <div class="stat-value">2</div>
      <div class="stat-desc" />
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <IconifyIconOnline
          icon="healthicons:provider-fst"
          width="40px"
          height="40px"
        />
      </div>
      <div class="stat-title">Services</div>
      <div class="stat-value">4,200</div>
      <div class="stat-desc">↗︎ 400 (22%)</div>
    </div>
  </div>

  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Location</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for="(r, k) in relays">
        <th>{{ k + 1 }}</th>
        <td>{{ r?.name }}</td>
        <td class="flex items-center gap-2 text-sm">
          <span>{{ r?.city }}</span>
          <IconifyIconOnline :icon="r.flag" width="25px" height="25px" />
        </td>
        <td>{{ r?.url }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
