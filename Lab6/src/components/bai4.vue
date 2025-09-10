<template>
  <div class="container py-4">
    <div class="row g-4">
      <!-- Cột bên trái: Form -->
      <div class="col-md-4">
        <div class="card shadow border-0">
          <div class="card-header bg-success text-white text-center fw-bold">
            {{ isEditing ? "Cập nhật học sinh" : "Thêm học sinh" }}
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Họ tên</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="student.name"
                  id="name"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="score" class="form-label">Điểm</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="student.score"
                  id="score"
                  min="0"
                  max="10"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="dob" class="form-label">Ngày sinh</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="student.dob"
                  id="dob"
                  required
                />
              </div>

              <button type="submit" class="btn btn-success w-100">
                {{ isEditing ? "Cập nhật" : "Thêm" }}
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Cột bên phải: Bảng danh sách -->
      <div class="col-md-8">
        <div class="card shadow border-0">
          <div class="card-header bg-primary text-white fw-bold text-center">
            Danh sách học sinh
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light text-center">
                  <tr>
                    <th>Họ tên</th>
                    <th>Điểm</th>
                    <th>Ngày sinh</th>
                    <th colspan="2">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(stu, index) in students" :key="index">
                    <td>{{ stu.name }}</td>
                    <td class="text-center">{{ stu.score }}</td>
                    <td>{{ stu.dob }}</td>
                    <td class="text-center">
                      <button
                        class="btn btn-warning btn-sm"
                        @click="editStudent(index)"
                      >
                        <i class="fas fa-edit me-1"></i>Sửa
                      </button>
                    </td>
                    <td class="text-center">
                      <button
                        class="btn btn-danger btn-sm"
                        @click="deleteStudent(index)"
                      >
                        <i class="fas fa-trash-alt me-1"></i>Xóa
                      </button>
                    </td>
                  </tr>
                  <tr v-if="students.length === 0">
                    <td colspan="5" class="text-center text-muted py-3">
                      Chưa có học sinh nào được thêm.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const students = ref([
  { name: "Nguyễn Ngọc Hải ", score: 8, dob: "2006-01-01" },
  { name: "Hải Ng", score: 9, dob: "2006-05-15" },
  { name: "Hải Ng2", score: 9, dob: "2006-05-15" },
]);

const student = ref({
  name: "",
  score: null,
  dob: "",
});

let isEditing = ref(false);
let editingIndex = ref(null);

function submitForm() {
  if (isEditing.value) {
    students.value[editingIndex.value] = { ...student.value };
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    students.value.push({ ...student.value });
  }
  resetForm();
}

function editStudent(index) {
  student.value = { ...students.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
}

function deleteStudent(index) {
  students.value.splice(index, 1);
  if (editingIndex.value === index) {
    resetForm();
  }
}

function resetForm() {
  student.value = {
    name: "",
    score: null,
    dob: "",
  };
  isEditing.value = false;
  editingIndex.value = null;
}
</script>
