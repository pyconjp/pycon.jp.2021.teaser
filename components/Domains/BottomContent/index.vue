<template>
  <div class="bottom-content py-24">
    <div class="text-center">
      <p class="text-2xl en-title-font">Contact</p>
      <div class="mt-10">
        <div class="text-sm jp-regular-font">
          <p>ボランティアによる運営ですので、回答には1週間程度を要します。</p>
          <p>何卒お待ちいただけますようにお願いします。</p>
        </div>
        <div class="text-sm en-regular-font mt-4">
          <p>It is run by volunteers. It takes about a week to answer.</p>
          <p>Thank you for your patience.</p>
        </div>
      </div>
      <div class="flex justify-center contact-button-area">
        <a
          href="mailto:pyconjp@pycon.jp"
          class="en-regular-font border text-white bg-auto border-white hover:text-black hover:bg-white rounded-full contact-button"
        >
          <span>pyconjp@pycon.jp</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bottom-content {
  height: 499px;
}
.contact-button {
  height: 50px;
  width: 280px;
  padding-top: 13px;
  padding-bottom: 13px;
}

.contact-button-area {
  margin-top: 30px;
}
</style>
