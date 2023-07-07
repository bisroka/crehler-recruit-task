import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ListingView from "../views/ListingView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "listing",
    component: ListingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
