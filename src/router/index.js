import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../conponents/movie/List.vue'


Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:'active',
  routes:[   
    {path:'/',redirect:'/in_theaters'},
    // {path:'/',component:{template:"<h1>hell</h1>"}},
    {path:'/in_theaters',component:MovieList},
    {path:'/coming_soon',component:MovieList},
    {path:'/top250',component:MovieList}
  ]
})
