import * as Vue from "vue";
const { createApp } = Vue;
import router from "@/router/index";
import App from "./App.vue";
import "@/assets/js/rem";
import "@/assets/css/index";
import Vant from "vant";
import "vant/lib/index.css";
import Title from "@/components/Title";



const APP = createApp(App);

APP.use(Title).component("Title", Title).use(Vant).use(router).mount("#app");
