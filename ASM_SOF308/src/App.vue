<template>
  <div>
    <Navbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import AppFooter from "./components/AppFooter.vue";
export default { components: { Navbar, AppFooter } };
</script>
