<template>
  <div class="bottom__bg">
    <section class="py-3">
      <div class="flex justify-center contact__width">
        <div class="block">
          <h2 class="font-bold text-2xl mb-1">Contact</h2>
          <p>ボランティアによる運営ですので、回答には1週間程度を要します。</p>
          <p>何卒お待ちいただけますようにお願いします。</p>
          <p>It is run by volunteers. It takes about a week to answer.</p>
          <p>Thank you for your patience.</p>
        </div>
      </div>
      <div class="flex justify-center mt-2">
        <a
          href="mailto:pyconjp@pycon.jp"
          class="border text-white bg-auto border-white hover:text-black hover:bg-white font-bold py-2 px-8 rounded-full"
        >
          <span>pyconjp@pycon.jp</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bottom__bg {
  background: rgba(50, 50, 50, 0.7);
}
.contact__width {
  max-width: 80%;
  margin: 0 auto;
}
</style>
