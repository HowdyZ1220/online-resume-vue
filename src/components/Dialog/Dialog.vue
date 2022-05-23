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
      <skills-form
        ref="skillsDataRef"
        v-if="props.count === 5"
        :skillsFormConfig="props.formConfig"
      ></skills-form>
      <awards-form
        ref="awardsDataRef"
        v-if="props.count === 6"
        :awardsFormConfig="props.formConfig"
      ></awards-form>
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
import SkillsForm from "../Form/SkillsForm.vue";
import AwardsForm from "../Form/AwardsForm.vue";
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
const skillsDataRef = ref();
const awardsDataRef = ref();

const confirmUpdata = () => {
  dialogFormVisible.value = false;
  switch (count) {
    case 1:
      basicsDataRef.value.updataBasics();
      break;
    case 2:
      summaryDataRef.value.updataSummary();
      break;
    case 3:
      educationDataRef.value.updataEducation();
      break;
    case 4:
      projectDataRef.value.updataProject();
      break;
    case 5:
      skillsDataRef.value.updataSkills();
      break;
    case 6:
      awardsDataRef.value.updataAwards();
      break;
  }
};
defineExpose({
  dialogFormVisible,
});
</script>

<style scoped></style>
