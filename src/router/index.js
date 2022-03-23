import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CardWeather from '../components/CardWeather.vue'
import Search from '../components/Search'
import ComponentRegistration from '../components/ConponentRegistration.vue'
import UsersRandomCard from '../components/usersRandomCard.vue'
import User from "../components/User.vue"
import Tweetss from "../components/TweetUser.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Weather',
    name: 'CardWeather',
    component: CardWeather
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/registration',
    name: 'Registration',
    component: ComponentRegistration
  },
  {
    path: '/users',
    name: 'UsersRandomCard',
    component: UsersRandomCard
  },
  { 
    path: '/user/:id', 
    name: 'User',
    props: true,
    component: User 
  },
  {
    path: '/tweetss',
    name: 'Tweetss',
    component: Tweetss
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
