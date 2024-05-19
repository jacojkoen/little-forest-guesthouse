<template>
  <lf-content title="About">
    <div class="md:grid md:grid-cols-2 gap-4">
      <section class="mb-8">
        <p>
          Little Forest Guest House is an upmarket Guest House set in the heart
          of one of Johannesburg’s most beautiful suburbs, Parkhurst.
        </p>
        <p>
          Located on 41 5th Street, it’s a short walk away from Fourth Avenue,
          Parkhurst’s bustling street of restaurants, cafes, and boutiques.
        </p>
        <p>
          Due to its proximity to Johannesburg’s major hubs, including Rosebank
          and Sandton, Johannesburg CBD and Newtown and it’s closeness to the
          Gautrain station, some choose it as the perfect accommodation for
          business trips or breakaways.
        </p>

        <p>
          But Little Forest Guest House is more than just conveniently located,
          it’s a peaceful oasis in the heart of Johannesburg. Visitors always
          marvel at the natural rocks, trees and abundance of birds that fill
          the property.
        </p>
        <p>
          Entering the property feels like stepping away from the city, which is
          why many visitors use it as a perfect weekend or holiday breakaway.
        </p>
        <lf-book-btn class="mt-2"></lf-book-btn>
      </section>
      <aside>
        <lf-carousel
          :images="aboutImages"
          full-image
          class="mb-4"
        ></lf-carousel>
      </aside>
    </div>
    <div>
      <h3 class="mb-2 mt-2">Our Rooms</h3>
      <lf-rooms-list is-thumbnail-view></lf-rooms-list>
    </div>
    <div class="mt-8 md:grid md:grid-cols-2">
      <section class="mb-8">
        <p>
          Due to the privacy of the suites, some choose it as the perfect
          accommodation to recover and recuperate after cosmetic surgery.
        </p>
        <p>
          Betsie and her team of friendly and efficient staff members can’t wait
          to welcome you for a tranquil, comfortable stay in beautiful
          surroundings.
        </p>
        <p>
          Free WiFi for all guests served from a high speed fiber connection.
        </p>
        <lf-book-btn class="mt-2"></lf-book-btn>
      </section>
      <aside class="mb-4">
        <h3 class="text-lg mb-2">Features and services</h3>
        <lf-features-list></lf-features-list>
      </aside>
    </div>
    <lf-widgets hide-rooms hide-features></lf-widgets>
  </lf-content>
</template>

<script setup lang="ts">
const aboutImages = [
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-Main-House.jpg',
  },
  {
    img: 'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Butterflies.jpg',
  },
]
</script>
