<template>
  <div>
    <div v-if="mobile" class="header"></div>
    <div v-else class="flex header">
      <div class="flex items-center justify-center w-1/6">
        <img
          src="~/assets/image/header-logo.png"
          alt="Header Logo"
          class="w-10 h-10"
        />
      </div>
      <div class="flex items-center justify-between w-4/6">
        <a class="text-base en-title-font">NEWS</a>
        <a class="text-base en-title-font">STAFF</a>
        <a class="text-base en-title-font">PROPOSAL</a>
        <a class="text-base en-title-font">SPONSOR</a>
        <a class="text-base en-title-font">TICKET</a>
        <a class="text-base en-title-font">REVIEWER</a>
        <a class="text-base en-title-font">CODE OF CONDUCT</a>
      </div>

      <div class="flex items-center justify-center w-1/6">
        <img
          src="~/assets/image/facebook.png"
          alt="Facebook Icon"
          class="w-5 h-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
const mediaQuery = window.matchMedia('(max-width: 599px)')
export default {
  name: 'Header',
  data() {
    return {
      mobile: false,
    }
  },
  created() {
    const self = this
    this.mobile = mediaQuery.matches
    mediaQuery.addEventListener('change', () => {
      self.mobile = !self.mobile
    })
  },
}
</script>

<style scoped>
.header {
  height: 70px;
}
</style>
