<template>
  <div id="home">  
    <nav-bar>購物車</nav-bar>
    <router-view/> 
    <div>
      dddd
    </div>
    <Main/>
  </div>
</template>

<script>
import NavBar from '../navbar/NavBar'
import Main from '../Main'

export default {
  name:'Home',
  components: {
    Main,
    NavBar 
  }
  
  
  
 
}
</script>


<style scoped>



</style>