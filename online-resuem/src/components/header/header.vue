<template class="flex">
  <div class="border bg-white h-full mx-4">
    <el-button @click="changeInfo">修改信息 </el-button>
    <el-button @click="changeSummary">修改背景资料 </el-button>
    <Dialog
      ref="DialogRef"
      :dialogFormVisible="dialogFormVisible"
      :formConfig="basicsFormConfig"
      :count="count"
      v-if="count === 1"
    ></Dialog>
    <Dialog
      ref="DialogRef"
      :dialogFormVisible="dialogFormVisible"
      :formConfig="summaryFormConfig"
      :count="count"
      v-if="count === 2"
    ></Dialog>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import { basicsFormConfig } from "./config/basicsFormConfig";
import { summaryFormConfig } from "./config/summaryFormConfig";
import Dialog from "../Dialog/Dialog.vue";

const dialogFormVisible = ref(false);
const basicsData = ref();
let count = ref(0);
const DialogRef = ref();

const changeInfo = async () => {
  count.value = 1;
  await nextTick();
  DialogRef.value.dialogFormVisible = true;
};
const changeSummary = async () => {
  count.value = 2;
  await nextTick();
  DialogRef.value.dialogFormVisible = true;
};
//点击确认后提交commit
</script>

<style scoped></style>
