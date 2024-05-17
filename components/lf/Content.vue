<template>
  <u-container class="content-area">
    <h2 v-if="title" class="text-xl mb-4">{{ title }}</h2>
    <slot></slot>
  </u-container>
</template>
<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>
<style lang="scss">
.content-area {
  margin-top: 4.5rem;
}
</style>
