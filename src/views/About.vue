<template>
  <div class="about">
    <p>vuex state的值:{{count}}</p>
    <button @click="addCount">改变state的值</button>
    <button @click="addCount1(5)">按照传参的值进行改变state的值</button>
    <button @click="asyncAdd">异步改变state的值</button>
  </div>
</template>
<script>
  // 这里面是state的和mutations 和actions的第二种取值方式 通过映射
  import {mapState,mapMutations,mapActions} from "vuex";
  export default {
    name: "About",
    computed: {
      // 注意map这种映射传递的是一个数组
      ...mapState(["count"]),
    },

    methods: {
      ...mapMutations(["addCount","addCount1"]),
      ...mapActions(["asyncAdd"])
    }
  }
</script>
