<template>
  <u-icon :name="name" class="text-inline-icon"></u-icon>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>
<style lang="scss">
.text-inline-icon {
  position: relative;
  top: 3px;
}
</style>
