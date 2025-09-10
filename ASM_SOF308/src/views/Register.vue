<template>
  <div class="container mt-5" style="max-width: 500px">
    <div class="card shadow-sm border-0">
      <div class="card-body p-4">
        <h2 class="text-center mb-4 fw-bold">
          <i class="bi bi-person-plus me-2"></i>Đăng ký tài khoản
        </h2>

        <form @submit.prevent="register">
          <div class="mb-3">
            <label class="form-label">Tên</label>
            <input
              v-model="name"
              class="form-control"
              required
              placeholder="Nhập tên của bạn"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              required
              placeholder="Email hợp lệ"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Mật khẩu</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              required
              placeholder="Tạo mật khẩu"
            />
          </div>
          <button class="btn btn-success w-100">
            <i class="bi bi-check-circle me-1"></i> Đăng ký
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
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const exists = users.find((u) => u.email === this.email);
      if (exists) {
        alert("Email đã tồn tại");
        return;
      }
      const newUser = {
        role: "user",
        name: this.name,
        email: this.email,
        password: this.password,
        avatar: "",
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Đăng ký thành công!");
      this.$router.push("/login");
    },
  },
};
</script>
