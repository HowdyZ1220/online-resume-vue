<template>
  <div class="border h-full bg-white ml-2 mr-4">
    <!-- 资料背景 -->
    <div class="mx-8 mt-6 mb-12">
      <div class="text-xl flex">
        <icon-account class="mr-2 mt-0.5" />背景资料
      </div>
      <el-divider />

      <ul class="px-2 mx-6">
        <div v-for="info in summary" class="flex mb-2">
          <icon-play-filled-alt class="h-3 mt-1.5 mr-1" />
          <li class="">
            {{ info }}
          </li>
        </div>
      </ul>
    </div>
    <!-- 教育经历 -->
    <div class="mx-8 mt-6 font-sans mb-12" v-if="education">
      <div class="text-xl flex">
        <icon-education class="mr-2 mt-0.5" /> 教育经历
      </div>
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
    <!-- 项目经历 -->
    <div class="mx-8 mt-6 font-sans mb-12" v-if="project">
      <div class="text-xl flex">
        <icon-data-check class="mr-2 mt-0.5" />项目经历
      </div>
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
            <div v-for="info in item.highlights" class="flex">
              <icon-radio-button class="h-3 mt-1.5 mr-1" />
              <li class="">
                {{ info }}
              </li>
            </div>
          </ul>
        </div>
      </template>
    </div>
    <!-- 技能清单 -->
    <div class="mx-8 mt-6 font-sans mb-12" v-if="skills">
      <div class="text-xl flex">
        <icon-tool-kit class="mr-2 mt-0.5" /> 技能清单
      </div>
      <el-divider />

      <el-table :data="skills" border style="width: 100%" class="bg-slate-500">
        <el-table-column prop="name" label="技能" width="180" />
        <el-table-column prop="keywords" label="掌握程度" />
      </el-table>
    </div>
    <!-- 荣誉证书 -->
    <div class="mx-8 mt-6 font-sans mb-12" v-if="awards">
      <div class="text-xl flex">
        <icon-certificate class="mr-2 mt-0.5" /> 荣誉证书
      </div>
      <el-divider />
      <template v-for="item in awards">
        <div class="mb-4 flex">
          <div class="ml-4">
            {{ item.title }}
          </div>
          <div class="px-2 w-28 text-gray-400 text-center">
            {{ item.date }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import resumeInfo from "../../resume/index";
import IconAccount from "~icons/carbon/account";
import IconPlayFilledAlt from "~icons/carbon/play-filled-alt";
import IconRadioButton from "~icons/carbon/radio-button";
import IconEducation from "~icons/carbon/education";
import IconCertificate from "~icons/carbon/certificate";
import IconToolKit from "~icons/carbon/tool-kit";
import IconDataCheck from "~icons/carbon/data-check";

const store = useStore();
const { education, project, skills, awards, summary } = store.state;
</script>

<style scoped></style>
