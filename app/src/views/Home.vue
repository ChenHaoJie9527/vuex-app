<template>
  <div class="home">
    <!-- 普通的emit监听进行父子通信 -->
    <!-- <myComponents :name="name" @event="eventChirder"></myComponents> -->
    <!-- 优化版父子通信 -->
    <!-- <myComponents :name.sync="name" ></myComponents> -->

    <!-- ref/refs访问子组件信息 -->
    <!-- <myComponents :name.sync="name" ref="myComponents"></myComponents> -->

    <!-- $chirder/$parent 内置方法进行访问父子组件实例对象 -->
    <myComponents :name.sync="name" ref="myComponents" title="主题"></myComponents>
    来源： {{chirderName}}
    <div>
      eventBus: {{message || "空"}}
      <div>{{message}}</div>
    </div>
  </div>
</template>

<script>
import myComponents from "@/components/myComponents";
import EventBus from "../bus/index";
export default {
  name: "Home",
  provide() {
    return {
      foo: "bar",
    };
  },
  components: {
    myComponents,
  },
  data() {
    return {
      name: "张三",
      chirderName: "",
      person: "父组件",
      msg: this.$store.state.msg,
    };
  },
  computed: {
    message(){
      return this.$store.state.msg;
    }
  },
  created() {
    // eventbus跨组件通信
    // EventBus.$on("msg", (data) => {
    //   console.log(data)
    //   this.msg = data;
    // });
    
  },
  mounted() {
    this.chirderName = this.$refs.myComponents.msg;
  },
  methods: {
    eventChirder(val) {
      this.chirderName = val;
    },
  },
};
</script>
