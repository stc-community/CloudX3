<script setup lang="ts">
import { reactive, ref } from "vue";
import { getDaoContract } from "@/utils/contract/dao";
import type { DAO } from "@/utils/contract/dao";
import { NFTStorage } from "nft.storage";
import { handleEtherError } from "@/utils/shared";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const NFT_STORAGE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBEOGQ3MEI2MGZmYjBDODcwRGFBZDA4MTU1QWIxNmRDYjBFNDA3NjgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3OTMwNDA0OTU3MiwibmFtZSI6InN0YyJ9.jQu1V6HT58PB1pipWj7FVEkk0y7g_Ey2iY87i80KMHU";
const nftStorage = new NFTStorage({ token: NFT_STORAGE_KEY });

type KV = {
  k: string;
  v: string;
};

const form: DAO = reactive({
  image: "",
  name: "",
  description: "",
  jsoninfo: ""
});

const configuration: Array<KV> = reactive([
  {
    k: "",
    v: ""
  }
]);
const handleClickAdd = () => {
  configuration.push({
    k: "",
    v: ""
  });
};
const handleClickRemove = i => {
  configuration.splice(i, 1);
};

const loading = ref(false);
const handleSubmit = async () => {
  // prepare dao function params
  const map = {};
  configuration.forEach(c => {
    map[c.k] = c.v;
  });
  form.jsoninfo = window.btoa(JSON.stringify(map));
  loading.value = true;

  const contract = await getDaoContract();

  try {
    const transaction = await contract.createDao(
      form.name,
      form.description,
      form.jsoninfo,
      form.image
    );
    await transaction.wait();
    window.location.reload();
  } catch (e) {
    loading.value = false;
    handleEtherError(e);
    // window.alert(e.message);
  }
};

const imageData = ref("");
const uploadingNTF = ref(false);
const handleFileChange = async (e: Event) => {
  // @ts-ignore
  const file: File = e.target.files[0];

  const reader = new FileReader();
  reader.onload = function () {
    imageData.value = reader.result as string;
  };
  reader.readAsDataURL(file);

  uploadingNTF.value = true;
  const time = new Date().getTime();
  const metadata = await nftStorage.store({
    image: file,
    name: form.name || `name${time}`,
    description: form.description || `description${time}`
  });
  uploadingNTF.value = false;

  form.image = metadata.url;
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="newdao-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <label
        for="newdao-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="eos-icons:organisms"
          width="25px"
          height="25px"
        />
        <h3>{{ t("market.New Market") }}</h3>
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

        <label class="label mt-2">
          <span class="label-text">{{ t("common.description") }}</span>
        </label>
        <input
          type="text"
          v-model="form.description"
          :placeholder="t('common.type here')"
          class="input input-primary w-full"
        />

        <label class="label">
          <span class="label-text">{{ t("market.image") }}</span>
        </label>
        <div class="flex">
          <div class="avatar" v-if="imageData">
            <div class="w-24 rounded-md mr-2">
              <img :src="imageData" />
            </div>
          </div>
          <div>
            <input
              type="file"
              class="file-input file-input-bordered file-input-primary w-full flex-shrink"
              @change="handleFileChange"
            />
            <progress v-if="uploadingNTF" class="progress progress-info" />
            <p class="text-xs text-slate-500 break-all mt-2">
              {{ form.image }}
            </p>
          </div>
        </div>

        <label class="label mt-2">
          <span class="label-text">{{
            t("market.User Join Fields Configuration")
          }}</span>
        </label>
        <div
          class="grid grid-cols-5 gap-3 mb-2"
          v-for="(i, k) in configuration"
        >
          <input
            type="text"
            placeholder="Name"
            v-model="i.k"
            class="input input-primary col-span-2"
          />
          <input
            type="text"
            placeholder="Description"
            v-model="i.v"
            class="input input-primary col-span-2"
          />
          <button
            class="btn btn-primary col-span-1"
            @click="handleClickAdd"
            v-if="k === configuration.length - 1"
          >
            {{ t("market.add") }}
          </button>
          <button
            class="btn btn-error col-span-1 text-white"
            @click="handleClickRemove(k)"
            v-else
          >
            {{ t("market.remove") }}
          </button>
        </div>
      </div>

      <div class="mt-5" />
      <progress v-if="loading" class="progress progress-primary" />
      <button v-else class="btn btn-primary w-full" @click="handleSubmit">
        {{ t("common.submit") }}
      </button>
    </div>
  </div>
</template>
