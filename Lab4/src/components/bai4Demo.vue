<template>
  <div class="container mt-5">
    <h1>Kiến thức sức khoẻ cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mt-4" v-for="(item, index) in items" :key="index">
        <div class="card h-100">
          <img :src="item.image" alt="Hình ảnh" />
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info" @click="showMe(index)">
              Xem chi tiết
            </button>
            <p
              class="card-text"
              v-show="item.trangThai"
              v-html="item.contentChiTiet"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import img1 from "../assets/images/sesameoil_300x300.jpg";
import img2 from "../assets/images/spinach_300x300.jpg";
import img3 from "../assets/images/orange_300x300.jpg";

const items = ref([
  {
    title: "8 loại rau củ quả giàu canxi",
    content:
      "Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...",
    contentChiTiet: "Chi tiết: Canxi giúp xương chắc khỏe.",
    trangThai: false,
    image: img1,
  },
  {
    title: "Các loại gia vị tốt cho sức khỏe",
    content:
      "Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại quen thuộc...",
    contentChiTiet: "Chi tiết: Nghệ, tỏi, gừng rất tốt cho sức khoẻ.",
    trangThai: false,
    image: img2,
  },
  {
    title: "9 loại đậu bổ dưỡng nên dùng nhiều",
    content:
      "Đậu lăng, đậu nành, đậu phộng... giúp giảm lượng đường, tốt cho tim mạch.",
    contentChiTiet: "Chi tiết: Đậu rất giàu chất xơ, protein, ít béo.",
    trangThai: false,
    image: img3,
  },
  {
    title: "Các loại gia vị tốt cho sức khỏe",
    content:
      "Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại quen thuộc...",
    contentChiTiet: "Chi tiết: Nghệ, tỏi, gừng rất tốt cho sức khoẻ.",
    trangThai: false,
    image: img2,
  },
  {
    title: "9 loại đậu bổ dưỡng nên dùng nhiều",
    content:
      "Đậu lăng, đậu nành, đậu phộng... giúp giảm lượng đường, tốt cho tim mạch.",
    contentChiTiet: "Chi tiết: Đậu rất giàu chất xơ, protein, ít béo.",
    trangThai: false,
    image: img3,
  },
  {
    title: "9 loại đậu bổ dưỡng nên dùng nhiều",
    content:
      "Đậu lăng, đậu nành, đậu phộng... giúp giảm lượng đường, tốt cho tim mạch.",
    contentChiTiet: "Chi tiết: Đậu rất giàu chất xơ, protein, ít béo.",
    trangThai: false,
    image: img3,
  },
]);

function showMe(index) {
  items.value.forEach((item, i) => {
    item.trangThai = i === index ? !item.trangThai : false;
  });
}
</script>
