<template>
  <div id="app">
    <!-- BÀI 1: Thay đổi thông điệp khi nhấn nút -->

    <Bai1 />

    <!-- BÀI 2: Nhập và hiển thị giá trị bằng v-model -->

    <Bai2 />

    <!-- BÀI 3: Nhập và hiển thị thông tin cá nhân -->

    <Bai3 />

    <!-- BÀI 4: Tạo và hiển thị danh sách bài viết -->
    <h1>Ứng dụng Blog nhỏ với Vue.js</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />

    <Demo></Demo>
  </div>
</template>

<script setup>
import { ref } from "vue";

// BÀI 1: Component hiển thị thông điệp khi nhấn nút
import Bai1 from "./components/bai1.vue";

// BÀI 2: Component nhập input và hiển thị trực tiếp
import Bai2 from "./components/bai2.vue";

// BÀI 3: Component nhập họ tên, tuổi, email
import Bai3 from "./components/bai3.vue";

// BÀI 4: Component tạo và hiển thị bài viết
import CreatePost from "./components/createPost.vue";
import PostList from "./components/postList.vue";

import Demo from "./components/Demo.vue";

// Dùng cho Bài 4: danh sách bài viết
const posts = ref([]);

function addPost(post) {
  posts.value.push(post);
}
</script>

<style scoped>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}
</style>
