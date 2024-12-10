<template>
  <div :class="style">
    <div
      class="display-header py-4 px-6"
      :class="isPage ? containerStyles : ''"
    >
      <div class="md:h-12">
        <h3 class="text-lg">
          <u-link :to="room.link"
            >{{ room.name }}
            <lf-icon name="i-ion-leaf-outline" class="ml-2"></lf-icon>
          </u-link>
        </h3>
        <div class="md:flex justify-between items-center">
          <div>
            <span class="text-sm">From</span>
            {{ numberFormatter.formatCurrency(room.price) }}
            <span class="text-sm">per single per night</span>
          </div>
          <div class="lg:flex items-center md:visible hidden">
            <div>
              <UTooltip :text="`Sleeps 1 to ${room.capacity} persons`">
                <lf-icon name="i-ion-person" class="mr-2"></lf-icon>
                1 - {{ room.capacity }}
              </UTooltip>
            </div>
            <lf-book-btn v-if="showHeaderBook" class="ml-2"></lf-book-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="display-image" :class="showHeaderBook ? 'mt-3' : ''">
      <u-link v-if="!hideLink && !hideBanner" :to="room.link">
        <img width="100%" :src="room.banner" :alt="room.name" />
      </u-link>
      <img v-else-if="!hideBanner" :src="room.banner" :alt="room.name" />
      <lf-carousel
        v-if="room.gallery && !hideGallery"
        :images="room.gallery"
        :full-image="!isPage"
      ></lf-carousel>
    </div>
    <div class="display-body py-4 px-6" :class="isPage ? containerStyles : ''">
      <div class="my-2">
        {{ room.description }}
        <u-link v-if="hideFeatures" :to="room.link">
          <lf-icon
            name="arrow-forward-circle-outline"
            title="Read more"
          ></lf-icon>
        </u-link>
      </div>
      <ul v-if="!hideFeatures" class="md:columns-2 list-disc">
        <li class="mb-2 ml-4" v-for="feature in room.features">
          {{ feature }}
        </li>
      </ul>
    </div>

    <div
      class="display-footer py-4 px-6"
      :class="isPage ? containerStyles : ''"
    >
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
import type { IRoom } from "~/types/IRoom";

const props = defineProps<{
  room: IRoom;
  hideGallery?: boolean;
  hideBanner?: boolean;
  hideLink?: boolean;
  hideFeatures?: boolean;
  showHeaderBook?: boolean;
  isPage?: boolean;
}>();

const containerStyles = "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-4";

const style = computed(() =>
  props.isPage
    ? ""
    : "display-area rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900"
);
</script>
