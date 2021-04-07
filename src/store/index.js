import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  // 注意mutation里面的值不能是异步的，因为develop工具不会正常改变
  mutations: {
    // mutation函数里面的第一个参数永远都是state
    addCount(state) {
      state.count++;
    },
    addCount1(state,step) {
      state.count += step;
    }
  },
  // action 里面 是异步取到的值
  actions: {
    // 注意action里面的第一个参数是context上下文的意思
    asyncAdd(context) {
      setTimeout(()=>{
          context.commit("addCount");
      },1000)
    }
  },
  modules: {
  }
})
