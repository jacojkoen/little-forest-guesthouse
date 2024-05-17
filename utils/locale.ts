let locale
export default {
  getBrowserLocale() {
    locale = 'en'

    if (navigator && navigator?.languages) {
      locale = navigator.languages[0]
    }
    return locale
  },
}
