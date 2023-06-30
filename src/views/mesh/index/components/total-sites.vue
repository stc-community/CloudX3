<script setup lang="ts">
import { getConfig } from "@/config";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const relays = getConfig().Relay;
</script>

<template>
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th />
        <th>{{ t("common.name") }}</th>
        <th>{{ t("mesh.location") }}</th>
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
