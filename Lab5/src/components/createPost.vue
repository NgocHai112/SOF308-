<template>
  <div>
    <h2>Tạo bài viết mới</h2>
    <input v-model="title" placeholder="Tiêu đề bài viết" />
    <input v-model="author" placeholder="Tên tác giả" />
    <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>
    <button @click="submitPost">Đăng bài</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
// Gửi dữ liệu bài viết ra ngoài component
const emit = defineEmits(["add-post"]);
const title = ref("");
const content = ref("");
const author = ref("");

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
      backgroundColor: "#fff",
      textColor: "#000",
    };
    // Emit the new post to the parent component
    emit("add-post", newPost);
    // Reset form
    title.value = "";
    content.value = "";
    author.value = "";
  }
}
</script>

<style scoped>
input,
textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  /* font-size: 14px; */
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* margin-top: 10px; */
}
</style>
