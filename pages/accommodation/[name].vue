<script setup lang="ts">
const { rooms } = useRooms()
const route = useRoute()
</script>

<template>
  <lf-content>
    <section>
      <lf-room
        class="mt-4"
        :room="rooms[route.path.replace('/accommodation/', '')]"
        hide-banner
        hide-link
        show-header-book
      ></lf-room>
    </section>
    <div class="mt-8 mb-4">
      <div>
        <h3 class="mb-2 mt-2">Our Rooms</h3>
        <lf-rooms-list is-thumbnail-view></lf-rooms-list>
      </div>
    </div>
    <section class="mt-4">
      <lf-widgets :hide-rates="true" :hide-rooms="true"></lf-widgets>
    </section>
  </lf-content>
</template>
