<template>
  <div class="container">
    <input
      v-model="userInput"
      placeholder="Nhập dữ liệu vào đây"
      class="input"
    />
    <p class="output">Giá trị bạn nhập: {{ userInput }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const userInput = ref("FPL");
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin-bottom: 10px;
}

.output {
  font-size: 16px;
  color: #333;
}
</style>
