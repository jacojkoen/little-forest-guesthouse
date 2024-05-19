<template>
  <u-icon :name="icon" class="text-inline-icon"></u-icon>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const icon = computed(() => 'i-ion-' + props.name.replaceAll('ion:', ''))
</script>
<style lang="scss">
.text-inline-icon {
  position: relative;
  top: 3px;
}
</style>
