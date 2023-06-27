<script setup lang="ts">
import { useLang } from "@/hooks/useLang";

const { locale, switchLang } = useLang();
</script>

<template>
  <span
    @click="switchLang"
    class="hover:cursor-pointer hover:text-purple-600"
    >{{ locale === "zh" ? "English" : "中文" }}</span
  >
</template>
