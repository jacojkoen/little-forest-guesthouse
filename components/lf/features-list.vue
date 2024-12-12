<template>
  <ul class="grid gap-x-4 gap-y-1 md:grid-cols-2">
    <li class="ml-4 flex" v-for="feature in features">
      <lf-icon :name="feature.icon" class="mr-2"></lf-icon>
      <span>{{ feature.text }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
const features = [
  { text: "Paid Breakfast", icon: "i-ion-restaurant" },
  { text: "Self Catering", icon: "i-ion-home" },
  { text: "Free Wi-Fi", icon: "i-ion-wifi" },
  { text: "Transport services", icon: "i-ion-bus" },
  { text: "Free parking", icon: "i-ion-car" },
  { text: "Outdoor pool (Pool Cottage)", icon: "i-ion-water" },
  { text: "Pet Friendly", icon: "i-ion-paw" },
  { text: "Laundry facilities", icon: "i-mdi-washing-machine" },
  { text: "Housekeeping", icon: "i-mdi-broom" },
];
</script>
