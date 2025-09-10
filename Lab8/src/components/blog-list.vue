<template>
  <div class="container mt-4">
    <h2>Danh sách bài viết</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="id in 3" :key="id">
        <router-link :to="{ name: 'BlogPost', params: { id } }"
          >Bài viết #{{ id }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogList",
};
</script>
