<template>
  <div class="footer__bg">
    <div class="flex justify-center mt-10 mb-10 sm:mt-16 sm:mb-16">
      <div class="flex flex-col footer__contents">
        <div class="sm:flex">
          <a
            href="https://www.pycon.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="~/assets/image/pyconjp-association-logo.png"
              class="footer__logo"
              alt="PyCon JP Association Logo"
          /></a>
          <div class="mt-2 sm:ml-4 sm:mt-0">
            <p class="mb-2 font-bold sm:mb-2 sm:text-base jp-regular-font">
              主催:一般社団法人 PyCon JP Association
            </p>
            <p class="text-sm jp-regular-font">
              PyCon JP 2021 in Tokyo is produced by the
              <a
                href="https://www.pycon.jp/committee/english.html"
                target="_blank"
                rel="noopener noreferrer"
                class="underline"
                >PyCon JP Association</a
              >
              .
            </p>
            <p class="text-sm jp-regular-font">
              For the latest information and contact information for PyCon JP
              2021, please visit
              <a
                href="https://pyconjp.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="underline"
                >our blog</a
              >.
            </p>
          </div>
        </div>
        <div class="mt-8 sm:flex">
          <p class="mb-2 text-sm sm:text-base">
            このWebサイトはクリエイティブ・コモンズ表示4.0国際ライセンスの下に提供されています。
          </p>
          <img
            src="~/assets/image/creative-commons-icon.png"
            class="licence_img"
            alt="Creative Commons 4.0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer__bg {
  background: #161616;
  height: 271px;
}
.footer__logo {
  width: 129px;
  height: 77px;
}
.footer__contents {
  max-width: 88%;
}
.licence_img {
  width: 88px;
  height: 31px;
}
@media screen and (max-width: 599px) {
  .footer__bg {
    height: 411px;
  }
}
</style>
