<template>
  <div class="main">
  <nav-bar><div slot="center">首頁展示</div></nav-bar>
  <tab-bar class="tab-bar">
    <tab-bar-item class="tab-bar-item" path="/home" activeColor="black">
      <img src="../assets/img/首页.png" alt="" slot="item-icon"/>
      <div slot="item-text">首頁</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src="../assets/img/会员.png" alt="" slot="item-icon"/>
      <div slot="item-text">會員</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src="../assets/img/扫一扫.png" alt="" slot="item-icon"/>
      <div slot="item-text">掃一掃</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src="../assets/img/设置.png" alt="" slot="item-icon"/>
      <div slot="item-text">設置</div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import NavBar from './navbar/NavBar'
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'

export default {
  name: 'Main',
  components:{
    NavBar,
    TabBar,
    TabBarItem
  },
  
  data () {
    return {
      
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-bar-item img{
  width:30px;
  height: 30px;
  margin-top:2px;
  vertical-align: middle;
  margin-bottom:1px;
}
</style>
