<template>
  <div class="p-5">
    <p>{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">
      Thay đổi thông điệp
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Thông điệp ban đầu");

const updateMessage = () => {
  message.value = "Thông điệp đã được thay đổi!";
};
</script>
<style scoped>
.p-5 {
  padding: 2rem;
}
.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
