<template>
  <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <li v-for="room in rooms" class="pb-2">
      <u-link
        class="text-lg"
        :to="room.link"
        :title="'Go to ' + room.name"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >{{ room.name }}</u-link
      >
      <div>
        <small class="mr-1">from</small>
        <u-link title="Book now" :to="bookLink" target="new">{{
          numberFormatter.formatCurrency(room.price)
        }}</u-link>
        <small class="ml-1">per single per night</small>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { rooms } = useRooms()
</script>
