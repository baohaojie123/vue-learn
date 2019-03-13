const state = {
  money:1
}
const mutations = {
  add(state,param){
    state.money+=param
  },
  reduce(state){
    state.money--
  }
}
// 参数从actions传到mutations里
const actions = {
  add:({commit},param) => {
    commit('add',param)
  },
  reduce:({commit}) => {
    commit('reduce')
  }
}
export default {
  // 开启命名空间
  namespaced:true,
  state,
  mutations,
  actions
}