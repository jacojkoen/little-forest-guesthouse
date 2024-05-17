<template>
  <header class="header-area font-light">
    <UContainer>
      <UButton
        icon="i-ion-home"
        size="lg"
        color="primary"
        square
        variant="ghost"
        class="2xl:hidden xl:hidden lg:hidden md:hidden sm:visible"
        @click="isOpen = true"
      />

      <USlideover v-model="isOpen">
        <UButton
          icon="i-heroicons-x-mark"
          size="lg"
          color="primary"
          square
          variant="ghost"
          @click="isOpen = false"
        />
        <UVerticalNavigation
          :links="links"
          class="border-b border-gray-200 dark:border-gray-800"
        />
      </USlideover>
      <UHorizontalNavigation
        :links="links"
        class="md:visible border-b border-gray-200 dark:border-gray-800 hidden lg:block"
      />
    </UContainer>
  </header>

  <div class="body-area font-light">
    <main class="page-area">
      <NuxtPage />
    </main>
    <div class="footer-area">
      <UContainer>
        <span class="mr-2">© Little Forest Guest House</span>
        <u-link
          to="https://maps.app.goo.gl/QxTyXLnecPwMLFCU6"
          target="new"
          class="mr-2"
          title="View on maps"
        >
          <lf-icon name="ios-location" />
          41, Fifth Street, Parkhurst, Johannesburg, South Africa
        </u-link>
        <u-link class="mr-2" title="Phone us" to="tel:+27845038979">
          <lf-icon name="ios-phone-portrait" />
          +27 84 503 8979
        </u-link>
        <u-link
          color="primary"
          variant="solid"
          :to="bookLink"
          title="Make a booking"
        >
          <lf-icon name="arrow-forward-circle-outline"></lf-icon> Book now
        </u-link>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
// Navigation
const links = [
  {
    label: 'Home',
    icon: 'i-ion-leaf-outline',
    to: '/',
  },
  {
    label: 'Accommodation',
    icon: 'i-ion-bed-outline',
    to: '/accommodation',
  },
  {
    label: 'About',
    icon: 'i-ion-book-outline',
    to: '/about',
  },
  {
    label: 'Rates',
    icon: 'i-ion-information-circle-outline',
    to: '/rates',
  },
  {
    label: 'Contact',
    icon: 'i-ion-location-outline',
    to: '/contact',
  },
  {
    label: 'Book now',
    icon: 'i-ion-arrow-forward-circle-outline',
    to: bookLink,
  },
]
</script>

<style lang="scss">
.header-area {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  height: 3rem;
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.25s ease-in;
  &:hover {
    background: rgba(0, 0, 0, 1);
  }
}
.page-area {
  padding-bottom: 2rem;
}
.footer-area {
  font-size: 0.75rem;
  height: 2rem;
  background: #1fa67a;
  display: flex;
  align-items: center;
}
.body-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 50px);
}
</style>
