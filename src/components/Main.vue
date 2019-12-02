<template>
  <div class="main">
  <tab-bar class="tab-bar">
    <tab-bar-item class="tab-bar-item" path="/home" activeColor="#00d8a0">
      <img src="../assets/img/首页.png" alt="" slot="item-icon"/>
      <div slot="item-text">首頁</div>
    </tab-bar-item>
     <tab-bar-item class="tab-bar-item" activeColor="#00d8a0">
      <img src="../assets/img/购物.png" alt="" slot="item-icon"/>
      <div slot="item-text">購物車</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src="../assets/img/会员.png" alt="" slot="item-icon"/>
      <div slot="item-text">會員</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src="../assets/img/扫码.png" alt="" slot="item-icon"/>
      <div slot="item-text">掃一掃</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src="../assets/img/我的.png" alt="" slot="item-icon"/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>

import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'

export default {
  name: 'Main',
  components:{
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
  width:24px;
  height: 24px;
  margin-top:2px;
  vertical-align: middle;
  margin-bottom:1px;
}
</style>
