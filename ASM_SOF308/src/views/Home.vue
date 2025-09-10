<template>
  <Carousel />
  <div class="container mt-4">
    <h2 class="mb-4 fw-bold">
      <i class="bi bi-journal-text me-2"></i>Danh sách bài viết
    </h2>

    <div v-if="posts.length === 0" class="alert alert-warning text-center">
      Chưa có bài viết nào.
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" v-for="post in posts" :key="post.id">
        <div class="card h-100 shadow-sm border-0">
          <div class="ratio ratio-16x9 rounded-top overflow-hidden">
            <img
              :src="post.image || '../images/19.jpg'"
              class="w-100 h-100 img-cover"
              loading="lazy"
              @error="(e) => (e.target.src = '../images/19.jpg')"
              alt="Bìa bài viết"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title fw-semibold">{{ post.title }}</h5>
            <p class="text-muted small mb-1">Tác giả: {{ post.userId }}</p>
            <p class="card-text">{{ post.content.slice(0, 100) }}...</p>
            <div class="icon-bar mt-2">
              <span
                ><i class="bi bi-heart-fill"></i> {{ post.likes || 0 }}</span
              >
              <span><i class="bi bi-eye-fill"></i> {{ post.views || 0 }}</span>
              <span
                ><i class="bi bi-chat-dots-fill"></i>
                {{ post.comments || 0 }}</span
              >
            </div>
            <router-link
              :to="'/post/' + post.id"
              class="btn btn-outline-primary btn-sm mt-3"
            >
              <i class="bi bi-arrow-right-circle"></i> Đọc thêm
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
export default {
  components: { Carousel },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    const cached = JSON.parse(localStorage.getItem("posts") || "[]");
    if (cached.length) {
      this.posts = cached.slice().reverse();
      return;
    }

    fetch("/data.json")
      .then((r) => r.json())
      .then((data) => {
        // data có thể là mảng posts hoặc object { posts: [...] }
        const raw = Array.isArray(data) ? data : data.posts || [];
        const normalized = raw.map((p) => ({
          id: p.id ?? Date.now(),
          title: p.title ?? "",
          content: p.content ?? "",
          image: p.image ?? "", // chấp nhận URL hoặc base64
          userId: p.userId ?? "seed@local",
          likes: Number(p.likes || 0),
          views: Number(p.views || 0),
          comments: Number(p.comments || 0),
          createdDate: p.createdDate ?? new Date().toISOString(),
        }));

        localStorage.setItem("posts", JSON.stringify(normalized));
        this.posts = normalized.slice().reverse();
      })
      .catch((err) => {
        console.error("Load data.json lỗi:", err);
        this.posts = []; // fallback
      });
  },
};
</script>

<style scoped>
.card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease;
  background-color: #f9f9f9; /* nền xám nhạt hơn */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.2rem;
  color: #444; /* xám đậm */
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.95rem;
  color: #666; /* xám trung bình */
}

.text-muted {
  color: #999 !important; /* xám nhạt */
}

.btn-outline-primary {
  border-color: #aaa;
  color: #555;
}

.btn-outline-primary:hover {
  background-color: #aaa;
  color: white;
}

.icon-bar {
  font-size: 0.85rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  color: #888; /* xám nhạt */
}

.icon-bar i {
  margin-right: 0.25rem;
}
</style>
