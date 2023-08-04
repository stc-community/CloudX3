<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { showEventModal } from "@/utils/shared";
import { loadData } from "@/utils/shared";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const data = reactive({
  services: [],
  disabled: true,
  page: 1,
  limit_num: 3,
  form: {
    name: "" // 服务名称
  }
});
const loading = ref(false);

const loadMore = async () => {
  loadService();
};

const onSearch = () => {
  data.services.length = 0;
  data.page = 1;
  loadService();
};

const loadService = async () => {
  loading.value = true;
  loadData(
    data.services,
    "iot.mqtt.service",
    {
      service_name: data.form.name,
      page: data.page,
      limit_num: data.limit_num
    },
    loading
  );
  data.page++;
};

onMounted(async () => {
  loadService();
});
</script>
<template>
  <div>
    <div class="form-control w-1/3 mt-5">
      <div class="input-group w-full">
        <input
          type="text"
          v-model="data.form.name"
          :placeholder="t('mesh.searchName') + '...'"
          class="input input-bordered w-full"
        />
        <button class="btn btn-square" @click="onSearch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="grid grid-flow-row grid-cols-3 gap-4 mt-5">
      <div class="card col-span-1 shadow border" v-for="s in data.services">
        <div class="card-body">
          <h2 class="card-title">
            {{ s.metadata.name }}
            <label
              class="btn btn-success w-40 text-white rounded-full"
              for="event-modal"
              @click="showEventModal(s.event)"
            >
              <IconifyIconOnline
                class="mr-2"
                icon="wpf:security-checked"
                width="25px"
                height="25px"
              />
              {{ t("common.verified") }}
            </label>
          </h2>
          <p class="text-sm text-slate-400">
            NAMESPACE: {{ s.metadata.namespace }}
          </p>
        </div>
      </div>

      <div class="card shadow-md row-span-1 border">
        <div class="card-body">
          <progress v-if="loading" class="progress row-span-1" />

          <button
            class="btn w-full mt-10"
            :disabled="loading"
            @click="loadMore"
          >
            <IconifyIconOnline
              class="mr-2"
              icon="material-symbols:add-circle"
              width="30px"
              height="30px"
            />{{ t("common.loadmore") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
