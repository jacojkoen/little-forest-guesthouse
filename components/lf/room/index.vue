<template>
  <UCard>
    <template #header>
      <div class="h-12">
        <h3 class="text-lg">
          <u-link :to="room.link">{{ room.name }}</u-link>
        </h3>
        <div>
          <span class="text-sm">From</span>
          {{ numberFormatter.formatCurrency(room.price) }}
          <span class="text-sm">per single per night</span>
        </div>
      </div>
    </template>

    <div>
      <u-link v-if="!hideLink && !hideBanner" :to="room.link">
        <img :src="room.banner" :alt="room.name" />
      </u-link>
      <img v-else-if="!hideBanner" :src="room.banner" :alt="room.name" />
      <UCarousel
        v-if="room.gallery && !hideGallery"
        ref="carouselRef"
        v-slot="{ item }"
        :items="room.gallery"
        :ui="{ item: 'basis-full' }"
        indicators
      >
        <img
          :src="item"
          :alt="
            item.replace(
              'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/',
              '',
            )
          "
          class="w-full"
          draggable="false"
        />
      </UCarousel>
      <div class="my-2">
        {{ room.description }}
      </div>
      <ul>
        <li class="mb-2" v-for="feature in room.features">
          {{ feature }}
        </li>
      </ul>
    </div>

    <template #footer>
      <div class="flex justify-between items-center h8">
        <UButton
          v-if="!hideLink"
          color="primary"
          variant="solid"
          :to="room.link"
          icon="i-ion-leaf-outline"
        >
          View room
        </UButton>
        <lf-book-btn></lf-book-btn>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { IRoom } from '~/types/IRoom'

const props = defineProps<{
  room: IRoom
  hideGallery?: boolean
  hideBanner?: boolean
  hideLink?: boolean
}>()

const carouselRef = ref()
</script>
