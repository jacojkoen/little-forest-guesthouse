<template>
  <lf-content title="Rates">
    <lf-rates-list class="mb-4"></lf-rates-list>
    <lf-book-btn></lf-book-btn>

    <h3 class="mb-2 mt-8">Our Rooms</h3>
    <lf-rooms-list is-thumbnail-view></lf-rooms-list>

    <lf-widgets hide-rooms hide-rates></lf-widgets>
  </lf-content>
  
</template>

<script setup lang="ts">
const { rooms } = useRooms()
</script>
