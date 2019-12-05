<template>
<div class="detail">
 <nav-bar><slot slot="center">商品詳情</slot></nav-bar>
  This is detail
</div>
  
</template>

<script>
import NavBar from '../navbar/NavBar'
export default {
  name:'Detail',
  components:{
    NavBar,
  }
}
</script>


<style scoped>

</style>


