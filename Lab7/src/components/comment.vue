<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="mb-4">🗨️ Bình luận bài viết</h2>

        <div class="card mb-4">
          <img
            src="../assets/icons/orange_300x300.jpg"
            alt="Ảnh bài viết"
            class="card-img-top"
            style="height: 400px; object-fit: cover"
          />
          <div class="card-body">
            <h4 class="card-title">8 loại rau củ quả giàu canxi</h4>
            <p class="card-text">
              Canxi là một khoáng chất thiết yếu cho cơ thể, đặc biệt là đối với
              sự phát triển của xương và răng. Có nhiều cách để bổ sung canxi
              vào chế độ ăn uống hàng ngày, trong đó rau củ quả là một nguồn
              cung cấp canxi phong phú. Dưới đây là 8 loại rau củ quả giàu
              canxi...
            </p>
          </div>
        </div>

        <form @submit.prevent="submitComment" class="mb-4">
          <div class="mb-3">
            <label for="commentText" class="form-label">Bình luận</label>
            <textarea
              id="commentText"
              class="form-control"
              rows="4"
              v-model="commentText"
              placeholder="Nhập bình luận của bạn"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-success">Gửi bình luận</button>
        </form>

        <div v-if="comments.length">
          <h5 class="mb-3">📃 Danh sách các bình luận:</h5>
          <ul class="list-group">
            <li
              v-for="(comment, index) in comments"
              :key="index"
              class="list-group-item"
            >
              <strong>{{ comment.name }}:</strong> {{ comment.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["username"]);
const commentText = ref("");
const comments = ref([]);

function submitComment() {
  if (commentText.value.trim()) {
    comments.value.push({
      name: props.username,
      text: commentText.value.trim(),
    });
    commentText.value = "";
  }
}
</script>
