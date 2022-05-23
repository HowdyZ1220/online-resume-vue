<template>
  <div class="common-layout">
    <el-container class="relative">
      <Header
        class="fixed right-6 h-12 w-12 bottom-16 rounded-3xl shadow-2xl text-center z-10"
      ></Header>

      <el-container>
        <el-aside width="500px" class="sticky top-0 h-screen">
          <Aside></Aside>
        </el-aside>
        <el-main class="main">
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header/Header.vue";
import Aside from "../components/Aside/Aside.vue";
import Main from "../components/Main/Main.vue";
</script>

<style scoped>
.common-layout :deep() .main {
  padding: 0;
}
.common-layout :deep() .header {
  padding: 0;
}
</style>
