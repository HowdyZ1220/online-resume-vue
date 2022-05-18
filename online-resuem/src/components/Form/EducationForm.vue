<template>
  <div>
    <el-form
      :label-width="educationFormConfig?.labelWitdth"
      size="large"
      class="pr-10"
    >
      <template v-for="(items, index) in store.state.education">
        <div class="ml-4 flex">
          <div class="text-base text-cyan-600">教育经历 {{ index + 1 }}</div>
          <el-button class="mb-4 ml-72" @click="deleEducData(items, index)">
            删除教育经历 {{ index + 1 }}</el-button
          >
        </div>

        <template v-for="num in educationFormConfig.education">
          <el-form-item :label="num.lable + ':'" v-if="num.type === 'input'">
            <el-input
              :placeholder="num.placeholder"
              v-model="items[`${num.field}`]"
            />
          </el-form-item>
        </template>
      </template>
      <div># 添加数据</div>
      <template v-for="item in educationFormConfig.education">
        <el-form-item :label="item.lable + ':'" v-if="item.type === 'input'">
          <el-input
            :placeholder="item.placeholder"
            v-model="inputObj[`${item.field}`]"
          />
        </el-form-item>
      </template>
      <!-- <el-input
        class="pl-8"
        v-model="addText"
        autosize
        type=""
        placeholder="Please input"
        ><template #append>
          <el-button @click="addFormData">添加</el-button>
        </template>
      </el-input> -->
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  count: Number,
  educationFormConfig: Object,
});

const educationFormConfig = props.educationFormConfig;
const store = useStore();
//动态绑定输入的值
const inputObj = ref({
  school: "",
  area: "",
  studyType: "",
  startDate: "",
  endDate: "",
});
//存储education的值
const formData: Ref<any> = ref();
//对象深拷贝
const cloneInfo = function (obj1: any) {
  const obj2 = {};
  for (const item in obj1) {
    if (typeof item === "object" && obj1 !== null) {
      cloneInfo(item);
    }
    obj2[`${item}`] = obj1[`${item}`];
  }
  console.log(obj2);

  return obj2;
};
formData.value = cloneInfo(store.state.education);
//点击删除教育经历
const deleEducData = (items, index) => {
  console.log(items, index);
  store.commit("deleEducation", index);
};

//发送更新vuex数据请求
const updataEducation = function () {
  console.log("发送更新请求");
  console.log(formData.value);
  if (inputObj.value.school !== "" && inputObj.value.endDate !== "") {
    store.commit("updataEducation", inputObj.value);
  } else {
    store.commit("updataEducation");
  }

  inputObj.value = {
    school: "",
    area: "",
    studyType: "",
    startDate: "",
    endDate: "",
  };
};

defineExpose({ updataEducation, formData });
</script>

<style scoped></style>
