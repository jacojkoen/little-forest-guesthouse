<template>
  <u-container class="content-area">
    <div class="flex items-center justify-between mb-6">
      <h1 v-if="title" class="text-xl">{{ title }}</h1>
      <lf-book-btn></lf-book-btn>
    </div>
    <slot></slot>
  </u-container>
</template>
<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
<style lang="scss">
.content-area {
  margin-top: 1.5rem;
}
</style>
