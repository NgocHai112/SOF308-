<template>
  <div id="app">
    <!-- Thanh điều hướng dùng Bootstrap -->
    <Navbar />

    <!-- Nội dung trang hiện tại -->
    <main class="container my-4">
      <router-view />
    </main>

    <!-- Footer (tuỳ chọn) -->
    <footer class="bg-dark text-light py-3 mt-auto">
      <div class="container d-flex justify-content-between small">
        <span>© {{ year }} Vue Backend</span>
        <span>SOF308 – Đề 01</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Navbar from "./components/Navbar.vue";

const year = computed(() => new Date().getFullYear());
</script>

<style>
/* Toàn bộ app nền xám nhẹ cho dễ nhìn */
html,
body,
#app {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
}

/* Tối ưu khoảng cách phần main */
main.container {
  flex: 1 0 auto;
}

/* Chỉnh nhẹ link active trong footer nếu có */
footer a {
  text-decoration: none;
}
</style>
