<template>
  <div class="container mt-4">
    <h2>Thông tin người dùng</h2>
    <router-link to="info" class="btn btn-outline-info me-2"
      >Thông tin</router-link
    >
    <router-link to="settings" class="btn btn-outline-warning"
      >Cài đặt</router-link
    >
    <router-view class="mt-3" />
  </div>
</template>

<script>
export default {
  name: "UserProfile",
};
</script>
