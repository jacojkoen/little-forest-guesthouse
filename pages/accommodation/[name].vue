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
        :hide-banner="true"
        :hide-link="true"
      ></lf-room>
    </section>
    <div class="mt-8 mb-4">
      <lf-rooms-list></lf-rooms-list>
    </div>
    <section class="mt-4">
      <lf-widgets :hide-rates="true" :hide-rooms="true"></lf-widgets>
    </section>
  </lf-content>
</template>
