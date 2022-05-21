<template class="flex">
  <div class="border bg-white mx-4">
    <el-dropdown>
      <div class="el-dropdown-link pt-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" class="text-sky-800">
          <path
            fill="currentColor"
            d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"
          ></path>
        </svg>
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="changeInfo">修改信息 </el-dropdown-item>
          <el-dropdown-item @click="changeSummary"
            >修改背景资料
          </el-dropdown-item>
          <el-dropdown-item @click="changeEducation"
            >修改教育经历
          </el-dropdown-item>
          <el-dropdown-item @click="changeProject"
            >修改项目经历
          </el-dropdown-item>
          <el-dropdown-item @click="changeSkills"
            >修改技能清单
          </el-dropdown-item>
          <el-dropdown-item @click="changeAwards"
            >修改荣誉证书
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

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
    <Dialog
      ref="DialogRef"
      :dialogFormVisible="dialogFormVisible"
      :formConfig="awardsFormConfig"
      :count="count"
      v-if="count === 6"
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
import { awardsFormConfig } from "./config/awardsFormConfig";
import Dialog from "../Dialog/Dialog.vue";
// import IconMenu from "icons~/carbon/menu";
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

//修改荣誉证书
const changeAwards = async () => {
  count.value = 6;
  await nextTick();
  DialogRef.value.dialogFormVisible = true;
};
</script>

<style scoped></style>
