<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Cột trái: Form đăng ký -->
      <div class="col-md-6">
        <h3>Form Đăng ký</h3>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label class="form-label">Họ tên:</label>
            <input
              type="text"
              class="form-control"
              v-model="fullName"
              placeholder="Nhập họ tên"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email:</label>
            <input
              type="email"
              class="form-control"
              v-model="email"
              placeholder="Nhập email"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Mật khẩu:</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Ngày sinh:</label>
            <input type="date" class="form-control" v-model="birthDate" />
          </div>
          <!-- Giới tính -->
          <div class="mb-3">
            <label class="form-label">Giới tính:</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="gt-nam"
                value="Nam"
                v-model="gender"
              />
              <label class="form-check-label" for="gt-nam">Nam</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="gt-nu"
                value="Nữ"
                v-model="gender"
              />
              <label class="form-check-label" for="gt-nu">Nữ</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="gt-khac"
                value="Khác"
                v-model="gender"
              />
              <label class="form-check-label" for="gt-khac">Khác</label>
            </div>
          </div>

          <!-- Ngôn ngữ -->
          <div class="mb-3">
            <label class="form-label">Ngôn ngữ:</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="lang-vn"
                value="Tiếng Việt"
                v-model="languages"
              />
              <label class="form-check-label" for="lang-vn">Tiếng Việt</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="lang-en"
                value="Tiếng Anh"
                v-model="languages"
              />
              <label class="form-check-label" for="lang-en">Tiếng Anh</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="lang-jp"
                value="Tiếng Nhật"
                v-model="languages"
              />
              <label class="form-check-label" for="lang-jp">Tiếng Nhật</label>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Đăng ký</button>
        </form>
      </div>

      <!-- Cột phải: Hiển thị kết quả sau khi đăng ký -->
      <div class="col-md-6" v-if="registered">
        <h4>Thông tin đã đăng ký</h4>
        <div class="mb-2"><strong>Họ tên:</strong> {{ fullName }}</div>
        <div class="mb-2"><strong>Email:</strong> {{ email }}</div>
        <div class="mb-2"><strong>Ngày sinh:</strong> {{ birthDate }}</div>
        <div class="mb-2"><strong>Giới tính:</strong> {{ gender }}</div>
        <div class="mb-2">
          <strong>Ngôn ngữ:</strong> {{ languages.join(", ") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fullName = ref("");
const email = ref("");
const password = ref("");
const birthDate = ref("");
const gender = ref("");
const languages = ref([]);
const registered = ref(false);

function register() {
  // có thể thêm validation nếu cần
  registered.value = true;
}
</script>
