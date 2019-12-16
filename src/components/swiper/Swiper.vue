<template>
    <div class="my-swiper">
    <!-- <swiper :optops="swiperOption" class="swiper-menu">
      <swiper-slide><img src="~assets/img/home.png" alt=""/></swiper-slide>
      <swiper-slide><img src="~assets/img/home_1.png" alt=""/></swiper-slide>
      <swiper-slide><img src="~assets/img/home_3.png" alt=""/></swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper> -->
    <swiper>
      <swiper-slide><slot></slot></swiper-slide>
      <swiper-slide><slot></slot></swiper-slide>
      <swiper-slide><slot></slot></swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    </div>
  </div>
  
</template>


<script>

export default {
  name:'MySwiper',
  data(){
    return{
      // swiperOption:{
      //   loop:true
      // }
    }
  }
  
}
</script>

<style>
    /* .my-swiper {
      width: 100%;
      height: 100%;
    } */
    /* .swiper-slide img{
      overflow: hidden;
      width: 100%;
      height: 100%;;
      text-align: center;
      font-size: 18px;
      background: #fff;

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

    } */

</style>