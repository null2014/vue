import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/views/Home.vue'



Vue.use(VueRouter)//this is very important
Vue.config.productionTip = false
const routes = [
  {
    path: '/home', component:Home,
     
  }]
const router = new VueRouter({
  routes,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  model:'history',
  router,
  components: {
    home:Home
  },
  render: h => h(App)
})
