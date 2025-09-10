<template>
  <div class="container mt-4">
    <h3 class="mb-3">Danh sách sinh viên DEMO</h3>
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Họ và tên</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(st, index) in students" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ st }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const students = ref([
  "Hoàng Văn Nam",
  "Vũ Văn Tài",
  "Lê Đức Trí",
  "Lê Thị Hà",
]);
</script>
