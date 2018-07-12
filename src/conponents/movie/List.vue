<template>
  <div>
    <h1>电影列表</h1>
    <div class="list-group" v-for="item in movies"> 
      <a :href="item.alt" class="list-group-item">
        <div class="media">
          <div class="media-left">       
            <img class="media-object" :src="item.images.small" :alt="item.title">
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{item.title}}</h4>
            <p>item info</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return {
        movies:[]
      }
    },
    watch:{
      '$route':'loadMovie'
    },
    created(){
      this.loadMovie()
    },
    methods:{
      loadMovie (){
        axios.get(`/api/movie${this.$route.path}`)
          .then(res => {this.movies = res.data.subjects;console.log(res)})
      }
    }
  }
</script>

<style>
  
</style>
