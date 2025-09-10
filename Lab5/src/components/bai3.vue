<template>
  <div class="col-sm-8">
    <h1>Thông tin cá nhân</h1>
    <form>
      <div class="mb-3">
        <label>Họ và Tên:</label>
        <input
          v-model="userInfo.name"
          type="text"
          class="form-control"
          placeholder="Nhập họ và tên"
        />
      </div>

      <div class="mb-3">
        <label>Tuổi:</label>
        <input
          v-model="userInfo.age"
          type="number"
          class="form-control"
          placeholder="Nhập tuổi"
        />
      </div>

      <div class="mb-3">
        <label>Email:</label>
        <input
          v-model="userInfo.email"
          type="email"
          class="form-control"
          placeholder="Nhập email"
        />
      </div>
    </form>

    <!-- Hiển thị thông tin sau khi nhập -->
    <div class="info-display mt-4 p-3 bg-dark text-white rounded">
      <h2>Thông tin đã nhập:</h2>
      <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
      <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
      <p><strong>Email:</strong> {{ userInfo.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// Khởi tạo đối tượng thông tin người dùng sử dụng reactive để tạo reactivity
const userInfo = reactive({
  name: "",
  age: null,
  email: "",
});
</script>

<style scoped>
.col-sm-8 {
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
  text-align: left;
  font-family: Arial, sans-serif;
}

.mb-3 {
  margin-bottom: 12px;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  box-sizing: border-box;
}

.info-display {
  margin-top: 20px;
  padding: 12px;
  background-color: #333;
  color: #fff;
  border-radius: 6px;
}

.info-display p {
  margin: 4px 0;
}
</style>
