<template>
  <lf-page>
    <lf-content title="Contact">
      <lf-contact-list :is-expanded="true"></lf-contact-list>
    </lf-content>
    <div class="map-area">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.823607094422!2d28.017570182890744!3d-26.143963249269575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b61fc621eb3%3A0x79e196076852c714!2sLittle%20Forest%20Guest%20House!5e1!3m2!1sen!2ses!4v1715956958668!5m2!1sen!2ses"
        width="100%"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Little Forest Guest House Location"
        class="mb-8"
      ></iframe>
    </div>
  </lf-page>
</template>
<style lang="scss" scoped>
.map-area {
  margin-bottom: -2rem;
  margin-top: 2rem;
}
</style>
