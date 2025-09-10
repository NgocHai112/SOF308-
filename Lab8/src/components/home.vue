<template>
  <div class="container mt-4">
    <h1 class="mb-3">Chào mừng đến với MyBlog</h1>
    <router-link class="btn btn-primary me-2" to="/blog"
      >Xem bài viết</router-link
    >
    <router-link class="btn btn-info" to="/me/info"
      >Thông tin cá nhân</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
