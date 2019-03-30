import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import vuexModules from './modules'  //组件 state

import createPersistedState  from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: vuexModules,
  plugins: [createPersistedState({ 
    storage: window.sessionStorage 
  })] 
})
export default store