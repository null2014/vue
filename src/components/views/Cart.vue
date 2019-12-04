<template>
  <div id="cart">  
    <nav-bar slot="center">購物車</nav-bar>
    
    
   
    
    <Main/>
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