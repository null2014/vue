<template>
  <div class="members">  
    <nav-bar><slot slot="center">會員</slot></nav-bar>
    This is members' page
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


</style>
