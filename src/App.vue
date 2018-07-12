<template>
  <div>
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './conponents/Sidebar/Sidebar.vue'
import Navbar from './conponents/Navbar/Navbar.vue'
import router from './router/index.js'
  export default {
    // name: 'App',
    data (){
      return {
        title:'hello'
      }
    },
    components:{
      Sidebar,
      Navbar
    }
  }
</script>

<style>
  
</style>
