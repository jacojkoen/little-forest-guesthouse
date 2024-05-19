<script setup lang="ts">
const { rooms } = useRooms()
// CAROUSEL
const homeGallery: IGalleryItem[] = [
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/outside-area.jpg',
    title: 'Little Forest Guest House',
    text: 'Enjoy the beauty of natural rocks under the shade of indigenous trees',
  },
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/02/zanzibar-suite.jpg',
    title: 'Little Forest Guest House',
    text: 'We cater for weekend breakaways and business travels',
  },
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-4.jpg',
    title: 'Little Forest Guest House',
    text: 'Breakfast served daily on request',
  },
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-5.jpg',
    title: 'Little Forest Guest House',
    text: 'Perfect accommodation for business trips or breakaways',
  },
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House.jpg',
    title: 'Little Forest Guest House',
    text: 'Ideal for short or long term stays whether for business or leisure',
  },
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-7.jpg',
    title: 'Little Forest Guest House',
    text: 'A peaceful oasis in the heart of Johannesburg',
  },
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-1.jpg',
    title: 'Little Forest Guest House',
    text: 'Due to the privacy of the suites, some choose it as the perfect accommodation to recover and recuperate after cosmetic surgery',
  },
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-2.jpg',
    title: 'Little Forest Guest House',
    text: 'Entering the property feels like stepping away from the city',
  },
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-3.jpg',
    title: 'Little Forest Guest House',
    text: 'Marvel at the natural rocks, trees and abundance of birds that fill the property',
  },
]
</script>

<template>
  <div class="gallery">
    <lf-carousel :images="homeGallery"></lf-carousel>
  </div>
  <lf-intro-content></lf-intro-content>
  <u-container>
    <div class="grid grid-cols-2 grid-rows-1 gap-4 mt-4">
      <lf-room
        v-for="room in rooms"
        class="mt-4"
        :room="room"
        hide-gallery
        hide-features
      ></lf-room>
      <UCard class="mt-4">
        <template #header>
          <h3 class="text-lg mt-3 h-9">Little Forest Guest House</h3>
        </template>
        <div class="">
          <p class="mb-2">
            Located on 41 5th Street, our guesthouse is a short walk away from
            Fourth Avenue, Parkhurst’s bustling street of restaurants, cafes,
            and boutiques.
          </p>
          <p class="mb-2">
            Due to its proximity to Johannesburg’s major hubs, including
            Rosebank and Sandton, and it’s closeness to the Gautrain station, it
            is perfect for business trips or breakaways.
          </p>
          <h3 class="text-lg mb-2 mt-4">Our rates</h3>
          <lf-rates-list></lf-rates-list>
          <h3 class="text-lg mb-2 mt-4">Our rooms</h3>
          <lf-rooms-list is-thumbnail-view></lf-rooms-list>
        </div>
      </UCard>
    </div>
    <section class="mt-8">
      <lf-widgets :hide-rooms="true" :hide-rates="true"></lf-widgets>
    </section>
  </u-container>
</template>
