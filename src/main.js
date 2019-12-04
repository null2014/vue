import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import Home from './components/views/Home.vue'
import Cart from './components/views/Cart.vue'


Vue.use(Mint)
Vue.use(VueRouter)//this is very important
Vue.config.productionTip = false
const routes = [
  {
    path: '/home', component:Home,
     
  },
{
    path: '/cart', component:Cart,
     
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
    home: Home,
    cart:Cart
  },
  render: h => h(App)
})
