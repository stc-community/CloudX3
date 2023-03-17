<script setup lang="ts">
import { getMeshConrtact } from "@/utils/contract/mesh";
import { getRequestID } from "@/utils/contract/web3";
import { reactive, onBeforeUnmount, ref, nextTick, watch } from "vue";
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
  resReady: false,

  modeProcessing: false,
  modeHash: "",
  modeRequestID: "",
  modeResReady: false,
  modeRes: ""
});

// 用户打开弹窗时，需要加载证书的最新信息
bus.on("currentService", service => {
  data.service = service;

  // 获取到当前 sidecar 的监听状态
  data.mode = service?.info[0].metadata.mode || "";

  // 加载当前服务的证书信息
  loadCerts(service.unique_id);
});

// certs handle
const certs = reactive([]);
const loadingCerts = ref(false);
const loadCerts = async (unique_id: string) => {
  certs.length = 0;
  loadData(
    certs,
    "ca.workload.certs",
    {
      unique_id,
      role: "sidecar",
      limit_num: 1
    },
    loadingCerts
  );
};
watch(certs, v => {
  console.log("certs changed", v);
  data.active = !(v.length && v[0].forbidden);
});

// ====== 合约操作部分 ==========
let contract;
onBeforeUnmount(() => {
  contract?.off("*");
  bus.off("currentService");
});

const listenIfNeeded = () => {
  if (!contract) return;

  contract.on("*", event => {
    console.log("on chain event", event);
    const id = event.log.args[0];
    if (id === data.requestID) {
      data.resReady = true;
      data.res = event.log?.args[1];

      loadCerts(data.service.unique_id);
      disableSwitch.value = false;
    } else if (id === data.modeRequestID) {
      data.modeResReady = true;
      data.modeRes = event.log?.args[1];

      bus.emit("refreshServices", true);
      disableModeSelect.value = false;
    }
  });

  // contract.on("RequestFulfilled", _event => {
  //   console.log("on RequestFulfilled");
  //   bus.emit("refreshServices", true);
  // });
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

  data.requestID = getRequestID();
  contract = await getMeshConrtact();
  listenIfNeeded();

  nextTick(async () => {
    const fn = data.active ? contract.recoverTls : contract.forbidTls;

    // console.log("active status", data.active);
    // console.log("fn", fn);

    try {
      const transaction = await fn(
        getCurrentSiteName(),
        window.btoa(
          JSON.stringify({
            unique_id: data.service.unique_id,
            with_cert: 1
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

const disableModeSelect = ref(false);
const handleChangeMode = async () => {
  disableModeSelect.value = true;

  data.modeProcessing = true;

  data.modeRequestID = getRequestID();
  contract = await getMeshConrtact();
  listenIfNeeded();

  nextTick(async () => {
    const targetMode = data.mode;
    console.log("switch to listen mode", targetMode);

    try {
      const transaction = await contract.switchListen(
        getCurrentSiteName(),
        window.btoa(
          JSON.stringify({
            unique_id: data.service.unique_id,
            listen_mode: targetMode
          })
        ),
        data.modeRequestID
      );

      await transaction.wait();
      data.modeHash = transaction.hash;
      data.modeProcessing = false;
    } catch (e) {
      data.modeProcessing = false;
    }
  });
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="mesh-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-[900px] max-w-5xl">
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
          <div class="stat-title">Security Control</div>
          <div class="stat-value text-primary">
            <progress v-if="loadingCerts" class="progress" />
            <input
              v-else
              v-model="data.active"
              :disabled="disableSwitch"
              @change="handleChangeStatus"
              type="checkbox"
              class="toggle toggle-lg toggle-primary mt-2"
            />
          </div>
          <progress v-if="data.loading" class="progress" />
          <div class="stat-desc">Actived: {{ data.active }}</div>
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
              @change="handleChangeMode"
              :disabled="disableModeSelect"
              class="select select-ghost select-lg w-full text-3xl font-bold"
            >
              <option value="http">HTTP</option>
              <option value="https">HTTPS</option>
              <option value="mtls">mTLS</option>
            </select>
          </div>
          <progress v-if="data.modeProcessing" class="progress" />
          <div class="stat-desc">Sidecar network mode</div>
        </div>
      </div>

      <div
        v-if="data.hash"
        class="text-left mt-2 border border-primary rounded-md p-2 text-slate-500 text-sm"
      >
        <p class="uppercase">Trust Status Transaction</p>
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

      <div
        v-if="data.modeHash"
        class="text-left mt-2 border border-secondary rounded-md p-2 text-slate-500 text-sm"
      >
        <p class="uppercase">Listen Mode Transaction</p>
        <a
          class="link link-secondary text-xs break-all leading-3"
          target="_blank"
          :href="`https://sepolia.etherscan.io/tx/${data.modeHash}`"
          >{{ data.modeHash }}</a
        >

        <p class="uppercase mt-5">Request ID</p>
        <p class="text-xs text-secondary break-all">{{ data.modeRequestID }}</p>

        <p class="uppercase mt-5">Result</p>
        <pre
          v-if="data.modeResReady"
          class="text-xs text-secondary break-all"
          >{{ data.modeRes }}</pre
        >
        <progress v-else class="progress progress-secondary" />
      </div>

      <div class="mt-5">
        <p class="text-slate-500">Certs</p>
        <progress v-if="loadingCerts" class="progress" />

        <div class="overflow-x-auto mt-1 max-h-[200px]">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th />
                <th>aki</th>
                <th>sn</th>
                <th>status</th>
                <th>Expiry</th>
                <th>Revoked At</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(c, i) in (certs.length && certs[0].certs) || []">
                <th class="text-xs">{{ i + 1 }}</th>
                <td class="text-xs">{{ c.aki }}</td>
                <td class="text-xs">{{ c.sn }}</td>
                <td class="text-xs">{{ c.status }}</td>
                <td class="text-xs">{{ c.expiry }}</td>
                <td class="text-xs">{{ c.revoked_at }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
