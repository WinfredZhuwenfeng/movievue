<template>
  <div>
    <h1>电影列表</h1>
    <div class="list-group" v-for="item in movies"> 
      <router-link 
        class="list-group-item" 
        :to="'/movie/'+item.id">
        <div class="media">
          <div class="media-left">       
            <img class="media-object" :src="item.images.small" :alt="item.title">
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{item.title}}</h4>
            <p>item info</p>
          </div>
        </div>
      </router-link>
    </div>
    <button @click = "loadMore">点击加载更多...</button>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return {
        movies:[],
        start:0,
        count:5
      }
    },
    watch:{
      '$route'(){
        this.start=0,
        this.movies = []
        this.loadMovie()
      }
    },
    created(){
      this.loadMovie()
    },
    methods:{
     async loadMovie (){
        const res = await axios.get(`/api/movie${this.$route.path}`,{
          params:{
            start:this.start,
            count:this.count,
          }
        })
        if(res.data.subjects.length === 0){
          return window.alert('没有更多数据了...')
        }
        this.movies = [...this.movies,...res.data.subjects]
        console.log(this.movies)
      },
      loadMore (){
        this.start+=this.count;
        this.loadMovie()
      }
    }
  }
</script>

<style>
  
</style>
