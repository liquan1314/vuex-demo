<template>
  <div class="home">
      <p>vuex state的值: {{$store.state.count}}</p>
    <button @click="changeState">改变state的值</button>
    <button @click="changeStateStep">增加固定的数值</button>
    <button @click="asyncAdd">异步增加state的值</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',

  methods: {
    changeState() {
      // commit是触发mutation的方法
      this.$store.commit("addCount");
    },

    changeStateStep() {
      this.$store.commit("addCount1",5);
    },

    asyncAdd () {
      // 注意调用vuex里面的方法时需要调用dispatch
      this.$store.dispatch("asyncAdd");
    }
  }
}
</script>
