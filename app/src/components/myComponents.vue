<template>
  <div>
    我的名字是: {{name}}
    <button @click.prevent="syncTo">sync通信</button>
    <h3>{{title}}</h3>
    <button @click.prevent="handClickToBus">点击Bus</button>
  </div>
</template>

<script>
import EventBus from "../bus/index";
export default {
  props: ["name"],
  inject: ["foo"],
  data() {
    return {
      msg: "我是子组件",
      title: "",
    };
  },
  created() {
      console.log(this.foo)
  },
  mounted() {
    //   访问父组件实例对象
    this.title = this.$parent.person;
  },
  methods: {
    syncTo() {
      this.$emit("update:name", this.msg);
    },
    handClickToBus() {
      EventBus.$emit("msg", this.message);
    },
  },
};
</script>

<style>
</style>