<template>
  <div class="tab-control">
    <!-- if you click the first tab ,index =0, -->
    <div v-for="(item,index) in title" @click="tabClick(index)" class="tab-control-item" :class="{active:index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
  
</template>



<script>
export default {
  name:"TabControl",
  props:{
    title:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
      return{
        currentIndex:0
      }
    },
  methods:{
    tabClick(index){
      console.log(index)
      this.currentIndex=this.index
    }
  }
}
</script>


<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 18px;
  background-color: #ffffff;
}
.tab-control-item{
  flex:1;
  line-height: 44px;
  height: 44px;
}
.active{
  color:red;
  
  
}
.active span{
border-bottom: 3px solid red
}



</style>