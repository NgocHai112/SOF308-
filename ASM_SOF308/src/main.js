import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { ensureSeedUsers } from "./seed.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
ensureSeedUsers();

const app = createApp(App);

app.use(router);
app.mount("#app");
