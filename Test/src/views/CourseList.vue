<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-primary text-center">QUẢN LÝ KHÓA HỌC</h2>

    <!-- Tìm kiếm -->
    <div class="row mb-3 justify-content-center">
      <div class="col-md-5 mb-2">
        <input
          v-model.lazy="searchQuery"
          class="form-control"
          placeholder="🔍 Tìm kiếm theo ID, tên khóa học, thời lượng, học phí..."
        />
      </div>
    </div>

    <!-- Form thêm/sửa -->
    <div class="d-flex justify-content-center">
      <div class="card mb-4 shadow-sm rounded col-md-5 p-0">
        <div class="card-header bg-success text-white text-center rounded-top">
          <strong>{{
            editMode ? "✏️ Sửa khóa học" : "➕ Thêm khóa học"
          }}</strong>
        </div>
        <div class="card-body p-4">
          <form @submit.prevent="editMode ? updateCourse() : addCourse()">
            <div class="mb-3">
              <label class="form-label">Tên khóa học</label>
              <input
                v-model="form.course"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Thời lượng (giờ)</label>
              <input
                v-model.number="form.duration"
                type="number"
                class="form-control"
                required
                min="1"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Học phí (VNĐ)</label>
              <input
                v-model.number="form.price"
                type="number"
                class="form-control"
                required
                min="0"
              />
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="submit" class="btn btn-primary">
                {{ editMode ? "💾 Cập nhật" : "✔️ Thêm" }}
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                @click="resetForm()"
              >
                🔄 Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Danh sách khóa học -->
    <table class="table table-striped table-hover">
      <thead class="table-dark">
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>Khóa học</th>
          <th>Thời lượng</th>
          <th>Học phí</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course, index) in filteredCourses" :key="course.id">
          <td>{{ index + 1 }}</td>
          <td>{{ course.id }}</td>
          <td>{{ course.course }}</td>
          <td>{{ course.duration }} giờ</td>
          <td>{{ course.price }} VNĐ</td>
          <td>
            <!-- dùng phương thức goDetail để router -->
            <!-- <button
              class="btn btn-sm btn-info me-1"
              @click="goDetail(course.id)"
            >
              🔍 Chi tiết
            </button> -->

            <!-- Dùng RouterLink  -->
            <RouterLink
              :to="`/course/${course.id}`"
              class="btn btn-sm btn-info text-white"
            >
              🔍 Chi tiết
            </RouterLink>

            <button
              class="btn btn-sm btn-warning me-1"
              @click="editCourse(course)"
            >
              ✏️
            </button>
            <button
              class="btn btn-sm btn-danger"
              @click="deleteCourse(course.id)"
            >
              🗑️
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { courses } from "../data/courses";

export default {
  data: function () {
    return {
      courses: courses,
      form: {
        id: "",
        course: "",
        duration: "",
        unit: "giờ",
        price: "",
      },
      editMode: false,
      searchQuery: "",
    };
  },
  //lọc
  computed: {
    filteredCourses: function () {
      const keyword = this.searchQuery.toLowerCase();

      return this.courses.filter(function (c) {
        return (
          c.id.toLowerCase().includes(keyword) ||
          c.course.toLowerCase().includes(keyword) ||
          c.duration.toString().includes(keyword) ||
          c.price.toString().includes(keyword)
        );
      });
    },
  },

  methods: {
    goDetail: function (id) {
      this.$router.push("/course/" + id);
    },

    addCourse: function () {
      if (!this.validate()) return;
      const newId = "C" + (this.courses.length + 1); // Tạo id dạng C11, C12...hoặc để id theo thời gian Date.now()
      const newCourse = {
        id: newId,
        course: this.form.course,
        duration: this.form.duration,
        unit: "giờ",
        price: this.form.price,
      };

      this.courses.push(newCourse);
      alert("Đã thêm khóa học mới!");
      this.resetForm();
    },

    editCourse: function (c) {
      this.form = {
        id: c.id,
        course: c.course,
        duration: c.duration,
        unit: c.unit,
        price: c.price,
      };
      this.editMode = true;
    },

    updateCourse: function () {
      if (!this.validate()) return;
      for (let i = 0; i < this.courses.length; i++) {
        if (this.courses[i].id === this.form.id) {
          this.courses[i] = {
            id: this.form.id,
            course: this.form.course,
            duration: this.form.duration,
            unit: "giờ",
            price: this.form.price,
          };
          break;
        }
      }

      alert("Đã cập nhật khóa học!");
      this.resetForm();
    },

    deleteCourse: function (id) {
      this.courses = this.courses.filter(function (c) {
        return c.id !== id;
      });
      this.resetForm();
    },

    resetForm: function () {
      this.form = {
        id: "",
        course: "",
        duration: "",
        unit: "giờ",
        price: "",
      };
      this.editMode = false;
    },

    validate: function () {
      if (
        this.form.course === "" ||
        this.form.duration === "" ||
        isNaN(this.form.duration) ||
        this.form.price === "" ||
        isNaN(this.form.price)
      ) {
        alert("Vui lòng nhập đúng và đầy đủ thông tin!");
        return false;
      }
      return true;
    },
  },
};
</script>
