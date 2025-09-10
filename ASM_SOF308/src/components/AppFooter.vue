<template>
  <footer class="bg-body-tertiary border-top mt-5" role="contentinfo">
    <div class="container py-4">
      <div class="row g-4">
        <!-- Brand + intro -->
        <div class="col-12 col-md-4">
          <router-link
            to="/"
            class="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <!-- <img
              :src="asset('/public/images/avatar.png')"
              alt="Logo VueBlog"
              width="36"
              height="36"
              class="me-2"
            /> -->
            <span class="fw-bold">{{ siteName }}</span>
          </router-link>
          <p class="text-secondary small mt-2 mb-0">
            Blog chia sẻ kiến thức lập trình & công nghệ.
          </p>
          <address class="text-secondary small mt-2 mb-0">
            <span class="d-block">123 Đường ABC, Q.1, TP.HCM</span>
            <a href="tel:+84000000000" class="d-block link-secondary"
              >+84 000 000 000</a
            >
            <a href="mailto:contact@example.com" class="d-block link-secondary"
              >contact@example.com</a
            >
          </address>
        </div>

        <!-- Quick links -->
        <div class="col-6 col-md-2">
          <h6 class="text-uppercase small fw-bold mb-3">Liên kết</h6>
          <ul class="list-unstyled">
            <li>
              <router-link to="/" class="link-secondary text-decoration-none"
                >Trang chủ</router-link
              >
            </li>
            <li>
              <router-link
                to="/login"
                class="link-secondary text-decoration-none"
                >Đăng nhập</router-link
              >
            </li>
            <li>
              <router-link
                to="/register"
                class="link-secondary text-decoration-none"
                >Đăng ký</router-link
              >
            </li>
            <li v-if="isAdmin">
              <router-link
                to="/users"
                class="link-secondary text-decoration-none"
                >Quản lý user</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Policies -->
        <div class="col-6 col-md-3">
          <h6 class="text-uppercase small fw-bold mb-3">Chính sách</h6>
          <ul class="list-unstyled">
            <li>
              <router-link
                to="/about"
                class="link-secondary text-decoration-none"
                >Giới thiệu</router-link
              >
            </li>
            <li>
              <router-link
                to="/privacy"
                class="link-secondary text-decoration-none"
                >Bảo mật</router-link
              >
            </li>
            <li>
              <router-link
                to="/terms"
                class="link-secondary text-decoration-none"
                >Điều khoản</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div class="col-12 col-md-3">
          <h6 class="text-uppercase small fw-bold mb-3">Kết nối</h6>
          <div class="d-flex gap-3">
            <a
              href="https://facebook.com/yourpage"
              aria-label="Facebook"
              class="link-secondary"
              rel="me noopener"
              target="_blank"
              ><i class="bi bi-facebook fs-4"></i
            ></a>
            <a
              href="https://x.com/yourpage"
              aria-label="X/Twitter"
              class="link-secondary"
              rel="me noopener"
              target="_blank"
              ><i class="bi bi-twitter-x fs-4"></i
            ></a>
            <a
              href="https://github.com/yourorg"
              aria-label="GitHub"
              class="link-secondary"
              rel="me noopener"
              target="_blank"
              ><i class="bi bi-github fs-4"></i
            ></a>
          </div>
        </div>
      </div>

      <hr class="my-4" />

      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary"
      >
        <div>© {{ year }} {{ siteName }}. All rights reserved.</div>
        <nav aria-label="Footer" class="mt-2 mt-md-0">
          <ul class="nav gap-3">
            <li class="nav-item">
              <router-link to="/sitemap" class="nav-link p-0 link-secondary"
                >Sitemap</router-link
              >
            </li>
            <li class="nav-item">
              <a
                :href="rssUrl"
                class="nav-link p-0 link-secondary"
                rel="alternate"
                type="application/rss+xml"
                >RSS</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    year() {
      return new Date().getFullYear();
    },
    siteName() {
      return "VueBlog";
    },
    isAdmin() {
      try {
        const u = JSON.parse(localStorage.getItem("currentUser"));
        return u && u.role === "admin";
      } catch {
        return false;
      }
    },
    rssUrl() {
      return `${import.meta.env.BASE_URL}rss.xml`;
    }, // nếu có RSS
  },
};
</script>
