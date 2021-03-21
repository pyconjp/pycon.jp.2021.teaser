<template>
  <div class="flex justify-center">
    <!-- モバイルの全画面メニュー -->
    <div
      v-if="isMobileMenu"
      class="mobile-menu"
      :class="{ 'overflow-hidden': isMobileMenu }"
    >
      <div class="flex flex-col items-center w-full mobile-menu-content">
        <a
          v-for="item in linkList"
          :key="item.text"
          class="mb-5 text-base text-center en-title-font"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          >{{ item.text }}</a
        >
        <a
          class="mt-5"
          href="https://www.facebook.com/PyConJP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="~/assets/image/facebook.png"
            alt="Facebook Icon"
            class="w-5 h-5 ml-auto mr-auto"
        /></a>
        <img
          src="~/assets/image/header-logo.png"
          alt="Header Logo"
          class="w-10 h-10 mt-10"
        />
      </div>
    </div>
    <!-- ここまで  -->

    <!-- モバイル版のヘッダー -->
    <div v-if="mobile" class="flex items-center justify-between header">
      <img
        src="~/assets/image/header-logo.png"
        alt="Header Logo"
        class="w-10 h-10"
        :class="{ invisible: isMobileMenu }"
      />
      <div
        id="btn01"
        class="z-20 btn-trigger"
        :class="{ active: isMobileMenu }"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- ここまで  -->

    <!-- PC版ヘッダー -->
    <div v-else class="flex header">
      <div class="flex items-center justify-center w-1/6">
        <img
          src="~/assets/image/header-logo.png"
          alt="Header Logo"
          class="w-10 h-10"
        />
      </div>
      <div id="header-string" class="flex items-center justify-between w-4/6">
        <a
          v-for="item in linkList"
          :key="item.text"
          class="text-base en-title-font"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          >{{ item.text }}</a
        >
      </div>
      <div class="flex items-center justify-center w-1/6">
        <a
          href="https://www.facebook.com/PyConJP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="~/assets/image/facebook.png"
            alt="Facebook Icon"
            class="w-5 h-5"
        /></a>
      </div>
    </div>
    <!-- ここまで  -->
  </div>
</template>

<script>
const mediaQuery = window.matchMedia('(max-width: 599px)')
export default {
  name: 'Header',
  data() {
    return {
      mobile: false,
      isMobileMenu: false,
      linkList: [
        {
          text: 'NEWS',
          link: 'https://pyconjp.blogspot.com/2021/',
          disable: false,
        },
        {
          text: 'STAFF',
          link:
            'https://pyconjp.blogspot.com/2021/01/2021-staff-application-start.html',
          disable: false,
        },
        {
          text: 'PROPOSAL',
          link: '',
          disable: false,
        },
        {
          text: 'SPONSOR',
          link: '',
          disable: true,
        },
        {
          text: 'TICKET',
          link: '',
          disable: true,
        },
        {
          text: 'REVIEWER',
          link: '',
          disable: true,
        },
      ],
    }
  },
  created() {
    const self = this
    this.mobile = mediaQuery.matches
    mediaQuery.addEventListener('change', () => {
      self.mobile = !self.mobile
    })
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenu = !this.isMobileMenu
      if (this.isMobileMenu) {
        document.body.style.overflow = 'hidden'
        // document.addEventListener('touchmove', this.bodyScroll, false)
      } else {
        document.body.style.overflow = ''
        // document.removeEventListener('touchmove', this.bodyScroll, false)
      }
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 599px) {
  .header {
    height: 65px;
    width: 88%;
  }
}

@media screen and (min-width: 600px) {
  .header {
    height: 70px;
    width: 88%;
  }
}

#header-string a {
  position: relative;
  display: inline-block;
  text-decoration: none;
}
#header-string a::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #fff;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform 0.3s;
}
#header-string a:hover::after {
  transform: scale(1, 1);
}

/*=============================
.btn-trigger
=============================*/
.btn-trigger {
  position: relative;
  width: 36px;
  height: 14px;
  cursor: pointer;
}
.btn-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #fff;
  border-radius: 4px;
}
.btn-trigger,
.btn-trigger span {
  display: inline-block;
  transition: all 0.5s;
  box-sizing: border-box;
}
.btn-trigger span:nth-of-type(1) {
  top: 0;
}
.btn-trigger span:nth-of-type(2) {
  top: 20px;
}
.btn-trigger span:nth-of-type(3) {
  bottom: 0;
}

/*=============================
#btn01
=============================*/
#btn01.active span:nth-of-type(1) {
  -webkit-transform: translateY(5px) rotate(-45deg);
  transform: translateY(5px) rotate(-45deg);
}
#btn01.active span:nth-of-type(2) {
  opacity: 0;
}
#btn01.active span:nth-of-type(3) {
  -webkit-transform: translateY(-5px) rotate(45deg);
  transform: translateY(-5px) rotate(45deg);
}

.mobile-menu {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  z-index: 10;
}

.mobile-menu-content {
  margin: 22% auto;
}
</style>
