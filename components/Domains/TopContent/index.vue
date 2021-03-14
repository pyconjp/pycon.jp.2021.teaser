<template>
  <div
    class="relative flex flex-col content-center justify-center w-full mt-32"
  >
    <div class="rectangle"></div>
    <div class="flex content-center justify-center">
      <h1 class="inline text-6xl en-title-font">PyCon JP 2021</h1>
    </div>
    <div class="flex content-center justify-center">
      <p class="inline text-3xl en-title-font">
        We Are Happy to See You Again!
      </p>
    </div>
    <div class="flex content-center justify-center">
      <div>----</div>
    </div>
    <div class="flex content-center justify-center">
      <p class="pt-5 text-2xl en-regular-font">
        Conference: Oct.15(Fri)- 16(Sat), 2021
      </p>
    </div>
    <div class="flex content-center justify-center">
      <p class="pt-5 text-sm jp-regular-font">
        開催日時 : 2021年10月15日(金) - 16日(土)
      </p>
    </div>
    <div class="flex content-center justify-center">
      <p class="pt-5 text-sm jp-regular-font">SCROLL</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.rectangle {
  position: absolute;
  width: 321px;
  height: 321px;
  left: 0;
  right: 0;
  margin: auto;
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(45deg);
}
</style>
