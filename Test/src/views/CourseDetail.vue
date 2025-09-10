<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm rounded">
          <div class="card-header bg-primary text-white text-center">
            <h4 class="mb-0">📄 Chi tiết khoá học</h4>
          </div>
          <div class="card-body" v-if="course">
            <ul class="list-group">
              <li class="list-group-item">
                <strong>ID:</strong> {{ course.id }}
              </li>
              <li class="list-group-item">
                <strong>Khoá học:</strong> {{ course.course }}
              </li>
              <li class="list-group-item">
                <strong>Thời lượng:</strong> {{ course.duration }}
                {{ course.unit }}
              </li>
              <li class="list-group-item">
                <strong>Học phí:</strong> {{ course.price }} VNĐ
              </li>
            </ul>
            <div class="text-center mt-4">
              <button class="btn btn-secondary" @click="$router.push('/')">
                ⬅️ Quay lại danh sách
              </button>
            </div>
          </div>

          <div class="card-body text-center text-danger" v-else>
            Không tìm thấy khoá học!
            <br />
            <button
              class="btn btn-outline-secondary mt-3"
              @click="$router.push('/')"
            >
              Về trang chủ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { courses } from "../data/courses";

export default {
  computed: {
    course() {
      const id = this.$route.params.id;
      return courses.find((c) => c.id == id);
    },
  },
};
</script>
