<template>
  <div class="relative flex flex-col text-white bg">
    <img
      src="~/assets/image/fireworks-red-1.png"
      class="overflow fireworks-red-1"
      alt="fireworks icon"
    />
    <Header></Header>
    <main class="flex-1"><Nuxt /></main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Domains/Header'
import Footer from '~/components/Domains/Footer'
export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return this.$nuxtI18nSeo()
  },
}
</script>

<style scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.bg {
  background-image: url('@/assets/image/Rectangle.png');
  background-repeat: repeat;
}

@media screen and (max-width: 599px) {
  .fireworks-red-1 {
    position: absolute;
    top: -120px;
    left: -80px;
    width: 300px;
  }
}
@media screen and (min-width: 600px) {
  .fireworks-red-1 {
    display: none;
  }
}
</style>
