<template>
  <ul>
    <li>
      <u-link
        v-for="room in rooms"
        :to="room.link"
        :title="'Go to ' + room.name"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >{{ room.name }}</u-link
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
const { rooms } = useRooms()
</script>
