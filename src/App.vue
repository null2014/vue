<template>
  <div id="app">  
    <Main/>
    <router-view/> 
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
