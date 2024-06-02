<script setup lang="ts">
const { rooms } = useRooms()
const route = useRoute()
</script>

<template>
  <section class="page-room">
    <lf-room
      class="mt-4"
      :room="rooms[route.path.replace('/accommodation/', '')]"
      hide-banner
      hide-link
      show-header-book
      is-page
    ></lf-room>
  </section>
  <u-container class="mt-8 mb-4">
    <h3 class="mb-2 mt-2">Our Rooms</h3>
    <lf-rooms-list is-thumbnail-view></lf-rooms-list>
  </u-container>
  <u-container class="mt-4">
    <lf-widgets hide-rates hide-rooms></lf-widgets>
  </u-container>
  <div
    class="p-2 flex justify-between items-center 2xl:hidden xl:hidden lg:hidden md:hidden sm:visible room-footer border-t border-gray-200 dark:border-gray-800"
  >
    <UTooltip :text="`Sleeps 1 to ${2} persons`">
      <lf-icon name="i-ion-person" class="mr-2"></lf-icon>
      1 - {{ 2 }}
    </UTooltip>

    <lf-book-btn class="ml-2"></lf-book-btn>
  </div>
</template>
<style scope>
.page-room {
  margin-top: -1rem;
}
.room-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: white;
  z-index: 9999;
}
</style>
