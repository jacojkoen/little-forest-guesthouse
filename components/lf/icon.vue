<template>
  <u-icon
    :name="`i-ion-${name.replace('ion:', '')}`"
    class="text-inline-icon"
  ></u-icon>
</template>
<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
<style lang="scss">
.text-inline-icon {
  position: relative;
  top: 3px;
}
</style>
