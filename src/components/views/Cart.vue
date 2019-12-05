<template>
  <div id="cart">  
   <nav-bar><slot slot="center">購物車</slot></nav-bar>
    
  </div>
  
</template>


<script>
import NavBar from '../navbar/NavBar'
import Main from '../Main'

export default {
  name:'Cart',
  

components: {
    Main,
    NavBar,
    
  }
  }
</script>


<style scoped>

</style>