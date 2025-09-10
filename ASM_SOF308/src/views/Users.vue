<template>
  <div class="container py-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h2 class="h4 fw-bold mb-0">
        <i class="bi bi-people me-2"></i>Quản lý người dùng
      </h2>
      <input
        v-model="kw"
        class="form-control"
        style="max-width: 280px"
        placeholder="Tìm theo tên/email"
      />
    </div>

    <div class="card border-0 shadow-sm">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table mb-0 align-middle">
            <thead class="table-light">
              <tr>
                <th>#</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Quyền</th>
                <th class="text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(u, i) in filtered" :key="u.email">
                <td>{{ i + 1 }}</td>
                <td>{{ u.name }}</td>
                <td>{{ u.email }}</td>
                <td style="width: 200px">
                  <select v-model="u.role" class="form-select form-select-sm">
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td class="text-end">
                  <button
                    class="btn btn-sm btn-primary me-2"
                    @click="saveRole(u)"
                  >
                    <i class="bi bi-save me-1"></i>Lưu quyền
                  </button>
                  <button
                    class="btn btn-sm btn-warning me-2"
                    @click="resetPwd(u)"
                  >
                    <i class="bi bi-key me-1"></i>Đặt lại mật khẩu
                  </button>
                  <button class="btn btn-sm btn-danger" @click="removeUser(u)">
                    <i class="bi bi-trash me-1"></i>Xóa
                  </button>
                </td>
              </tr>
              <tr v-if="filtered.length === 0">
                <td colspan="5" class="text-center text-muted py-4">
                  Không có người dùng phù hợp.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="small text-muted mt-2">
      Admin hiện tại: {{ adminCount }} (không được xóa admin cuối cùng)
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      kw: "",
      currentUser: null,
    };
  },
  computed: {
    filtered() {
      const k = this.kw.trim().toLowerCase();
      if (!k) return this.users;
      return this.users.filter(
        (u) =>
          (u.name || "").toLowerCase().includes(k) ||
          (u.email || "").toLowerCase().includes(k)
      );
    },
    adminCount() {
      return this.users.filter((u) => u.role === "admin").length;
    },
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {
      this.users = JSON.parse(localStorage.getItem("users") || "[]");
      this.currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "null"
      );
      // migrate thiếu role -> user
      let changed = false;
      this.users = this.users.map((u) =>
        u.role ? u : ((changed = true), { ...u, role: "user" })
      );
      if (changed) localStorage.setItem("users", JSON.stringify(this.users));
    },
    saveRole(u) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const idx = users.findIndex((x) => x.email === u.email);
      if (idx !== -1) {
        users[idx].role = u.role;
        localStorage.setItem("users", JSON.stringify(users));
        if (this.currentUser && this.currentUser.email === u.email) {
          this.currentUser.role = u.role;
          localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        }
        alert("Đã lưu quyền.");
      }
    },
    resetPwd(u) {
      const pwd = prompt(`Nhập mật khẩu mới cho ${u.email}`, "123456");
      if (!pwd) return;
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const idx = users.findIndex((x) => x.email === u.email);
      if (idx !== -1) {
        users[idx].password = pwd;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đã đặt lại mật khẩu.");
      }
    },
    removeUser(u) {
      if (this.currentUser && this.currentUser.email === u.email)
        return alert("Không thể xóa chính bạn.");
      if (u.role === "admin" && this.adminCount <= 1)
        return alert("Phải còn ít nhất 1 admin.");
      if (!confirm(`Xóa tài khoản ${u.email}?`)) return;

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const idx = users.findIndex((x) => x.email === u.email);
      if (idx !== -1) {
        users.splice(idx, 1);
        localStorage.setItem("users", JSON.stringify(users));
        this.users = users;
        alert("Đã xóa.");
      }
    },
  },
};
</script>
