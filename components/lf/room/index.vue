<template>
  <div
    class="display-area rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900"
  >
    <div class="display-header py-4 px-6">
      <div class="h-12">
        <h3 class="text-lg">
          <u-link :to="room.link" class="text-primary"
            >{{ room.name }} <lf-icon name="leaf-outline ml-2"></lf-icon
          ></u-link>
        </h3>
        <div>
          <span class="text-sm">From</span>
          {{ numberFormatter.formatCurrency(room.price) }}
          <span class="text-sm">per single per night</span>
        </div>
      </div>
    </div>
    <div class="display-image">
      <u-link v-if="!hideLink && !hideBanner" :to="room.link">
        <img width="100%" :src="room.banner" :alt="room.name" />
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
    </div>
    <div class="display-body py-4 px-6">
      <div class="my-2">
        {{ room.description }}
      </div>
      <ul>
        <li class="mb-2" v-for="feature in room.features">
          {{ feature }}
        </li>
      </ul>
    </div>

    <div class="display-footer py-4 px-6">
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
    </div>
  </div>
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
