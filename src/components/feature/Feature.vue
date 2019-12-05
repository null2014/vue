<template>
  <div class="feature">
    <div class="feature-item" v-for="(item,index) in features" @click="featureClick(index)">
    <img src="~assets/img/timg.jpeg" alt="">
    <span>{{item.title}}</span>
  </div>
  </div>
</template>


<script>
export default {
  name:'Feature',
  props:{
    type:Array,
    default(){
      return[]
    }
  },
  data(){
    return{
      features:[{
        title:'皮卡丘'
      },
      { 
        title:'皮卡丘'
      },
      {
        title:'皮卡丘'
      },
      {
        title:'皮卡丘'
      }]
    }
  },
  methods:{
    featureClick(index){
      //跳轉到對應到頁面
      console.log(index);
      this.$router.push({path:'/detail'})
    }
  }

  
}
</script>



<style scoped>
.feature{
  height: 100%;
  display: flex;
  flex-direction:row;
  padding: 6px;
  
}
.feature-item{
  flex:1;
  flex-direction:column;
  
}
.feature img{
  width: 85%;
  height: 85%;
  border-radius: 100%;
  position: relative;
}
.feature span{
  font-size:15px;
  justify-content: center;
 

}
</style>