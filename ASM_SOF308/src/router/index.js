import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import NewPost from "../views/NewPost.vue";
import PostDetail from "../views/PostDetail.vue";
import Profile from "../views/Profile.vue";
import MyPosts from "../views/MyPosts.vue";
import EditPost from "../views/EditPost.vue";
import Users from "../views/Users.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  {
    path: "/new-post",
    component: NewPost,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  { path: "/post/:id", component: PostDetail },
  { path: "/profile", component: Profile, meta: { requiresAuth: true } },
  {
    path: "/my-posts",
    component: MyPosts,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/edit-post/:id",
    component: EditPost,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/users",
    component: Users,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const current = JSON.parse(localStorage.getItem("currentUser") || "null");

  if (to.meta && to.meta.requiresAuth && !current) {
    alert("Bạn cần đăng nhập để vào trang này");
    return next("/login");
  }

  if (to.meta && to.meta.roles && to.meta.roles.length) {
    if (!current || !to.meta.roles.includes(current.role)) {
      alert("Bạn không đủ quyền để truy cập");
      return next("/");
    }
  }

  next();
});

export default router;
