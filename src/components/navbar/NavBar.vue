<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>  
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  
}
</script>

<style>
.nav-bar{
  top:0px;
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  position: fixed top;
}
.left, .right{
  width: 60px;
  background-color:#d81e06;
  
}
.center{
  flex:1;
  background-color:#d81e00;
  color:white;
  
}


</style>
