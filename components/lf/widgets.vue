<template>
  <div class="grid grid-cols-2 grid-rows-1 gap-4 mt-8">
    <UCard v-if="!hideFeatures">
      <template #header>
        <h3 class="text-lg h-8">Features and services</h3>
      </template>

      <lf-features-list></lf-features-list>
    </UCard>

    <UCard v-if="!hideRooms">
      <template #header>
        <h3 class="text-lg h-8">Our rooms</h3>
      </template>

      <lf-rooms-list></lf-rooms-list>
    </UCard>

    <UCard v-if="!hideRates">
      <template #header>
        <h3 class="text-lg h-8">Rates</h3>
      </template>

      <lf-rates-list></lf-rates-list>
      <lf-book-btn></lf-book-btn>
    </UCard>

    <UCard v-if="!hideContact">
      <template #header>
        <h3 class="text-lg h-8">Contact us</h3>
      </template>
      <lf-contact-list></lf-contact-list>
    </UCard>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  hideFeatures?: boolean
  hideRooms?: boolean
  hideRates?: boolean
  hideContact?: boolean
}>()
</script>
