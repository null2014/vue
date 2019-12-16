<template>
  <div class="members">  
    <nav-bar><slot slot="center">我的會員</slot></nav-bar>
  <div class="members-item">
      <span>暱稱:vuejs</span>
      <p>等級:5</p>
      <img src="~assets/img/timg.jpeg" alt="">
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import NavBar from '../navbar/NavBar'
export default {
  name: 'Members',
  components: { 
    NavBar
  }
}
</script>

<style>

.members-item{
  display: flex;

}
.members-item span{
  flex-direction: column;
}
.members-item img{
  padding: 3px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  flex-direction: row;
}

</style>
