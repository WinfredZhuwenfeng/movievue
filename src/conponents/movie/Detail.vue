<template>
<div>
  <h1>{{movie.title}}</h1>
  <img :src="movie.images.large" :alt="movie.title">
  <p>导演{{[...movie.directors].name}}</p>
  <p>主演{{movie.casts}}</p>
  <p>剧情{{movie.summary}}</p>
  <!-- hello -->
</div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return {
        movie:{}
      }
    },
    created(){
      const id = this.$route.params.id
      this.getMovieDetail(id)
    },
    methods:{
      async getMovieDetail(id){
        const res = await axios.get(`/api/movie/subject/${id}`)
        // console.log(res.data)
        this.movie = res.data
        console.log([name][...res.data.directors])
      }
    }
  }

</script>

<style>
  
</style>
