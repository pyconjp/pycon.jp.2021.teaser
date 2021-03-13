<template>
  <div class="min-h-screen bg">
    <Header></Header>
    <Nuxt />
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

<style>
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
</style>
