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
    <div>title: {{title}}</div>
    <div>content: {{content}}</div>
    <button @click.prevent="handClickCommit">提交commit</button>
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
    message() {
      return this.$store.state.msg;
    },
    title() {
      return this.$store.state.title;
    },
    content() {
      return this.$store.getters.newTitle;
    },
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
    async handClickCommit() {
      // 同步执行，立即更新state状态数据 commit => mutations
      // this.$store.commit("setTitle", "新的开课吧");
      // 拿到的还是旧的数据,同步提交不支持异步写法
      // console.log(this.$store.state.title) 

      // 异步提交 dispatch => actions
      await this.$store.dispatch('setName', "新的开课吧12312321")
      console.log(this.$store.state.title);
    },
  },
};
</script>
