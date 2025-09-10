<template>
  <section class="container py-2">
    <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          v-for="(s, i) in slides"
          :key="i"
          type="button"
          data-bs-target="#homeCarousel"
          :data-bs-slide-to="i"
          :class="{ active: i === 0 }"
          :aria-current="i === 0 ? 'true' : null"
          :aria-label="`Slide ${i + 1}`"
        ></button>
      </div>

      <div class="carousel-inner">
        <div
          v-for="(s, i) in slides"
          :key="s"
          class="carousel-item"
          :class="{ active: i === 0 }"
        >
          <img
            :src="asset(s.src || s)"
            class="d-block w-100"
            :alt="s.alt || `Banner ${i + 1}`"
          />
          <div v-if="s.caption" class="carousel-caption d-none d-md-block">
            <h5>{{ s.caption.title }}</h5>
            <p>{{ s.caption.text }}</p>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CarouselHero",
  props: {
    // nhận mảng string hoặc object { src, alt?, caption? }
    slides: {
      type: Array,
      default: () => [
        "/images/banner1.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
      ],
    },
  },
  methods: {
    asset(p) {
      const base = import.meta.env.BASE_URL || "/";
      return p.startsWith("/") ? base + p.slice(1) : base + p;
    },
  },
};
</script>
