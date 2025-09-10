<template>
  <div class="container mt-4">
    <h3>Đăng nhập (giả lập)</h3>
    <button class="btn btn-success" @click="login">Đăng nhập</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function login() {
  alert("Đăng nhập thành công (giả lập)");
  router.push({ name: "Dashboard" });
}
</script>
