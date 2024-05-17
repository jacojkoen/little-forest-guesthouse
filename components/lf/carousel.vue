<script setup lang="ts">
defineProps<{
  images: IGalleryItem[]
}>()

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 4000)
})
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item, index }"
    :items="images"
    :ui="{ item: 'w-full' }"
    indicators
  >
    <div>
      <div v-if="item.title || item.text" class="slide-text">
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </div>
      <img :src="item.img" :alt="item.title || item.img" draggable="false" />
    </div>
  </UCarousel>
</template>

<style lang="scss" scoped>
.slide-text {
  margin-bottom: -220px;
  position: relative;
  z-index: 999;
  margin-top: 6rem;
  h3 {
    background: rgba(31, 166, 122, 0.7);
    font-size: 1.5rem;
    padding: 1rem;
    display: inline-block;
  }
  p {
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    font-weight: 500;
  }
}
</style>
