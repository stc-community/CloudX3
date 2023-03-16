<script setup lang="ts">
import { getMeshConrtact } from "@/utils/contract/mesh";
import { getRequestID } from "@/utils/contract/web3";
import { reactive, onBeforeUnmount, ref, nextTick } from "vue";
import bus from "@/utils/event-bus";
import { loadData } from "@/utils/shared";
import { getConfig } from "@/config";
import { useNostrStore } from "@/store/modules/nostr";

defineOptions({
  name: "mesh-modal"
});

const data = reactive({
  service: null,
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

  loadCerts(service.unique_id);
});

let contract;
onBeforeUnmount(() => {
  contract?.off("*");
  bus.off("currentService");
});

const listenIfNeeded = () => {
  if (!contract) return;

  contract.on("*", event => {
    console.log("on chain event", event);
    // const id = event.log.args[0];
    // if (id === data.requestID) {
    //   data.resReady = true;
    //   data.res = event.log?.args[1];

    //   window.location.reload();
    // }
  });

  contract.on("RequestFulfilled", _event => {
    console.log("on RequestFulfilled");
    bus.emit("refreshServices", true);
  });
};

const getCurrentSiteName = () => {
  const relays = getConfig().Relay;
  const url = useNostrStore().getUrl;
  const relay = relays.find(i => i.url.includes(url));

  if (!relay?.name) {
    window.alert("No site selected!");
    throw new Error("No site selected!");
  }

  return relay?.name || "";
};

// 点击切换证书状态
const disableSwitch = ref(false);
const handleChangeStatus = async () => {
  disableSwitch.value = true;

  data.loading = true;

  data.requestID = getRequestID(32);
  contract = await getMeshConrtact();
  listenIfNeeded();

  nextTick(async () => {
    const fn = data.active ? contract.recoverTls : contract.forbidTls;

    console.log("active status", data.active);
    console.log("fn", fn);

    try {
      const transaction = await fn(
        getCurrentSiteName(),
        window.btoa(
          JSON.stringify({
            unique_id: data.service.unique_id
          })
        ),
        data.requestID
      );

      await transaction.wait();
      data.hash = transaction.hash;
      data.loading = false;
    } catch (e) {
      data.loading = false;
    }
  });
};

// certs handle
const certs = reactive([]);
const loadingCerts = ref(false);
const loadCerts = async (unique_id: string) => {
  loadData(
    certs,
    "ca.workload.certs",
    {
      unique_id,
      limit_num: 1
    },
    loadingCerts
  );
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="mesh-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-[600px] max-w-5xl">
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

      <div class="stats shadow border mt-5">
        <div class="stat">
          <div class="stat-figure text-primary">
            <IconifyIconOnline
              icon="mdi:certificate"
              width="30px"
              height="30px"
            />
          </div>
          <div class="stat-title">Trust Status</div>
          <div class="stat-value text-primary">
            <input
              v-model="data.active"
              :disabled="disableSwitch"
              @change="handleChangeStatus"
              type="checkbox"
              class="toggle toggle-lg toggle-primary mt-2"
            />
          </div>
          <progress v-if="data.loading" class="progress" />
          <div class="stat-desc">The workload cert status</div>
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
          <div class="stat-title">Network Mode</div>
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
          <div class="stat-desc">Sidecar network mode</div>
        </div>
      </div>

      <div
        v-if="data.hash"
        class="text-left mt-2 border border-primary rounded-md p-2 text-slate-500 text-sm"
      >
        <p class="uppercase">Transaction</p>
        <a
          class="link link-primary text-xs break-all leading-3"
          target="_blank"
          :href="`https://sepolia.etherscan.io/tx/${data.hash}`"
          >{{ data.hash }}</a
        >

        <p class="uppercase mt-5">Request ID</p>
        <p class="text-xs text-primary break-all">{{ data.requestID }}</p>

        <p class="uppercase mt-5">Result</p>
        <pre v-if="data.resReady" class="text-xs text-primary break-all">{{
          data.res
        }}</pre>
        <progress v-else class="progress progress-primary" />
      </div>

      <div class="mt-5">
        <p class="text-slate-500">Certs</p>
        <progress v-if="loadingCerts" class="progress" />

        {{ certs }}

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
