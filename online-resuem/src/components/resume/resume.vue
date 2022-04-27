<template>
  <div class="common-layout font-mono">
    <div id="header" class="border h-full text-5xl">
      <Header></Header>
    </div>
    <div id="resume-body" class="border h-full flex justify-between space">
      <Aside></Aside>
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../header";
import Aside from "../aside";
import Main from "../main";
</script>

<style scoped></style>
