<template>
  <div class="container mt-5" style="max-width: 700px">
    <div class="card shadow-sm border-0">
      <div class="card-body p-4">
        <h2 class="text-center mb-4 fw-bold">
          <i class="bi bi-pencil-square me-2"></i>Chỉnh sửa bài viết
        </h2>

        <form @submit.prevent="updatePost">
          <div class="mb-3">
            <label class="form-label">Tiêu đề bài viết</label>
            <input
              v-model="post.title"
              class="form-control"
              required
              placeholder="Nhập tiêu đề bài viết..."
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Nội dung</label>
            <textarea
              v-model="post.content"
              class="form-control"
              rows="7"
              required
              placeholder="Nhập nội dung chi tiết..."
            ></textarea>
          </div>
          <button class="btn btn-success w-100">
            <i class="bi bi-check-circle me-1"></i> Cập nhật bài viết
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
      post: {
        content: "",
      },
    };
  },
  mounted() {
    const id = this.$route.params.id;
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const foundPost = posts.find((p) => p.id == id);
    if (!foundPost) {
      alert("Không tìm thấy bài viết");
      this.$router.push("/my-posts");
      return;
    }
    this.post = { ...foundPost };
  },
  methods: {
    updatePost() {
      let posts = JSON.parse(localStorage.getItem("posts") || "[]");
      const index = posts.findIndex((p) => p.id === this.post.id);
      if (index !== -1) {
        posts[index] = this.post;
        localStorage.setItem("posts", JSON.stringify(posts));
        alert("Cập nhật thành công!");
        this.$router.push("/my-posts");
      }
    },
  },
};
</script>
