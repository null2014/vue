<template>
  <div id="home">  
    <nav-bar><slot slot="center">低調的D吖</slot></nav-bar>
    <!-- <router-view/>  -->
    <div class="home-view">
      <my-swiper></my-swiper>
      <feature class="feature"></feature>
    </div>   
    <tab-control :title="title" @click="tabClick(index)"></tab-control>
  </div>
</template>

<script>
import Feature from '../feature/Feature'
import MySwiper from '../swiper/Swiper'
import NavBar from '../navbar/NavBar'
import TabControl from '../tabControl/TabControl'

export default {
  name:'Home',
  data(){
    return{
    title:['經典','爆款','流行'],

    }
  },
  components: {
    Feature,
    MySwiper,
    NavBar,
    TabControl
  },
  methods:{
    tabClick(index){
      

    }
  }
  
  
  
 
}
</script>


<style scoped>
.home-view img{
  height: 100%;
  width:100%;
}



</style>