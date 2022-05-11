<template>
  <div class="border ml-4 bg-white">
    <div class="flex justify-center flex-col items-center pt-8 font-bold mx-4">
      <el-avatar
        class="mb-8"
        shape="circle"
        :size="100"
        fit="fill"
        :src="picture"
      />
      <span class="text-2xl mb-1">{{ name }}</span>
      <span class="text-lg">{{ position }}</span>
      <el-divider />
    </div>
    <div class="flex flex-col items-start mx-4">
      <div class="ml-8">
        <span class="flex mb-2">
          <icon-education class="text-lg mr-6" />
          {{ educ }}
        </span>
        <span class="flex mb-2"
          ><icon-logo-we-chat class="text-lg mr-6" />{{ weChat }}</span
        >
        <span class="flex mb-2"
          ><icon-email class="text-lg mr-6" />{{ email }}</span
        >
        <span class="flex mb-2"
          ><icon-mobile class="text-lg mr-6" />{{ phone }}</span
        >
      </div>
      <el-divider />
    </div>
    <div class="flex justify-center items-center mb-6">
      <el-link href="https://github.com/HowdyZ1220" target="_blank">
        <github class="text-4xl"></github
      ></el-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";

import Github from "../../svg/github.vue";
import IconLogoWeChat from "~icons/carbon/logo-wechat";
import IconEducation from "~icons/carbon/education";
import IconEmail from "~icons/carbon/email";
import IconMobile from "~icons/carbon/phone";

const store = useStore();
const { basics } = store.state;
//响应式的取出state中的数据
const name = computed(() => basics.name);
const position = computed(() => basics.position);
const picture = computed(() => basics.picture);
const email = computed(() => basics.email);
const educ = computed(() => basics.educ);
const weChat = computed(() => basics.weChat);
const phone = computed(() => basics.phone);
const github = computed(() => basics.github);
</script>

<style scoped></style>
