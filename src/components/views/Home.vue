<template>
  <div id="home"> 
    <nav-bar><slot slot="center">低調的D吖</slot></nav-bar>
    <scroll class="content"> 
    <!-- <router-view/>  -->
    <div class="home-view">
      <!-- <my-swiper></my-swiper> -->
      <swiper :optops="swiperOption" class="swiper-menu">
      <swiper-slide><img src="~assets/img/home.png" alt=""/></swiper-slide>
      <swiper-slide><img src="~assets/img/home_3.png" alt=""/></swiper-slide>
      <swiper-slide><img src="~assets/img/home_1.png" alt=""/></swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
      <feature class="feature"></feature>
    </div>   
    <tab-control :title="title" @click="tabClick(index)"></tab-control>
    <div>
    <ul>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
      <li class="wo"></li>
    </ul>
    </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../scroll/Scroll'
import Feature from '../feature/Feature'
import MySwiper from '../swiper/Swiper'
import NavBar from '../navbar/NavBar'
import TabControl from '../tabControl/TabControl'


export default {
  name:'Home',
  data(){
    return{
      swiperOption:{
        loop:true
      },
    title:['經典','爆款','流行'],
    }
  },
  components: {
    Scroll,
    Feature,
    MySwiper,
    NavBar,
    TabControl
  },
  methods:{
    tabClick(index){
      this.currentIndex=index

    },
   
  }
  
  
  
 
}
</script>


<style scoped>
/* .content{
  width:100%;
  overflow: hidden;
  left: 0;
  top: 44px;
  bottom: 49px;
  position: absolute;
}
  */
.my-swiper {
      width: 100%;
      height: 100%;
    } 
 .swiper-slide img{
      overflow: hidden;
      width: 100%;
      height: 100%;;
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      /* display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex; */
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding: 3px;
      border-bottom: 1px solid #ffffff

    }


</style>