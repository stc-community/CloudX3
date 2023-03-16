<script setup lang="ts">
import { getCodConrtact } from "@/utils/contract/cod";
import { getRequestID } from "@/utils/contract/web3";
import { reactive, onBeforeUnmount } from "vue";
import bus from "@/utils/event-bus";

defineOptions({
  name: "mesh-modal"
});

const data = reactive({
  service: {},
  active: false, // 证书启用状态
  mode: "", // 流量监听模式
  res: "",
  loading: false,
  // hash: "0x634647f1eef0655c27adac3531b3f1de45f209e4cea971870fa012d8ba90b986",
  hash: "",
  requestID: "",
  requestData: "",
  resReady: false
});

bus.on("currentService", service => {
  data.service = service;

  data.active = service?.ca_active || false;
  data.mode = service?.info[0].metadata.mode || "";
});

let contract;
onBeforeUnmount(() => {
  contract?.off("*");
  bus.off("currentService");
});

const listenIfNeeded = () => {
  if (!contract) return;

  contract.on("*", event => {
    const id = event.log.args[0];

    if (id === data.requestID) {
      data.resReady = true;
      handleCheck();
    }
  });
};

const handleSubmit = async () => {
  data.loading = true;

  data.requestID = getRequestID();
  contract = await getCodConrtact();

  listenIfNeeded();

  try {
    const transaction = await contract.CallCOD(
      data.requestID,
      "s105",
      "https://wasmcloud-httpserver.gw105.oneitfarm.com/api/counter/zhangchao",
      "GET",
      window.btoa(data.requestData)
    );

    await transaction.wait();
    data.hash = transaction.hash;
    data.loading = false;
  } catch (e) {
    data.loading = false;
  }
};

const handleCheck = async () => {
  const res = await contract.GetResultData(data.requestID);
  data.res = res;
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="mesh-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-[700px] max-w-5xl">
      <label
        for="mesh-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <div class="flex items-center text-primary">
        <IconifyIconOnline
          class="mr-2"
          icon="mdi:security-lock"
          width="25px"
          height="25px"
        />
        <h3 v-if="data.service?.info">
          Service Security Management -
          {{ data.service?.info[0].metadata.service_name }}
        </h3>
      </div>

      <div class="stats shadow mt-5">
        <div class="stat">
          <div class="stat-figure text-primary">
            <IconifyIconOnline
              icon="mdi:certificate"
              width="30px"
              height="30px"
            />
          </div>
          <div class="stat-title">Cert Status</div>
          <div class="stat-value text-primary">
            <input
              v-model="data.active"
              type="checkbox"
              class="toggle toggle-lg toggle-primary mt-2"
            />
          </div>
          <div class="stat-desc">The workload cert status?</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div class="stat-title">Listen Mode</div>
          <div class="stat-value text-secondary" v-if="data.service?.info">
            <select
              v-model="data.mode"
              class="select select-ghost select-lg w-full text-3xl font-bold"
            >
              <option value="http">HTTP</option>
              <option value="https">HTTPS</option>
              <option value="mtls">mTLS</option>
            </select>
          </div>
          <div class="stat-desc">Sidecar listen mode</div>
        </div>
      </div>

      <div class="mt-5">
        <p class="text-slate-500">Certs</p>
        <progress class="progress row-span-1" />

        <div class="overflow-x-auto mt-1">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th />
                <th>Cert SN</th>
                <th>Type</th>
                <th>Status</th>
                <th>Issued At</th>
                <th>Expired At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
