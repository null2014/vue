<template>
  <div id="home">  
    <nav-bar slot="center">購物車</nav-bar>
    <!-- <router-view/>  -->
    <div class="home-view">
    <!-- <swpier><img src="~assets/img/home.png" alt=""/>
    </swpier> -->
    <img src="~assets/img/home.png" alt=""/>
    <tab-control :title="title"></tab-control>
    </div>
   
  </div>
</template>

<script>
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