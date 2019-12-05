<template>
  <div class="main">
  <tab-bar class="tab-bar">
    <tab-bar-item class="tab-bar-item" path="/home" activeColor="#d81e06" >
      <img src="~assets/img/首页.png" alt="" slot="item-icon"/>
      <img src="~assets/img/首页_active.png" alt="" slot="item-icon-active"/>
      <div slot="item-text">首頁</div>
    </tab-bar-item>
    <tab-bar-item class="tab-bar-item" path="/members" activeColor="#d81e06">
      <img src="../assets/img/会员.png" alt="" slot="item-icon"/>
      <img src="~assets/img/会员_active.png" alt="" slot="item-icon-active"/>
      <div slot="item-text">會員</div>
    </tab-bar-item>
     <tab-bar-item class="tab-bar-item" path="/cart" activeColor="#d81e06">
      <img src="~assets/img/购物车.png" alt="" slot="item-icon"/>
      <img src="~assets/img/购物车_active.png" alt="" slot="item-icon-active"/>
      <div slot="item-text">購物車</div>
    </tab-bar-item> 
    <!-- <tab-bar-item class="tab-bar-item" activeColor="#d81e06">
      <img src="../assets/img/我的订单.png" alt="" slot="item-icon"/>
      <img src="~assets/img/我的订单_active.png" alt="" slot="item-icon-active"/>
      <div slot="item-text" style="font-size:14px">我的訂單</div>
    </tab-bar-item> -->
    <tab-bar-item class="tab-bar-item" path="/profile" activeColor="#d81e06">
      <img src="~assets/img/我的.png" alt="" slot="item-icon"/>
      <img src="~assets/img/我的_active.png" alt="" slot="item-icon-active"/>
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
      isActive:'',
      
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
