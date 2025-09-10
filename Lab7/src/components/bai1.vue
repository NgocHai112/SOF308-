<template>
  <div class="col-sm-4 p-5 mb-3 m-auto rounded-3">
    <h3 class="text-center">Quản lý công việc</h3>
    <!-- Form để thêm công việc mới -->
    <form @submit.prevent="addList">
      <div class="mb-3">
        <label class="form-label">Tên công việc: </label>
        <input
          type="text"
          class="form-control"
          v-model="newToDo"
          placeholder="Nhập tên công việc"
        />
      </div>
      <button type="submit" class="btn btn-primary">Thêm công việc</button>
    </form>
    <!-- Hiển thị danh sách công việc -->
    <ul class="list-group mt-4">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="(job, index) in jobs"
        :key="index"
      >
        {{ job }}
        <button class="btn btn-danger btn-sm" @click="removeList(index)">
          Xóa
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
const newToDo = ref("");
const jobs = ref(["Ăn sáng", "Đi học", "Chơi bóng rổ"]);
const addList = () => {
  if (newToDo.value.trim()) {
    //loại bỏ khoảng trắng ở đầu và cuối của chuỗi
    jobs.value.push(newToDo.value.trim());
    newToDo.value = ""; // reset input field after adding
  }
};
const removeList = (index) => {
  jobs.value.splice(index, 1);
};
</script>
