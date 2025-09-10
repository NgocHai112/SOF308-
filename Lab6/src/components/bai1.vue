<template>
  <div class="container py-4">
    <div class="card p-4 shadow">
      <h2 class="text-center mb-4">Xếp loại học lực</h2>

      <div class="mb-3">
        <label for="score" class="form-label">Nhập điểm trung bình:</label>
        <input
          id="score"
          type="number"
          v-model.number="score"
          class="form-control"
          min="0"
          max="10"
          step="0.1"
        />
      </div>

      <div class="alert alert-info mt-3" v-if="score < 5 && score >= 0">
        Xếp loại: Yếu
      </div>
      <div class="alert alert-secondary" v-else-if="score >= 5 && score < 6.5">
        Xếp loại: Trung bình
      </div>
      <div class="alert alert-primary" v-else-if="score >= 6.5 && score < 8">
        Xếp loại: Khá
      </div>
      <div class="alert alert-success" v-else-if="score >= 8 && score < 9">
        Xếp loại: Giỏi
      </div>
      <div class="alert alert-warning" v-else-if="score >= 9 && score <= 10">
        Xếp loại: Xuất sắc
      </div>
      <div class="alert alert-danger" v-else-if="score > 10 || score < 0">
        Điểm không hợp lệ!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const score = ref(0);
</script>
