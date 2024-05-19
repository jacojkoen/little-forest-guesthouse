<template>
  <div :class="isExpanded ? 'columns-2' : ''">
    <div class="mb-3">
      <lf-icon name="ion:location-sharp" class="text-lg"></lf-icon>
      <a
        href="https://www.google.com/maps/place/Little+Forest+Guesthouse/@-26.14389,28.01831,15z/data=!4m8!3m7!1s0x0:0x1cbf814ede619475!5m2!4m1!1i2!8m2!3d-26.14389!4d28.01831"
        target="_blank"
        rel="noopener"
        title="View on maps"
      >
        41, Fifth Street, Parkhurst, Johannesburg, South Africa
      </a>
    </div>
    <div class="mb-3">
      <lf-icon name="ion:ios-email-outline" class="text-lg"></lf-icon>
      <u-link to="mailto:info@littleforestguesthouse.co.za" title="Email us">
        info@littleforestguesthouse.co.za
      </u-link>
    </div>
    <div class="mb-3">
      <lf-icon name="ion:ios-phone-portrait" class="text-lg"></lf-icon>
      <u-link to="tel:+27845038979" title="Call Betsie">+27 84 503 8979</u-link>
    </div>
    <div class="mb-3">
      <lf-icon name="ion:ios-phone-portrait" class="text-lg"></lf-icon>
      <u-link to="tel:+27836533322" title="Call Brand">+27 83 653 3322</u-link>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  isExpanded?: boolean
}>()
</script>
