import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// (Tuỳ chọn) CSS riêng của bạn
import "./assets/style.css";

// Vue Router
import router from "./router/index.js";

// Tạo & mount app
createApp(App).use(router).mount("#app");
