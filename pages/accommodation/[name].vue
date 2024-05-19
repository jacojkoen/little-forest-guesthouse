<script setup lang="ts">
const { rooms } = useRooms()
const route = useRoute()
</script>

<template>
  <section>
    <lf-room
      class="mt-4"
      :room="rooms[route.path.replace('/accommodation/', '')]"
      hide-banner
      hide-link
      show-header-book
      is-page
    ></lf-room>
  </section>
  <u-container class="mt-8 mb-4">
    <h3 class="mb-2 mt-2">Our Rooms</h3>
    <lf-rooms-list is-thumbnail-view></lf-rooms-list>
  </u-container>
  <u-container class="mt-4">
    <lf-widgets hide-rates hide-rooms></lf-widgets>
  </u-container>
</template>
