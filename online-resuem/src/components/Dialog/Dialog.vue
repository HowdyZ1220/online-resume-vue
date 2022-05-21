<template>
  <div>
    <el-dialog
      v-model="dialogFormVisible"
      :title="formConfig?.title"
      :draggable="formConfig?.draggable"
      width="38rem"
    >
      <basics-form
        ref="basicsDataRef"
        v-if="props.count === 1"
        :basicsFormConfig="props.formConfig"
      ></basics-form>
      <summary-form
        ref="summaryDataRef"
        v-if="props.count === 2"
        :summaryFormConfig="props.formConfig"
      ></summary-form>
      <education-form
        ref="educationDataRef"
        v-if="props.count === 3"
        :educationFormConfig="props.formConfig"
      ></education-form>
      <project-form
        ref="projectDataRef"
        v-if="props.count === 4"
        :projectFormConfig="props.formConfig"
      ></project-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmUpdata">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BasicsForm from "../Form/BasicsForm.vue";
import SummaryForm from "../Form/SummaryForm.vue";
import EducationForm from "../Form/EducationForm.vue";
import ProjectForm from "../Form/ProjectForm.vue";

const props = defineProps({
  dialogFormVisible: Boolean,
  formConfig: Object,
  count: Number,
});
const count = props.count;
const dialogFormVisible = ref(false);
const formConfig = props.formConfig;
const basicsDataRef = ref();
const summaryDataRef = ref();
const educationDataRef = ref();
const projectDataRef = ref();

const confirmUpdata = () => {
  dialogFormVisible.value = false;
  if (count === 1) {
    basicsDataRef.value.updataBasics();
  }
  if (count === 2) {
    summaryDataRef.value.updataSummary();
  }
  if (count === 3) {
    console.log("背景资料已保存");
    educationDataRef.value.updataEducation();
  }
  if (count === 4) {
    console.log("背景资料已保存");
    projectDataRef.value.updataProject();
  }
};
defineExpose({
  dialogFormVisible,
});
</script>

<style scoped></style>
