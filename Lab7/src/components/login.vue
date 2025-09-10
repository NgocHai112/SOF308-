<template>
  <div class="m-5 col-sm-3">
    <h2>Đăng nhập</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="username">Tên đăng nhập</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="form-control"
          required
          placeholder="Nhập tên đăng nhập"
        />
      </div>
      <div class="mb-3">
        <label for="password">Mật khẩu</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-control"
          required
          placeholder="Nhập mật khẩu"
        />
      </div>
      <button type="submit" class="btn btn-primary">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
// khai báo biến để lưu trữ tên đăng nhập và mật khẩu
const username = ref("");
const password = ref("");
// khai báo sự kiện để thông báo khi đăng nhập thành công
const emit = defineEmits(["loggedIn"]);
function handleLogin() {
  if (username.value && password.value) {
    emit("loggedIn", username.value);
  }
}
</script>
