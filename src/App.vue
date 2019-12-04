<template>
  <div id="app">  
    
    <router-view/> 
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    Main,
  
  }
}
</script>

<style>


</style>
