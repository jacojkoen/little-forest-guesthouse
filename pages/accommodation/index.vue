<script setup lang="ts">
const { rooms } = useRooms();

const roomGallery = computed(() => {
  let roomPics: IGalleryItem[] = [];
  Object.values(rooms.value).forEach((room) => {
    if (room.gallery) {
      roomPics = [...roomPics, ...room.gallery];
    }
  });
  return roomPics;
});
</script>

<template>
  <lf-page>
    <lf-content title="Accommodation">
      <div class="lf-rooms-list grid md:grid-cols-2 md:grid-rows-1 gap-4">
        <lf-room v-for="room in rooms" :room="room" hide-banner></lf-room>
        <UCard>
          <template #header>
            <div class="h-10">
              <h3 class="text-lg">Features and services</h3>
            </div>
          </template>
          <lf-features-list></lf-features-list>
          <lf-carousel
            class="mt-6"
            full-image
            :images="roomGallery"
          ></lf-carousel>
          <lf-rooms-list></lf-rooms-list>
        </UCard>
      </div>
    </lf-content>
  </lf-page>
</template>
