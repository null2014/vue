<template>
<div class="detail">
 <nav-bar>
   <slot slot="left"><button type="button" @click="goBack">返回</button></slot>
   <slot slot="center">商品詳情</slot>
   </nav-bar>
  This is detail
</div>
  
</template>

<script>
import NavBar from '../navbar/NavBar'
export default {
  name:'Detail',
  components:{
    NavBar,
  },
  methods:{
    goBack(){
      console.log('aaaa')
      this.$router.push({path:'/home'})
    }
  }
}
</script>


<style scoped>

</style>


