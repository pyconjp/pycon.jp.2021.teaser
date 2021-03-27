<template>
  <div
    class="relative flex flex-col content-center w-full overflow-x-hidden top-content"
  >
    <div class="">
      <img
        src="~/assets/image/fireworks-red-1.png"
        class="overflow fireworks-red-1"
        alt="fireworks icon"
      />
      <img
        src="~/assets/image/fireworks-red-2.png"
        class="fireworks-red-2"
        alt="fireworks icon"
      />
      <img
        src="~/assets/image/fireworks-yellow-1.png"
        class="fireworks-yellow-1"
        alt="fireworks icon"
      />
      <img
        src="~/assets/image/fireworks-yellow-2.png"
        class="fireworks-yellow-2"
        alt="fireworks icon"
      />
      <img
        src="~/assets/image/fireworks-yellow-3.png"
        class="fireworks-yellow-3"
        alt="fireworks icon"
      />
    </div>

    <div class="relative mt-24">
      <div class="rectangle"></div>
      <div class="flex content-center justify-center mt-12">
        <h1 class="inline title en-title-font">PyCon JP 2021</h1>
      </div>
      <div class="flex content-center justify-center">
        <p class="inline sub-title en-title-font">
          We Are Happy to See You Again!
        </p>
      </div>
      <div class="flex content-center justify-center">
        <div class="custom-border"></div>
      </div>
      <div class="flex content-center justify-center">
        <p class="pt-5 text-2xl en-regular-font">
          Conference: Oct.15(Fri)- 16(Sat), 2021 (tentative)
        </p>
      </div>
      <div class="flex content-center justify-center">
        <p class="text-sm jp-regular-font">
          開催予定日時 : 2021年10月15日(金) - 16日(土)
        </p>
      </div>
    </div>

    <div class="scroll-area">
      <div class="flex content-center justify-center">
        <p class="text-sm en-regular-font">SCROLL</p>
      </div>
      <div class="arrow-area">
        <img src="~/assets/image/arrow.png" class="arrow" alt="arrow icon" />
        <img src="~/assets/image/arrow.png" class="arrow" alt="arrow icon" />
        <img src="~/assets/image/arrow.png" class="arrow" alt="arrow icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.custom-border {
  margin-top: 20px;
  width: 64px;
  height: 0;
  border: 1px solid #ffffff;
  background-color: #fff;
}

.arrow-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arrow-area .arrow {
  width: 18px;

  -webkit-animation: sdb 2s infinite;
  animation: sdb 2s infinite;
  opacity: 0;
}

.arrow-area .arrow:nth-of-type(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.arrow-area .arrow:nth-of-type(2) {
  top: 16px;
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}
.arrow-area .arrow:nth-of-type(3) {
  top: 32px;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.scroll-area {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 40px;
}

@-webkit-keyframes sdb {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 599px) {
  .top-content {
    height: 608px;
  }
  .title {
    font-size: 48px;
  }
  .sub-title {
    font-size: 24px;
  }
  .rectangle {
    position: absolute;
    width: 247px;
    height: 247px;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(45deg);
  }
  .fireworks-red-1 {
    display: none;
  }

  .fireworks-red-2 {
    position: absolute;
    right: -40px;
    top: 220px;
    width: 120px;
  }
  .fireworks-yellow-1 {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 180px;
  }
  .fireworks-yellow-2 {
    position: absolute;
    left: 100px;
    top: 40px;
    width: 160px;
  }
  .fireworks-yellow-3 {
    position: absolute;
    left: 20px;
    top: 100px;
    width: 120px;
  }
}
@media screen and (min-width: 600px) {
  .top-content {
    height: calc(100vh - 70px);
  }
  .title {
    font-size: 56px;
  }
  .sub-title {
    font-size: 32px;
  }
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
  .fireworks-red-1 {
    position: absolute;
    top: -20px;
    width: 400px;
  }
  .fireworks-red-2 {
    position: absolute;
    right: 0;
    width: 200px;
  }
  .fireworks-yellow-1 {
    position: absolute;
    right: 50px;
    bottom: 20px;
    width: 350px;
  }
  .fireworks-yellow-2 {
    position: absolute;
    left: 200px;
    bottom: 40px;
    width: 300px;
  }
  .fireworks-yellow-3 {
    position: absolute;
    left: 100px;
    bottom: 40px;
    width: 200px;
  }
}
</style>
