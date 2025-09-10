<template>
  <div>
    <login v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />

    <comment v-else :username="loggedInUser" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import login from "../components/login.vue";
import comment from "../components/comment.vue";

const isLoggedIn = ref(false);
const loggedInUser = ref("");

function handleLoginSuccess(username) {
  loggedInUser.value = username;
  isLoggedIn.value = true;
}
</script>
