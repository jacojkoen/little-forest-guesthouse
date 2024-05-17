<template>
  <ul>
    <li v-for="feature in features">
      <span>{{ feature }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
const features = [
  'Ideal for short or long term stays whether for business, leisure, relocation, post surgery recovery or spiritual healing',
  'Bed and Breakfast',
  'Self Catering',
  'Free high speed fibre optic Wi-Fi connection',
  'On site transport',
  'Secure off street parking',
  'Laundry services',
]
</script>
