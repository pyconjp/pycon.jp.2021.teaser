<template>
  <div class="text-white">
    <TopContent></TopContent>
    <SubContent></SubContent>
    <BottomContent></BottomContent>
  </div>
</template>

<script>
import TopContent from '~/components/Domains/TopContent'
import SubContent from '~/components/Domains/SubContent'
import BottomContent from '~/components/Domains/BottomContent'
export default {
  components: {
    TopContent,
    SubContent,
    BottomContent,
  },
}
</script>

<style></style>
