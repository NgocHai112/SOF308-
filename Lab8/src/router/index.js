import { createRouter, createWebHistory } from "vue-router";

import home from "../components/home.vue";
import blogList from "../components/blog-list.vue";
import blogPost from "../components/blog-post.vue";
import login from "../components/login.vue";
import dashboard from "../components/dashboard.vue";
import userProfile from "../components/user-profile.vue";
import profileInfo from "../components/profile-info.vue";
import profileSetting from "../components/profile-setting.vue";

// Biến giả lập trạng thái đăng nhập
let isAuthenticated = false;

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/blog",
    name: "BlogList",
    component: blogList,
  },
  {
    path: "/blog/:id",
    name: "BlogPost",
    component: blogPost,
  },
  {
    path: "/login",
    name: "Login",
    component: login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "UserProfile",
    component: userProfile,
    alias: "/me",
    children: [
      {
        path: "info",
        name: "ProfileInfo",
        component: profileInfo,
      },
      {
        path: "settings",
        name: "ProfileSetting",
        component: profileSetting,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route Guard bảo vệ dashboard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
