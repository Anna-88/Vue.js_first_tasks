import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 1,
        message: 'Hello people',
        books: [
            {
                id: 1,
                title: 'Горе от ума',
                finised: false 
            },{
                id: 2,
                title: 'Пеступление и наказание',
                finised: true 
            },{
                id: 3,
                title: 'Ромео и Джульета',
                finised: false 
            }
        ],
        users : [
            {
                name: 'Alina',
                age: 25,
                hobby: 'sport'
            },{
                name: 'Bob',
                age: 35,
                hobby: 'films'
            },{
                name: 'Aly',
                age: 43,
                hobby: 'sport'
            },{
                name: 'Anna',
                age: 32,
                hobby: 'read books'
            },{
                name: 'Any',
                age: 25,
                hobby: 'sport'
            },{
                name: 'Ali',
                age: 65,
                hobby: 'walks'
            },{
                name: 'Ban',
                age: 15,
                hobby: 'sport'
            },{
                name: 'Bim',
                age: 55,
                hobby: 'gardening'
            },{
                name: 'Bleck',
                age: 65,
                hobby: 'drive'
            },{
                name: 'Bella',
                age: 45,
                hobby: 'dance'
            },{
                name: 'Monika',
                age: 25,
                hobby: 'sport-drive'
            },{
                name: 'Vladimir',
                age: 45,
                hobby: 'run'
            }
        ],
        url  : 'https://randomuser.me/api/?results=1',
        user: null,
        countLike: 0,
        userTweeTPost: [],
        postToday: null
    },
    mutations: {
       increment(){
         return this.state.count++
       },
       powCounter (state, data) {
            state.count =  data;
       },
       setUser (state,data) {
           state.user = data; 
       },
       setUserTweeTPost (state, post) {
           state.userTweeTPost.push(post)
       },
       setPostToday (state, postTodayUser) {
           state.postToday = postTodayUser
        //    console.log(state.postToday);
       },
       setUpdatePost(state, post, idx, isshow) {
           return state.userTweeTPost.filter((obj, index) => index === idx).map((obj) => {
            obj.newTweet = post
            obj.open = isshow
            return obj
           })
       }
    },
    actions: {
       async powCounter(ctx, data) {
            console.log(data);
            await ctx.commit('powCounter', data); 
        },
         addUser (ctx, obj) {
             console.log(obj);
             return  this.state.users.push(obj);
        },
        takeUser ({ commit, state }) {
         axios
        .get(state.url)
          .then(response =>  commit('setUser' , response.data.results))
        },
        addPost (ctx,post) {
           ctx.commit('setUserTweeTPost', post)
        },
        addPostToday (ctx, post) {
            ctx.commit('setPostToday',post)
        },
        addUpdatePost(ctx, post, show) {
            ctx.commit('setUpdatePost', post, show)
        }
    },
    getters: {

        doneTodosCount: state => {
            return state.count;
        },
        finishedBooks: state => {
            return state.books;
        },
        returningBook : state => {
            return state.books.filter(books => books.finised);
        },
        powCounter: state => {
            return Math.pow(state.count, 2);
        },
        getUsers: state => {
            return state.users
        },
        getUser: state => {
            console.log(state.user);
            return state.user
        },

        getLike: state => {
            return state.countLike
        },
        getuserTweeTPost: state => {
            console.log(state.userTweeTPost);
            return state.userTweeTPost
        },
        getPostToday: state => {
            console.log(state.postToday);
            return state.postToday
        }
    }
})


