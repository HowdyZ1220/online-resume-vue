<template class="flex">
  <div class="border bg-white h-full mx-4">
    <el-button @click="changeInfo">修改信息 </el-button>
    <el-button @click="changeSummary">修改背景资料 </el-button>
    <el-button @click="changeEducation">修改教育经历 </el-button>
    <el-button @click="changeProject">修改项目经历 </el-button>
    <el-button @click="changeSkills">修改技能清单 </el-button>

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
    <Dialog
      ref="DialogRef"
      :dialogFormVisible="dialogFormVisible"
      :formConfig="educationFormConfig"
      :count="count"
      v-if="count === 3"
    ></Dialog>
    <Dialog
      ref="DialogRef"
      :dialogFormVisible="dialogFormVisible"
      :formConfig="projectFormConfig"
      :count="count"
      v-if="count === 4"
    ></Dialog>
    <Dialog
      ref="DialogRef"
      :dialogFormVisible="dialogFormVisible"
      :formConfig="skillsFormConfig"
      :count="count"
      v-if="count === 5"
    ></Dialog>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import { basicsFormConfig } from "./config/basicsFormConfig";
import { summaryFormConfig } from "./config/summaryFormConfig";
import { educationFormConfig } from "./config/educationFormConfig";
import { projectFormConfig } from "./config/projectFormConfig";
import { skillsFormConfig } from "./config/skillsFormConfig";
import Dialog from "../Dialog/Dialog.vue";

const dialogFormVisible = ref(false);

let count = ref(0);
const DialogRef = ref();

//修改基本信息
const changeInfo = async () => {
  count.value = 1;
  await nextTick();
  DialogRef.value.dialogFormVisible = true;
};

//修改背景资料
const changeSummary = async () => {
  count.value = 2;
  await nextTick();
  DialogRef.value.dialogFormVisible = true;
};

//修改教育经历
const changeEducation = async () => {
  count.value = 3;
  await nextTick();
  DialogRef.value.dialogFormVisible = true;
};

//修改项目经历
const changeProject = async () => {
  count.value = 4;
  await nextTick();
  DialogRef.value.dialogFormVisible = true;
};

//修改技能清单
const changeSkills = async () => {
  count.value = 5;
  await nextTick();
  DialogRef.value.dialogFormVisible = true;
};
</script>

<style scoped></style>
