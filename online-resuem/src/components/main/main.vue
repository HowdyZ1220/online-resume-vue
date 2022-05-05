<template>
  <div class="border h-full bg-white ml-2 mr-4">
    <div class="mx-8 mt-6 mb-12">
      <div class="text-xl">背景资料</div>
      <el-divider />
    </div>
    <div class="mx-8 mt-6 font-sans mb-12" v-if="education">
      <div class="text-lg">教育经历</div>
      <el-divider />
      <template v-for="item in education">
        <div class="mb-4 flex text-lg">
          <div class="font-bold w-36 text-center">
            {{ item.institution }}
          </div>
          <div class="font-bold px-2 w-28 text-center">
            {{ item.studyType }}
          </div>
          <div class="px-2 w-36 text-center mr-4">{{ item.area }}</div>
          <div class="text-gray-400">
            {{ item.startDate }} ~ {{ item.endDate }}
          </div>
        </div>
      </template>
    </div>

    <div class="mx-8 mt-6 font-sans mb-12" v-if="project">
      <div class="text-lg">项目经历</div>
      <el-divider />
      <template v-for="item in project">
        <div class="mb-4">
          <div class="flex">
            <div class="text-center font-medium text-xl text-cyan-500 mx-6">
              {{ item.organization }}
            </div>
            <div class="text-gray-400 text-center">
              {{ item.startDate }}~{{ item.endDate }}
            </div>
          </div>
          <div class="px-2 mx-10 my-2">
            <span class="">技术栈：</span>
            <span>{{ item.summary }}</span>
          </div>

          <ul class="px-2 mx-10">
            <li v-for="info in item.highlights">
              {{ info }} <icon-email></icon-email>
              <!-- <icon-circlesoild /> -->
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import resumeInfo from "../../resume/index";
// import IconCirclesoild from "~icons/carbon/circle-soild";
import IconEmail from "~icons/carbon/email";
const education = resumeInfo.education;
const project = resumeInfo.project;
</script>

<style scoped></style>
