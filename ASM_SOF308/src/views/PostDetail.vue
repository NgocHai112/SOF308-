<template>
  <div class="container mt-4" v-if="post">
    <div class="card border-0 shadow-sm">
      <div class="card-body">
        <h2 class="card-title fw-bold mb-2">{{ post.title }}</h2>
        <div class="text-muted small mb-2">
          <i class="bi bi-person-circle me-1"></i> {{ post.userId }} |
          <i class="bi bi-calendar3 me-1"></i>
          {{ new Date(post.createdDate).toLocaleString() }}
        </div>

        <img
          v-if="post.image"
          :src="post.image"
          class="img-fluid rounded mb-3"
          alt="Ảnh bài viết"
        />

        <p class="card-text fs-6 mt-3">{{ post.content }}</p>

        <div class="d-flex align-items-center gap-3 mt-4">
          <button class="btn btn-outline-danger btn-sm" @click="toggleLike">
            <i class="bi" :class="liked ? 'bi-heart-fill' : 'bi-heart'"></i>
            {{ post.likes || 0 }}
          </button>
          <span class="text-muted small">
            <i class="bi bi-eye-fill me-1"></i>{{ post.views || 0 }} lượt xem
          </span>
          <span class="text-muted small">
            <i class="bi bi-chat-dots-fill me-1"></i
            >{{ post.comments || 0 }} bình luận
          </span>
        </div>
      </div>
    </div>

    <!-- Bình luận -->
    <div class="mt-5">
      <h4 class="fw-semibold mb-3">
        <i class="bi bi-chat-left-text me-2"></i>Bình luận
      </h4>

      <div v-if="comments.length === 0" class="alert alert-secondary">
        Chưa có bình luận nào.
      </div>

      <ul class="list-group mb-4">
        <li
          v-for="(cmt, index) in comments"
          :key="index"
          class="list-group-item d-flex flex-column"
        >
          <div class="fw-bold">
            {{ cmt.name }}
            <span class="text-muted small">({{ cmt.date }})</span>
          </div>
          <div>{{ cmt.text }}</div>
        </li>
      </ul>

      <div v-if="currentUser">
        <textarea
          v-model="commentText"
          class="form-control mb-2"
          rows="3"
          placeholder="Viết bình luận..."
        ></textarea>
        <button class="btn btn-primary btn-sm" @click="addComment">
          <i class="bi bi-send me-1"></i> Gửi bình luận
        </button>
      </div>
      <div v-else>
        <div class="alert alert-info">
          Bạn cần <router-link to="/login">đăng nhập</router-link> để bình luận.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
      comments: [],
      commentText: "",
      currentUser: JSON.parse(localStorage.getItem("currentUser")),
      liked: false,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const target = posts.find((p) => p.id == id);

    if (target) {
      target.views = (target.views || 0) + 1; // tăng view
      this.post = target;

      const index = posts.findIndex((p) => p.id == id);
      posts[index] = target;
      localStorage.setItem("posts", JSON.stringify(posts));
    }

    const allComments = JSON.parse(localStorage.getItem("comments") || "{}");
    this.comments = allComments[id] || [];
  },
  methods: {
    addComment() {
      if (!this.commentText.trim()) return;

      const newComment = {
        name: this.currentUser.name,
        text: this.commentText,
        date: new Date().toLocaleString(),
      };

      this.comments.push(newComment);

      const allComments = JSON.parse(localStorage.getItem("comments") || "{}");
      allComments[this.post.id] = this.comments;
      localStorage.setItem("comments", JSON.stringify(allComments));

      this.post.comments = this.comments.length;
      this.updatePostInStorage();

      this.commentText = "";
    },

    toggleLike() {
      if (this.liked) {
        this.post.likes = Math.max((this.post.likes || 1) - 1, 0);
      } else {
        this.post.likes = (this.post.likes || 0) + 1;
      }
      this.liked = !this.liked;
      this.updatePostInStorage();
    },

    updatePostInStorage() {
      const posts = JSON.parse(localStorage.getItem("posts") || "[]");
      const index = posts.findIndex((p) => p.id === this.post.id);
      if (index !== -1) {
        posts[index] = this.post;
        localStorage.setItem("posts", JSON.stringify(posts));
      }
    },
  },
};
</script>
