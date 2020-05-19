import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from './components/Home.vue'
import Tunes from './components/Tunes.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

let state = {
  toggled: false
}

let mutations = {
  setBoolean(state, myBoolean) {
    state.toggled = myBoolean
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

const router = new VueRouter({
  routes: [{
    component: Home,
    path: '/'
  }, {
    component: Tunes,
    path: '/tunes'
  }]
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
