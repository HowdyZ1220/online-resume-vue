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
import { countBy } from "lodash";
import { defineProps, ref, defineExpose } from "vue";
import BasicsForm from "../Form/BasicsForm.vue";
import SummaryForm from "../Form/SummaryForm.vue";

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

const confirmUpdata = () => {
  dialogFormVisible.value = false;
  if (count === 1) {
    basicsDataRef.value.updataBasics();
  }
  if (count === 2) {
    summaryDataRef.value.updataSummary();
  }
};
defineExpose({
  dialogFormVisible,
});
</script>

<style scoped></style>
