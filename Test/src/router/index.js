import { createRouter, createWebHistory } from "vue-router";
import CourseList from "../views/CourseList.vue";
import CourseDetail from "../views/CourseDetail.vue";

const routes = [
  { path: "/", name: "home", component: CourseList },
  { path: "/course/:id", name: "courseDetail", component: CourseDetail },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
