import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import BaseInfo from "./components/baseInfo";

const app = createApp(App);
app.component("BaseInfo", BaseInfo);

app.use(ElementPlus);
app.mount("#app");
