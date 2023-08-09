<script setup lang="ts">
import { getContainerContract } from "@/utils/contract/container";
import { getCurrentChain } from "@/config/chain";
import { reactive, onBeforeUnmount } from "vue";
import type { EventLog } from "ethers";
import eventBus from "@/utils/event-bus";
import { getCurrentSiteName, md5 } from "@/utils/shared";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();
import { useAccountStore } from "@/store/modules/account";
const accountStore = useAccountStore();

defineOptions({
  name: "deployment-modal"
});

const data = reactive({
  res: "",
  loading: false,
  // hash: "0x634647f1eef0655c27adac3531b3f1de45f209e4cea971870fa012d8ba90b986",
  hash: "",
  requestData: "",
  resReady: false
});

let contract;
onBeforeUnmount(() => {
  contract?.off("*");
});

const listenIfNeeded = () => {
  if (!contract) return;

  contract.on("*", (event: EventLog) => {
    const name = event.fragment.name;

    // console.log("event listened", name);
    // console.log("event", event);

    if (name !== "RequestContainerDeployFulfilled") return;

    data.resReady = true;
    eventBus.emit("deploymentSuccess", true);
    const [_id, status] = event.args;
    data.res = status;
  });
};

const handleSubmit = async () => {
  data.loading = true;

  contract = await getContainerContract();
  listenIfNeeded();

  try {
    const transaction = await contract.requestContainerDeploy(
      getCurrentChain().oracle,
      getCurrentChain().deploymentJobId,
      window.btoa(data.requestData),
      `https://stc-test.${getCurrentSiteName(
        "gw"
      )}.oneitfarm.com/brige/providers/deployment`,
      md5(accountStore.publicKey)
    );

    await transaction.wait();
    data.hash = transaction.hash;
    data.loading = false;
  } catch (e) {
    data.loading = false;
  }
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="deployment-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-[600px]">
      <label
        for="deployment-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="fluent-mdl2:redeploy"
          width="25px"
          height="25px"
        />
        <h3>{{ t("container.new deployment") }}</h3>
      </div>
      <div class="form-control mt-8">
        <textarea
          class="textarea textarea-primary h-[100px]"
          :placeholder="t('container.paste yaml')"
          v-model="data.requestData"
        />
        <div class="mt-2">
          <progress
            v-if="data.loading"
            class="progress progress-primary row-span-1"
          />
          <button
            v-else
            class="btn btn-primary w-full mt-5"
            @click="handleSubmit"
          >
            {{ t("common.submit") }}
          </button>
        </div>
      </div>
      <div
        v-if="data.hash"
        class="text-left mt-2 border border-primary rounded-md p-2 text-slate-500 text-sm"
      >
        <p class="uppercase">{{ t("common.transaction") }}</p>
        <span class="text-xs text-primary break-all">{{ data.hash }}</span>

        <p class="uppercase mt-5">{{ t("common.wait deploy status") }}</p>
        <pre v-if="data.resReady" class="text-xs text-primary break-all">{{
          data.res
        }}</pre>
        <progress v-else class="progress progress-primary" />
      </div>
    </div>
  </div>
</template>
