<template>
  <div class="border bg-white h-full mx-4">
    <el-button @click="changeInfo">修改信息</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { store } from "../../store";

const changeInfo = () => {
  console.log("按钮点击");
  store.commit("increment");
};
</script>

<style scoped></style>
