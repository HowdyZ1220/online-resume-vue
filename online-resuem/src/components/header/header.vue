<template>
  <div class="border bg-white h-full mx-4">
    <el-button @click="changeInfo">修改信息 </el-button>

    <el-dialog
      v-model="dialogFormVisible"
      title="修改基本信息"
      draggable="true"
      width="38rem"
    >
      <Form ref="basicsData"></Form>
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
import Form from "../Form/Form.vue";
import { ref } from "vue";

const dialogFormVisible = ref(false);
const basicsData = ref();

const changeInfo = () => {
  dialogFormVisible.value = true;
};
//点击确认后提交commit
const confirmUpdata = () => {
  dialogFormVisible.value = false;
  basicsData.value.updataBasics();
};
</script>

<style scoped></style>
