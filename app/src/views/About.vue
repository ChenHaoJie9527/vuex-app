<template>
  <div class="about">
    <button @click.prevent="handClickToBus">点击Bus</button>
  </div>
</template>
<script>

export default {
  name: "About",
  data() {
    return {
      message: "OK",
    };
  },
  methods: {
    handClickToBus() {
      EventBus.$emit("msg", this.message);
    },
  },
};
</script>