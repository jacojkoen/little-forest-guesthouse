<template>
  <lf-content title="Rates">
    <lf-rates-list class="mb-4"></lf-rates-list>
    <lf-book-btn></lf-book-btn>
    <lf-widgets hide-rooms hide-rates></lf-widgets>
  </lf-content>
</template>

<script setup lang="ts">
const { rooms } = useRooms()
</script>
