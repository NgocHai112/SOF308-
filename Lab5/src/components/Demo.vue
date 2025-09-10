<template>
  <div class="container-fluid px-0">
    <div class="row text-white mb-3">
      <div
        :class="`col-12 col-md-${colLeft}`"
        :style="{ backgroundColor: leftColor, minHeight: '100px' }"
      ></div>
      <div
        :class="`col-12 col-md-${colRight}`"
        :style="{ backgroundColor: rightColor, minHeight: '100px' }"
      ></div>
    </div>

    <div class="px-4">
      <div class="mb-2">
        <label for="colInput">Cột trái (1–11):</label>
        <input
          id="colInput"
          type="number"
          v-model.number="Col1"
          min="1"
          max="11"
          class="form-control w-25 d-inline-block"
        />
      </div>

      <div class="mb-2">
        <label for="leftColor">Màu cột trái:</label>
        <input
          id="leftColor"
          type="text"
          v-model="leftColor"
          class="form-control w-25 d-inline-block"
        />
      </div>

      <div>
        <label for="rightColor">Màu cột phải:</label>
        <input
          id="rightColor"
          type="text"
          v-model="rightColor"
          class="form-control w-25 d-inline-block"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Biến reactive
const Col1 = ref(6);
const leftColor = ref("red");
const rightColor = ref("blue");

// Tính toán số cột hợp lệ trái/phải cho màn hình md+
const colLeft = computed(() => {
  return isValid.value ? Col1.value : 6;
});
const colRight = computed(() => {
  return isValid.value ? 12 - Col1.value : 6;
});

// Kiểm tra Col1 hợp lệ (1–11)
const isValid = computed(() => {
  return Number.isInteger(Col1.value) && Col1.value >= 1 && Col1.value <= 11;
});
</script>

<style scoped>
body {
  margin: 0;
}
</style>
