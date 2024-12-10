<script setup lang="ts">
const props = defineProps<{
  images: IGalleryItem[];
  fullImage?: boolean;
  autoPlay?: boolean;
}>();

const carouselRef = ref();

const fullScreenMode = ref(false);

const imageSpecs = computed(() => {
  return fullScreenMode.value || props.fullImage
    ? "basis-full"
    : "basis-full md:basis-1/2 lg:basis-1/3";
});

onMounted(() => {
  if (props.autoPlay) {
    setInterval(() => {
      if (!carouselRef.value) return;

      if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0);
      }

      carouselRef.value.next();
    }, 4000);
  }
});
</script>

<template>
  <div :class="fullScreenMode ? 'fullscreen-mode' : ''">
    <UCarousel
      ref="carouselRef"
      v-slot="{ item, index }"
      :items="images"
      :ui="{ item: imageSpecs }"
      :arrows="images.length > 3"
    >
      <u-button
        v-if="fullScreenMode"
        icon="i-ion-close"
        @click="fullScreenMode = false"
        class="close-btn"
        variant="ghost"
      ></u-button>
      <div @click="fullScreenMode = !fullScreenMode" class="image-area">
        <img :src="item.img" :alt="item.title || item.img" draggable="false" />
      </div>
    </UCarousel>
  </div>
</template>

<style lang="scss" scoped>
.slide-text {
  position: absolute;
  z-index: 999;
  display: inline-block;
  top: 6rem;
  width: 33%;
  h3 {
    background: rgba(31, 166, 122, 0.7);
    font-size: 1.5rem;
    padding: 1rem;
    display: inline-block;
    font-weight: 300;
  }
  p {
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    font-weight: 300;
  }
}
.fullscreen-mode {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  background: black;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-area {
  cursor: pointer;
  margin: 0 auto;
}
.close-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
}
</style>
