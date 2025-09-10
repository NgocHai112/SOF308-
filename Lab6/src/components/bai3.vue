<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card h-100 shadow-sm">
          <img :src="item.image" class="card-img-top" alt="Hình ảnh" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>

            <!-- Nút có icon Font Awesome -->
            <button class="btn btn-info mt-auto">
              <i class="fas fa-eye"></i> Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import hình ảnh từ thư mục assets
import img1 from "../assets/icons/avatar.png";
import img2 from "../assets/icons/avatar.png";
import img3 from "../assets/icons/avatar.png";

const items = [
  {
    title: "8 loại rau củ quả giàu canxi",
    content: "Canxi là...",
    image: img1,
  },
  {
    title: "Các loại gia vị tốt cho sức khỏe",
    content: "Một số loại...",
    image: img2,
  },
  {
    title: "9 loại đậu bổ dưỡng nên dùng nhiều",
    content: "Đậu lăng...",
    image: img3,
  },
];
</script>
