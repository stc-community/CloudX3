<script setup lang="ts">
import { reactive } from "vue";
import list from "./mock.js";

interface CertInfo {
  unique_id: string; // 服务识别号
  sn: string; // 证书序列号
  role: string; // 证书类别
  status: string; // 证书状态
  issued_at: string; // 申请时间
  expiry: string; // 过期时间
  cert_str: string; // 证书详情
}

type Data = {
  certs: Array<CertInfo>;
};

const data: Data = reactive({ certs: [] });
data.certs = list;
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="grid grid-cols-4 gap-4 mt-5">
    <div class="card shadow-md relative border" v-for="c in data.certs">
      <span
        class="badge text-white absolute right-[-5px] top-[-5px] uppercase"
        :class="c.status === 'good' ? 'badge-success' : 'badge-error'"
        >{{ c.status }}</span
      >
      <div class="card-body">
        <h2 class="card-title text-primary flex">
          <IconifyIconOnline
            class="flex-shrink-0"
            icon="mdi:certificate"
            width="30px"
            height="30px"
          />
          <span class="break-all text-xs leading-3">{{ c.sn }}</span>
        </h2>

        <div class="tooltip tooltip-left text-left" data-tip="Unique ID">
          <span class="text-xs text-slate-600">{{ c.unique_id }}</span>
        </div>

        <p class="text-sm font-semibold mt-5">Information</p>
        <div class="leading-6">
          <p><span class="text-slate-500">Type: </span> {{ c.role }}</p>
          <p>
            <span class="text-slate-500">Issued At: </span> {{ c.issued_at }}
          </p>
          <p><span class="text-slate-500">Expired At: </span> {{ c.expiry }}</p>
          <p><span class="text-slate-500">Status: </span> {{ c.status }}</p>
        </div>

        <p class="text-sm font-semibold mt-5">Status</p>
        <input
          type="checkbox"
          class="toggle toggle-primary toggle-md"
          :checked="c.status === 'good'"
        />
      </div>
    </div>
  </div>
</template>
