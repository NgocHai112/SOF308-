<template>
  <div class="container mt-5" style="max-width: 500px;">
    <div class="card shadow-sm border-0">
      <div class="card-body p-4">
        <h2 class="text-center mb-4 fw-bold"><i class="bi bi-box-arrow-in-right me-2"></i>Đăng nhập</h2>

        <form @submit.prevent="login">
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" required placeholder="Nhập email" />
          </div>
          <div class="mb-3">
            <label class="form-label">Mật khẩu</label>
            <input v-model="password" type="password" class="form-control" required placeholder="Nhập mật khẩu" />
          </div>
          <button class="btn btn-primary w-100">
            <i class="bi bi-box-arrow-in-right me-1"></i> Đăng nhập
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
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === this.email && u.password === this.password);
  if (!user) {
    alert("Sai email hoặc mật khẩu");
    return;
  }
  localStorage.setItem('currentUser', JSON.stringify(user));
  alert("Đăng nhập thành công!");

  this.$router.push('/');

  // ✅ Reload lại để Navbar cập nhật
  setTimeout(() => {
    window.location.reload();
  }, 100);
}

  }
};

</script>
