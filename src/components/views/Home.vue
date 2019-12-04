<template>
  <div id="home">  
    <nav-bar slot="center">購物車</nav-bar>
    <!-- <router-view/>  -->
    <div class="home-view">
      <my-swiper></my-swiper>
      <img src="~assets/img/home.png" alt=""/>
    </div>   
    <tab-control :title="title"></tab-control>
  </div>
</template>

<script>
import MySwiper from '../swiper/Swiper'
import NavBar from '../navbar/NavBar'
import TabControl from '../tabControl/TabControl'

export default {
  name:'Home',
  data(){
    return{
    title:['經典','爆款','流行']
    }
  },
  components: {
    MySwiper,
    NavBar,
    TabControl
  }
  
  
  
 
}
</script>


<style scoped>
.home-view img{
  height: 100%;
  width:100%;
}



</style>