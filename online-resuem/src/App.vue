<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

//点击按钮导出pdf
// const output = () => {
//   isOpen.value = false;
//   html2canvas(document.querySelector("#showResume") as HTMLElement, {
//     scale: 6,
//   }).then(function (canvas) {
//     let imgData = canvas.toDataURL("image/JPEG", 1);
//     let imgWidth = 210;
//     let pageHeight = 295;
//     let imgHeight = (canvas.height * imgWidth) / canvas.width;
//     let heightLeft = imgHeight;
//     let doc = new jsPDF();
//     let position = 0;
//     doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
//     heightLeft -= pageHeight;
//     while (heightLeft > 0) {
//       position = heightLeft - imgHeight;
//       doc.addPage();
//       doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;
//     }
//     doc.save("Resume.pdf");
//   });
// window.print();
// };
import Container from "./container/container.vue";
</script>

<template>
  <div id="App" class="bg-f0f0f0">
    <Container></Container>
  </div>
</template>

<style>
.el-container {
  margin-bottom: 40px;
  height: 100%;
}
</style>
