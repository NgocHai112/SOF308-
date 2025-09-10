<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">PoLy Blog</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">🏠 Trang chủ</router-link>
          </li>
          <li class="nav-item" v-if="currentUser">
            <router-link
              to="/new-post"
              class="nav-link"
              v-if="currentUser && isAdmin"
              >✍️ Đăng bài</router-link
            >
          </li>
          <li class="nav-item" v-if="currentUser">
            <router-link
              to="/my-posts"
              class="nav-link"
              v-if="currentUser && isAdmin"
              >📚 Bài viết của tôi</router-link
            >
          </li>
          <li class="nav-item" v-if="currentUser && isAdmin">
            <router-link to="/users" class="nav-link"
              >👥 Quản lý user</router-link
            >
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <template v-if="currentUser">
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">
                👤 {{ currentUser.name || currentUser.email }}
              </router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="logout"
                >🚪 Đăng xuất</a
              >
            </li>
          </template>

          <template v-else>
            <li class="nav-item">
              <router-link to="/login" class="nav-link"
                >🔑 Đăng nhập</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link"
                >📝 Đăng ký</router-link
              >
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentUser: null,
    };
  },
  mounted() {
    this.loadUser();
    window.addEventListener("storage", this.loadUser);
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.loadUser);
  },
  methods: {
    loadUser() {
      const stored = localStorage.getItem("currentUser");
      this.currentUser = stored ? JSON.parse(stored) : null;
    },
    logout() {
      localStorage.removeItem("currentUser");
      this.currentUser = null;
      this.$router.push("/login");
    },
    asset(p) {
      const base = import.meta.env.BASE_URL || "/";
      return base + p.replace(/^\//, "");
    },
  },
  computed: {
    isAdmin() {
      return this.currentUser && this.currentUser.role === "admin";
    },
  },
};
</script>

<style scoped>
.navbar-nav .nav-link {
  font-weight: 500;
}
</style>
