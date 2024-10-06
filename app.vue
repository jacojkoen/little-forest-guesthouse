<template>
  <header class="header-area font-light">
    <UContainer>
      <div class="flex items-center my-2">
        <UButton
          icon="i-ion-menu"
          size="lg"
          color="primary"
          square
          variant="ghost"
          class="2xl:hidden xl:hidden lg:hidden md:hidden sm:visible mr-2"
          @click="isOpen = true"
        />
        <u-link to="/">
          <h1
            class="2xl:hidden xl:hidden lg:hidden md:hidden sm:visible text-lg"
          >
            Little Forest Guest House
          </h1>
        </u-link>
      </div>
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
          :links="pageNavigation"
        />
      </USlideover>
      <UHorizontalNavigation
        :links="pageNavigation"
        class="md:visible border-b border-gray-200 dark:border-gray-800 hidden lg:block"
      />
    </UContainer>
  </header>

  <div class="body-area font-light">
    <main class="page-area">
      <NuxtPage />
    </main>
    <u-container class="mb-2">
      <UHorizontalNavigation
        :links="pageNavigation"
        class="md:visible hidden lg:block"
      />
    </u-container>
    <UVerticalNavigation
      :links="pageNavigation"
      class="mx-4 2xl:hidden xl:hidden lg:hidden md:hidden sm:visible mb-6"
    />
    <div class="footer-area sm:py-2">
      <UContainer>
        <span class="mr-2">© Little Forest Guest House</span>
        <u-link
          to="https://maps.app.goo.gl/QxTyXLnecPwMLFCU6"
          target="new"
          class="mr-2"
          title="View on maps"
        >
          41, Fifth Street, Parkhurst, Johannesburg, South Africa
        </u-link>
        <u-link class="mr-2" title="Phone us" to="tel:+27845038979">
          +27 84 503 8979
        </u-link>
        <u-link
          color="primary"
          variant="solid"
          :to="bookLink"
          title="Make a booking"
        >
          Book now <lf-icon name="i-ion-arrow-forward-circle-outline"></lf-icon>
        </u-link>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const route = useRoute()

watch(
  () => route.name,
  () => {
    isOpen.value = false
  },
)
</script>

<style lang="scss">
.page-area {
  padding-bottom: 1rem;
}
.footer-area {
  font-size: 0.75rem;
  min-height: 2rem;
  border-top: 1px solid #1fa67a;
  display: flex;
  align-items: center;
}
.body-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 70px);
}
a {
  color: #1fa67a;
  transition: all 0.25s ease-in;
  &:hover {
    color: #2ce2a5;
  }
}
p {
  margin-bottom: 1rem;
}
</style>
