<template>
  <div>
    <el-form
      :label-width="summaryFormConfig?.labelWitdth"
      size="large"
      class="pr-10"
    >
      <!-- <el-input v-model="formData[0]"></el-input> -->
      <template v-for="item of formData">
        <el-form-item>
          <el-input
            clearable
            v-model="formData[`${find(formData, item)}`]"
            autosize
            @clear="deleFormData"
          >
            <template #append>
              <el-button @click="deleFormData">删除</el-button>
            </template>
          </el-input>
        </el-form-item>
      </template>
      <el-input
        class="pl-8"
        v-model="addText"
        autosize
        type=""
        placeholder="Please input"
        ><template #append>
          <el-button @click="addFormData">添加</el-button>
        </template>
      </el-input>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, Ref, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  summaryFormConfig: Object,
});
const summaryFormConfig = props.summaryFormConfig;

const store = useStore();
//复制summary数组到formData
const formData: Ref<any> = ref([]);
const cloneInfo = function (obj1: any, obj2: any) {
  obj2.value = [...obj1];
};
//寻找索引
const find = function (arr: string[], item: string) {
  return arr.findIndex((n) => n === item);
};

cloneInfo(store.state.summary, formData);
console.log(formData, "summary");
console.log(formData.value[0], "summary");

//发送更新vuex数据请求
const updataSummary = function () {
  console.log("发送更新请求");
  console.log();

  store.commit("updataSummary", formData.value);
};

//添加summary数据
const addText = ref("");
const addFormData = () => {
  formData.value.push(addText.value);
  addText.value = "";
};

//添加summary数据
const deleFormData = () => {
  formData.value = formData.value.filter((item: string) => item !== "");
};
defineExpose({ updataSummary, formData });
</script>

<style scoped></style>
