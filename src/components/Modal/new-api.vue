<script setup lang="ts">
import { reactive, ref } from "vue";
import { getDaoContract } from "@/utils/contract/dao";
import { useRoute } from "vue-router";
import { handleEtherError } from "@/utils/shared";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const route = useRoute();

type Method = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
type Form = {
  name: string;
  method: Method;
  url: string;
  description: string;
  price: number;
};

const form: Form = reactive({
  name: "",
  method: "POST",
  url: "/",
  description: "",
  price: 1
});

const loading = ref(false);
const handleSubmit = async () => {
  loading.value = true;

  const contract = await getDaoContract();

  console.log(
    route.params.id,
    form.name,
    form.method,
    form.url,
    form.price,
    form.description
  );

  try {
    const transaction = await contract.createMarketApi(
      route.params.id,
      form.name,
      form.method,
      form.url,
      form.price,
      form.description
    );
    await transaction.wait();
    window.location.reload();
  } catch (e) {
    loading.value = false;
    handleEtherError(e);
    // window.alert(e.message);
  }
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="new-api-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <label
        for="new-api-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="ic:round-file-upload"
          width="25px"
          height="25px"
        />
        <h3>{{ t("market.new api") }}</h3>
      </div>

      <div class="form-control w-full mt-5">
        <label class="label">
          <span class="label-text">{{ t("common.name") }}</span>
        </label>
        <input
          type="text"
          :placeholder="t('common.type here')"
          v-model="form.name"
          class="input input-primary w-full"
        />

        <label class="label">
          <span class="label-text">{{ t("market.method") }}</span>
        </label>
        <select class="select select-bordered w-full" v-model="form.method">
          <option v-for="v in ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']">
            {{ v }}
          </option>
        </select>

        <label class="label">
          <span class="label-text">URL</span>
        </label>
        <input
          type="text"
          :placeholder="t('common.type here')"
          v-model="form.url"
          class="input input-primary w-full"
        />

        <label class="label">
          <span class="label-text">{{ t("common.price") }}</span>
        </label>
        <div class="w-full flex items-center">
          <input
            type="number"
            :placeholder="t('common.type here')"
            v-model="form.price"
            class="input input-primary w-[200px]"
          />
          <span class="text-slate-500 ml-2"
            >Token / {{ t("market.time") }}</span
          >
        </div>

        <label class="label mt-2">
          <span class="label-text">{{ t("common.description") }}</span>
        </label>
        <input
          type="text"
          v-model="form.description"
          :placeholder="t('common.type here')"
          class="input input-primary w-full"
        />
      </div>

      <div class="mt-5" />
      <progress v-if="loading" class="progress progress-primary" />
      <button v-else class="btn btn-primary w-full" @click="handleSubmit">
        {{ t("common.submit") }}
      </button>
    </div>
  </div>
</template>
