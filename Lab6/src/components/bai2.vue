<template>
  <div class="container py-4">
    <div class="card p-4 shadow">
      <h2 class="text-center text-success mb-4">Xác định mùa theo tháng</h2>

      <div class="mb-3">
        <label for="month" class="form-label">Nhập tháng (1 - 12):</label>
        <input
          id="month"
          type="number"
          v-model.number="month"
          class="form-control"
          placeholder=""
          min="1"
          max="12"
        />
      </div>

      <div v-if="month >= 1 && month <= 3" class="alert alert-info">
        Mùa Xuân
      </div>
      <div v-else-if="month >= 4 && month <= 6" class="alert alert-warning">
        Mùa Hạ
      </div>
      <div v-else-if="month >= 7 && month <= 9" class="alert alert-success">
        Mùa Thu
      </div>
      <div v-else-if="month >= 10 && month <= 12" class="alert alert-secondary">
        Mùa Đông
      </div>
      <div v-else-if="month !== null" class="alert alert-danger">
        Vui lòng nhập tháng từ 1 đến 12!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const month = ref("1");
</script>
