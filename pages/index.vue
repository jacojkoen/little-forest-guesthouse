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
  // {
  //   img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-3.jpg',
  //   title: 'Little Forest Guest House',
  //   text: 'Goes here',
  // },
  // {
  //   img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-4.jpg',
  //   title: 'Little Forest Guest House',
  //   text: 'Goes here',
  // },
  // {
  //   img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-5.jpg',
  //   title: 'Little Forest Guest House',
  //   text: 'Goes here',
  // },
  // {
  //   img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House.jpg',
  //   title: 'Little Forest Guest House',
  //   text: 'Goes here',
  // },
  // {
  //   img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-7.jpg',
  //   title: 'Little Forest Guest House',
  //   text: 'Goes here',
  // },
  // {
  //   img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-1.jpg',
  // },
  // {
  //   img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Guest-House-2.jpg',
  // },
]
</script>

<template>
  <div class="gallery">
    <lf-carousel :images="homeGallery"></lf-carousel>
  </div>
  <section class="pt-8 pb-4 description-area">
    <u-container class="flex justify-between">
      <div>
        <h2 class="text-lg">
          A peaceful oasis in the heart of Parkhurst, Johannesburg
        </h2>
        <p>
          Little Forest Guest House offers upmarket guest house accommodation in
          the heart of one of Johannesburg’s most beautiful suburbs, Parkhurst.
        </p>
      </div>
      <lf-book-btn></lf-book-btn>
    </u-container>
  </section>
  <u-container>
    <div class="grid grid-cols-2 grid-rows-1 gap-4 mt-4">
      <lf-room
        v-for="room in rooms"
        class="mt-4"
        :room="room"
        :hide-gallery="true"
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
          <lf-rates-list></lf-rates-list>
        </div>
      </UCard>
    </div>

    <!-- <section class="mt-4">
      <h3 class="text-xl mb-2">Little Forest Guest House</h3>
      <UDivider class="mb-4" />
      <p class="mb-2">
        Located on 41 5th Street, our guesthouse is a short walk away from
        Fourth Avenue, Parkhurst’s bustling street of restaurants, cafes, and
        boutiques.
      </p>
      <p class="mb-2">
        Due to its proximity to Johannesburg’s major hubs, including Rosebank
        and Sandton, and it’s closeness to the Gautrain station, it is perfect
        for business trips or breakaways.
      </p>
    </section> -->
    <section class="mt-8">
      <lf-widgets :hide-rooms="true" :hide-rates="true"></lf-widgets>
    </section>
  </u-container>
</template>
<style lang="scss" scoped>
.description-area {
  // background: #1fa67a;
}
</style>
