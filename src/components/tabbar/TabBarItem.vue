<template>
<div class="tab-bar-item">
  <div v-if="!isActive" @click="itemClick"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div> 
  <div :style="activeStyle"><slot name="item-text"></slot></div>
</div>
  
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:'',
    activeColor:{
      type:String,
      default:''
    },
    
  },
  data(){
      return{
      
    }
    },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
      
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  }
  
}
</script>

<style scoped>
.tab-bar-item{
  padding: 3px;
  flex:1;
  text-align: center;
  height: 49px;
}

</style>