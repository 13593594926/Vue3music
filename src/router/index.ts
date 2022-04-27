import { createRouter, createWebHistory } from "vue-router";
const routes: any[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/view/m/Home"),
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
