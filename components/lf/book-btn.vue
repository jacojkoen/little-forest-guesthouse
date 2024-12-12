<script setup lang="ts">
const props = defineProps<{
  isSmall?: boolean;
}>();
</script>

<template>
  <UButton
    :class="isSmall ? '' : 'h-12'"
    color="primary"
    variant="solid"
    :to="bookLink"
    icon="i-ion-arrow-forward-circle-outline"
  >
    Book now
  </UButton>
</template>
