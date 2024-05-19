<template>
  <div
    :class="
      isThumbnailView ? 'md:grid md:grid-cols-5 md:gap-3' : 'flex text-sm'
    "
  >
    <u-link
      v-for="room in rooms"
      :to="room.link"
      :title="'Go to ' + room.name"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      <h4 class="mb-1">{{ room.name }}</h4>
      <div v-if="isThumbnailView">
        <img :src="room.banner" :alt="room.name" :title="room.name" />
      </div>
    </u-link>
  </div>
</template>

<script setup lang="ts">
const { rooms } = useRooms()
defineProps<{
  isThumbnailView?: boolean
}>()
</script>
