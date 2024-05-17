<script setup lang="ts">
const { rooms } = useRooms()
</script>

<template>
  <lf-content title="Accommodation">
    <div class="grid grid-cols-2 grid-rows-1 gap-4">
      <lf-room
        v-for="room in rooms"
        class="mt-4"
        :room="room"
        :hide-gallery="true"
      ></lf-room>
      <UCard class="mt-4">
        <template #header>
          <div class="h-12">
            <h3 class="text-lg">Rates</h3>
            <div>We also serve breakfast on request</div>
          </div>
        </template>

        <lf-rates-list></lf-rates-list>
      </UCard>
    </div>
    <lf-widgets :hide-rooms="true" :hide-rates="true"></lf-widgets>
  </lf-content>
</template>
