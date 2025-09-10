<template>
  <div class="row justify-content-around">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h1 class="text-center text-primary mb-5">Bài tập Lab 6</h1>

        <!-- Bài 1 -->
        <section class="mb-5">
          <div class="card shadow">
            <div class="card-header bg-info text-white fw-bold">
              Bài 1 – Xếp loại học lực
            </div>
            <div class="card-body">
              <Bai1 />
            </div>
          </div>
        </section>

        <!-- Bài 2 -->
        <section class="mb-5">
          <div class="card shadow">
            <div class="card-header bg-success text-white fw-bold">
              Bài 2 – Xác định mùa theo tháng
            </div>
            <div class="card-body">
              <Bai2 />
            </div>
          </div>
        </section>

        <!-- Bài 3 -->
        <section class="mb-5">
          <div class="card shadow">
            <div class="card-header bg-warning text-dark fw-bold">
              Bài 3 – Kiến thức sức khỏe cộng đồng
            </div>
            <div class="card-body">
              <Bai3 />
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Bài 4: Full width -->
    <section class="mt-6">
      <div class="card shadow w-100">
        <div class="card-header bg-primary text-white fw-bold text-center">
          Bài 4 – Quản lý học sinh (Thêm, sửa, xóa)
        </div>
        <div class="card-body">
          <Bai4 />
        </div>
      </div>
    </section>

    <!-- Demo -->
    <!-- <Demo /> -->
  </div>
</template>

<script setup>
import Bai1 from "./components/bai1.vue";
import Bai2 from "./components/bai2.vue";
import Bai3 from "./components/bai3.vue";
import Bai4 from "./components/bai4.vue";
import Demo from "./components/Demo.vue";
</script>
