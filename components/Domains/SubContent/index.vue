<template>
  <div class="flex flex-col sub-content__bg">
    <div class="flex content-center justify-center">
      <p>Latest Information</p>
    </div>

    <div class="flex content-center justify-center">
      <div class="w-4/6">
        <div
          class="grid items-center content-center grid-cols-2 justify-items-center"
        >
          <div>
            <p class="pt-5 text-2xl text-center en-regular-font">
              We need staff
            </p>
            <p class="pt-5 text-center jp-title-font">スタッフ募集中！</p>
            <p class="pt-5 text-center jp-title-font">詳しくは下のボタンから</p>
            <button>See More</button>
          </div>
          <div>
            <p class="pt-5 text-2xl text-center en-regular-font">
              Won't you be a speaker?
            </p>
            <p class="pt-5 text-center jp-title-font">登壇者募集中！</p>
            <p class="pt-5 text-center jp-title-font">詳しくは下のボタンから</p>
            <button>See More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.sub-content__bg {
  background: rgba(255, 255, 255, 0.2);
}
</style>
