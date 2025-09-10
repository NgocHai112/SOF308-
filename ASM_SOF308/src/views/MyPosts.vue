<template>
  <div class="container mt-5">
    <h2 class="fw-bold mb-4"><i class="bi bi-file-earmark-text me-2"></i>Bài viết của tôi</h2>

    <div v-if="myPosts.length === 0" class="alert alert-warning">
      Bạn chưa có bài viết nào.
    </div>

    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="post in myPosts" :key="post.id">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ post.title }}</h5>
            <p class="card-text text-muted small mb-2">
              <i class="bi bi-clock me-1"></i>{{ new Date(post.createdDate).toLocaleString() }}
            </p>
            <p class="card-text">{{ post.content.slice(0, 100) }}...</p>
            <div class="d-flex justify-content-between">
              <router-link :to="'/edit-post/' + post.id" class="btn btn-outline-primary btn-sm">
                <i class="bi bi-pencil-square me-1"></i>Sửa
              </router-link>
              <button class="btn btn-outline-danger btn-sm" @click="deletePost(post.id)">
                <i class="bi bi-trash me-1"></i>Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      myPosts: []
    };
  },
  mounted() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.myPosts = posts.filter(p => p.userId === currentUser.email);
  },
  methods: {
    deletePost(id) {
      if (!confirm('Bạn có chắc chắn muốn xóa bài viết này?')) return;

      let posts = JSON.parse(localStorage.getItem('posts') || '[]');
      posts = posts.filter(p => p.id !== id);
      localStorage.setItem('posts', JSON.stringify(posts));
      this.myPosts = posts.filter(p => p.userId === JSON.parse(localStorage.getItem('currentUser')).email);
    }
  }
};
</script>
