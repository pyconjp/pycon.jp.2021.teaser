<template>
  <button @click="openOtherWindow">
    <div class="border">
      <div class="text">
        <slot>Button</slot>
      </div>
    </div>
    <div class="button-border"></div>
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    openOtherWindow() {
      window.open(this.link, '', 'noopener')
    },
  },
}
</script>

<style scoped>
button {
  position: relative;
  width: 256px;
  height: 64px;
  padding: 4px;
  margin-top: 16px;
  background-color: rgba(169, 136, 73);
}

button:hover {
  background: rgba(169, 136, 73, 0.6);
}

button:hover .button-border {
  left: 93%;
}

.border {
  position: absolute;
  left: 1.56%;
  right: 1.56%;
  top: 6.25%;
  bottom: 6.25%;

  border: 1px solid #ffffff;
  box-sizing: border-box;
}

.text {
  position: absolute;
  left: 40px;
  right: 40px;
  top: 16px;
  bottom: 16px;

  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #ffffff;
}

.button-border {
  position: absolute;
  top: 50%;
  left: 89.06%;
  width: 28px;
  border: 0.5px solid #ffffff;
  background-color: #fff;
  transition: left 0.1s;
}
</style>
