<template>
  <div>
    <el-form
      :label-width="basicsFormConfig?.labelWitdth"
      size="large"
      class="pr-20"
    >
      <template v-for="item in basicsFormConfig?.formItem">
        <el-form-item :label="item.lable" v-if="item.type === 'input'">
          <el-input
            :placeholder="item.placeholder"
            v-model="formData[`${item.field}`]"
          />
        </el-form-item>
        <el-form-item :label="item.field" v-if="item.type === 'select'">
          <el-select :placeholder="item.placeholder">
            <el-option label="男" value="男" />
            <el-option label="女" value="女" />
          </el-select>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  basicsFormConfig: Object,
});
const basicsFormConfig = props.basicsFormConfig;
const store = useStore();
//复制basics对象到formData
const formData: Ref<any> = ref({});
const cloneInfo = function (obj1: any, obj2: any) {
  for (const item in obj1) {
    obj2.value[`${item}`] = obj1[`${item}`];
  }
};
cloneInfo(store.state.basics, formData);

//发送更新vuex数据请求

const updataBasics = function () {
  console.log("发送更新请求");
  console.log();

  store.commit("updataBasics", formData.value);
};
defineExpose({ updataBasics, formData });
</script>

<style scoped></style>
