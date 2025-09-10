<template>
  <div class="container mt-5" style="max-width: 700px;">
    <div class="card shadow-sm border-0">
      <div class="card-body p-4">
        <h2 class="text-center mb-4 fw-bold">
          <i class="bi bi-pencil-square me-2"></i>Đăng bài viết mới
        </h2>

        <form @submit.prevent="submitPost">
          <div class="mb-3">
            <label class="form-label">Tiêu đề bài viết</label>
            <input
              v-model="title"
              class="form-control"
              required
              placeholder="Nhập tiêu đề hấp dẫn..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Nội dung</label>
            <textarea
              v-model="content"
              class="form-control"
              rows="7"
              required
              placeholder="Viết nội dung tại đây..."
            ></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label">Ảnh minh họa</label>
            <input
              type="file"
              class="form-control"
              accept="image/*"
              @change="handleImageUpload"
            />
            <div v-if="imagePreview" class="mt-3 text-center">
              <img :src="imagePreview" alt="Preview" class="img-fluid rounded" style="max-height: 300px;" />
            </div>
          </div>

          <button class="btn btn-primary w-100">
            <i class="bi bi-send me-1"></i> Đăng bài
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
      title: '',
      content: '',
      image: '', // base64
      imagePreview: ''
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result;
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    },

    submitPost() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (!currentUser) {
        alert("Bạn cần đăng nhập để đăng bài.");
        this.$router.push('/login');
        return;
      }

      const posts = JSON.parse(localStorage.getItem('posts') || '[]');
      const newPost = {
        id: Date.now(),
        userId: currentUser.email,
        title: this.title,
        content: this.content,
        image: this.image || '',
        likes: 0,
        views: 0,
        comments: 0,
        createdDate: new Date().toISOString()
      };

      posts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(posts));

      alert("Đăng bài thành công!");
      this.$router.push('/');
    }
  }
};
</script>
