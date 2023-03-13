<script setup lang="ts">
const data = [
  { name: "local", network_id: "ZUhJ25pMRn", ip_range: "100.100.0.0/24" },
  { name: "local", network_id: "ZUhJ25pMRn", ip_range: "100.100.0.0/24" },
  { name: "local", network_id: "ZUhJ25pMRn", ip_range: "100.100.0.0/24" },
  { name: "local", network_id: "ZUhJ25pMRn", ip_range: "100.100.0.0/24" },
  { name: "local", network_id: "ZUhJ25pMRn", ip_range: "100.100.0.0/24" },
  { name: "local", network_id: "ZUhJ25pMRn", ip_range: "100.100.0.0/24" }
];
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="overflow-x-auto mt-5">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Network ID</th>
          <th>IP Range</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="(v, k) in data" :key="k">
          <th>{{ k + 1 }}</th>
          <td>{{ v.name }}</td>
          <td>{{ v.network_id }}</td>
          <td>{{ v.ip_range }}</td>
          <td class="space-x-2 w-40">
            <button class="btn btn-primary btn-sm">Action2</button>
            <button class="btn btn-ghost btn-sm">Action</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
