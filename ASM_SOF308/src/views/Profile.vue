<template>
  <div class="container mt-5" style="max-width: 600px;">
    <div class="card shadow-sm border-0">
      <div class="card-body p-4">
        <h2 class="text-center mb-4 fw-bold">
          <i class="bi bi-person-circle me-2"></i>Thông tin cá nhân
        </h2>

        <form @submit.prevent="saveProfile">
          <div class="mb-4 text-center">
            <img
              v-if="user.avatar"
              :src="user.avatar"
              class="rounded-circle shadow avatar-preview"
              alt="Avatar"
            />
            <div v-else class="text-muted">Chưa có ảnh đại diện</div>
          </div>

          <div class="mb-3">
            <label class="form-label">Ảnh đại diện mới</label>
            <input type="file" class="form-control" accept="image/*" @change="handleAvatarUpload" />
          </div>

          <div class="mb-3">
            <label class="form-label">Tên</label>
            <input v-model="user.name" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Email (không thay đổi)</label>
            <input v-model="user.email" class="form-control" disabled />
          </div>

          <div class="mb-3">
            <label class="form-label">Mật khẩu</label>
            <input v-model="user.password" type="password" class="form-control" required />
          </div>

          <button class="btn btn-primary w-100">
            <i class="bi bi-save me-1"></i> Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('currentUser'))
    };
  },
  methods: {
    handleAvatarUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        this.user.avatar = reader.result;
      };
      reader.readAsDataURL(file);
    },

    saveProfile() {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const index = users.findIndex(u => u.email === this.user.email);
      if (index !== -1) {
        users[index] = this.user;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        alert("Cập nhật thành công!");
      }
    }
  }
};
</script>

<style scoped>
.avatar-preview {
  width: 100px;
  height: 100px;
  object-fit: cover;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.2); /* đổ bóng bên trái */
}
</style>
