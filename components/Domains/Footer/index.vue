<template>
  <div class="pt-8 footer__bg">
    <div class="flex justify-center mt-12">
      <div class="flex flex-col">
        <div class="flex">
          <img
            src="~/assets/image/pyconjp-association-logo.png"
            class="footer__logo"
            alt="PyCon JP Association Logo"
          />
          <div>
            <p class="font-bold jp-regular-font">
              主催:一般社団法人 PyCon JP Association
            </p>
            <p class="text-sm jp-regular-font">
              PyCon JP 2021 in Tokyo is a production of the PyCon JP Committee.
            </p>
            <p class="text-sm jp-regular-font">
              For the latest information and contact information for PyCon JP
              2021, please visit our blog.
            </p>
          </div>
        </div>
        <div class="flex">
          <p>
            このWebサイトはクリエイティブ・コモンズ表示4.0国際ライセンスの下に提供されています。
          </p>
          <img
            src="~/assets/image/creative-commons-icon.png"
            class="w-20"
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

<style>
.footer__bg {
  background: #161616;
  height: 271px;
}
.footer__logo {
  width: 129px;
  height: 77px;
}
</style>
