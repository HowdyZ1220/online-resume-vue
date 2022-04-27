<template>
  <div class="baseInfo">
    <span class="flex text-center mx-2">
      <avatar class="h-12 text-green-800"></avatar>
      <i class="py-2 px-1 font-semibold text-3xl font-mono not-italic"
        >个人信息</i
      >
      <div class="border h-0 w-56 border-green-800 my-5 mr-2 ml-12"></div>
    </span>
    <template v-for="item in info">
      <div>{{ item }}</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from "@element-plus/icons-vue";

const info = {
  phone: "15829220208",
  weChat: "982796687@qq.com",
  email: "HowdyZ",
  github: "https://github.com/HowdyZ1220",
  educ: "福州大学",
};
</script>

<style scoped></style>
