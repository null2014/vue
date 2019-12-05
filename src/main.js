import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
 


import Home from './components/views/Home.vue'
import Cart from './components/views/Cart.vue'
import Profile from './components/views/Profile.vue'
import Members from './components/views/Members.vue'
import Detail from './components/views/Detail.vue'



Vue.use(Mint)
Vue.use(VueAwesomeSwiper)

Vue.use(VueRouter)//this is very important
Vue.config.productionTip = false
const routes = [
  {
    path: '/', component:Home,
     
  },
  {
    path: '/home', component:Home,
     
  },
{
    path: '/cart', component:Cart,
     
  },
{
    path: '/profile', component:Profile,
     
  },
  {
    path: '/members', component:Members,
     
  },
{
    path: '/detail', component:Detail,
     
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
    cart: Cart,
    profile:Profile
  },
  render: h => h(App)
})
