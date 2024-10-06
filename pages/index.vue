<script setup lang="ts">
const { rooms } = useRooms();
</script>

<template>
  <lf-page>
    <div class="gallery">
      <lf-carousel :images="galleryHome"></lf-carousel>
    </div>
    <lf-intro-content></lf-intro-content>
    <u-container>
      <div class="grid md:grid-cols-2 md:grid-rows-1 gap-4 mt-4">
        <lf-room
          v-for="room in rooms"
          class="mt-4"
          :room="room"
          hide-banner
          hide-features
        ></lf-room>
        <UCard class="mt-4">
          <template #header>
            <h1 class="text-lg mt-3 h-9">Little Forest Guest House</h1>
          </template>

          <p>
            Located on 41 5th Street, our guesthouse is a short walk away from
            Fourth Avenue, Parkhurst’s bustling street of restaurants, cafes,
            and boutiques.
          </p>
          <p>
            Due to its proximity to Johannesburg’s major hubs, including
            Rosebank and Sandton, and it’s closeness to the Gautrain station, it
            is perfect for business trips or breakaways.
          </p>
          <h3 class="text-lg mb-2 mt-4">Our rates</h3>
          <lf-rates-list></lf-rates-list>
          <h3 class="text-lg mb-2 mt-4">Our rooms</h3>
          <lf-rooms-list is-thumbnail-view></lf-rooms-list>
        </UCard>
      </div>
      <section class="mt-8">
        <lf-widgets hide-rooms hide-rates></lf-widgets>
      </section>
    </u-container>
  </lf-page>
</template>
