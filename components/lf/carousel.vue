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
        <h3 v-if="item.title">{{ item.title }}</h3>
        <p v-if="item.text">{{ item.text }}</p>
      </div>
      <img :src="item.img" :alt="item.title || item.img" draggable="false" />
    </div>
  </UCarousel>
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
</style>
