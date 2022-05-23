<template>
  <div>
    <el-form
      :label-width="projectFormConfig?.labelWitdth"
      size="large"
      class="pr-10"
    >
      <span class="text-gray-400">项目亮点用中文；分隔</span>
      <template v-for="(items, index) in formData">
        <div class="ml-4 flex items-center">
          <div class="text-base text-cyan-600">项目经历</div>
          <el-button class="mb-4 ml-78" @click="deleData(items, index)">
            删除</el-button
          >
        </div>

        <template v-for="num in projectFormConfig?.formItem">
          <el-form-item :label="num.lable + ':'" v-if="num.type === 'input'">
            <el-input
              :placeholder="num.placeholder"
              v-model="items[`${num.field}`]"
          /></el-form-item>
          <el-form-item :label="num.lable + ':'" v-if="num.type === 'input1'">
            <el-input
              type="textarea"
              autosize
              :placeholder="num.placeholder"
              v-model="items[`${num.field}`]"
            ></el-input>
          </el-form-item>
        </template>
      </template>
      <div class="text-base text-cyan-600 ml-4"># 添加数据</div>
      <template v-for="item in projectFormConfig?.formItem">
        <el-form-item :label="item.lable + ':'" v-if="item.type === 'input'">
          <el-input
            :placeholder="item.placeholder"
            v-model="inputObj[`${item.field}`]"
          />
        </el-form-item>
        <el-form-item :label="item.lable + ':'" v-if="item.type === 'input1'">
          <el-input
            type="textarea"
            autosize
            :placeholder="item.placeholder"
            v-model="inputObj[`${item.field}`]"
          ></el-input>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  count: Number,
  projectFormConfig: Object,
});

const projectFormConfig = props.projectFormConfig;
const store = useStore();
const inputObj: any = ref({
  organization: "",
  website: "",
  startDate: "",
  endDate: "",
  summary: "",
  highlights: [],
});
//存储project的值

const isArr = (origin: any): boolean => {
  let str = "[object Array]";
  return Object.prototype.toString.call(origin) == str ? true : false;
};
const deepClone = <T>(origin: T, target?: Record<string, any> | T): T => {
  let tar = target || {};

  for (const key in origin) {
    if (Object.prototype.hasOwnProperty.call(origin, key)) {
      if (typeof origin[key] === "object" && typeof origin[key] !== null) {
        tar[key] = isArr(origin[key]) ? [] : {};
        deepClone(origin[key], tar[key]);
      } else {
        tar[key] = origin[key];
      }
    }
  }

  return tar as T;
};
const formData: Ref<any> = ref(deepClone(store.state.project, []));
//点击删除教育经历
const deleData = (items: object, index: number) => {
  console.log(items, index);
  store.commit("deleData", { index, name: "project", items });
  formData.value = store.state.project;
};

//发送更新vuex数据请求
const updataProject = function () {
  if (inputObj.value.organization !== "" && inputObj.value.endDate !== "") {
    console.log("有内容");

    store.commit("updataProject", [inputObj.value, ...formData.value]);
  } else {
    console.log("无内容");

    store.commit("updataProject", formData.value);
  }
  inputObj.value = {
    organization: "",
    website: "",
    startDate: "",
    endDate: "",
    summary: "",
    highlights: [],
  };
  formData.value = store.state.project;
};

defineExpose({ updataProject, formData });
</script>

<style scoped></style>
