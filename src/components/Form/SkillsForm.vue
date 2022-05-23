<template>
  <div>
    <el-form
      :label-width="skillsFormConfig?.labelWitdth"
      size="large"
      class="pr-10"
    >
      <template v-for="(items, index) in formData">
        <div class="">
          <el-button
            class="relative left-48 ml-20 bottom-4"
            @click="deleData(items, index)"
          >
            删除</el-button
          >
          <div>
            <template v-for="num of skillsFormConfig?.formItem">
              <el-form-item
                :label="num.lable + ':'"
                v-if="num.type === 'input'"
              >
                <el-input
                  class="w-56"
                  :placeholder="num.placeholder"
                  v-model="items[`${num.field}`]"
                />
              </el-form-item>
            </template>
          </div>
          <el-divider />
        </div>
      </template>
      <!-- 添加数据 -->
      <div class="text-base text-cyan-600 ml-4 mb-4">添加数据</div>
      <template v-for="item in skillsFormConfig?.formItem">
        <el-form-item :label="item.lable + ':'" v-if="item.type === 'input'">
          <el-input
            :placeholder="item.placeholder"
            v-model="inputObj[`${item.field}`]"
          />
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  skillsFormConfig: Object,
});
const skillsFormConfig = props.skillsFormConfig;
const inputObj: any = ref({
  name: "",
  keywords: "",
});

//对象深拷贝
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
let formData = ref(deepClone(store.state.skills, []));
//点击删除教育经历
const deleData = (items: any, index: any) => {
  store.commit("deleData", { items, index, name: "skills" });
  formData.value = store.state.skills;
};

//发送更新vuex数据请求
const updataSkills = function () {
  if (inputObj.value.name !== "") {
    store.commit("updataSkills", [inputObj.value, ...formData.value]);
  } else {
    store.commit("updataSkills", formData.value);
  }
  formData.value = store.state.skills;
  inputObj.value = {
    name: "",
    keywords: "",
  };
};
defineExpose({ updataSkills, formData });
</script>

<style scoped></style>
