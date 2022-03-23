<template>
   
<div class="box">
   <div class="tweets" v-for="(info, idx) in user" :key="idx+2">
       <div class="text-left">
           <img class="xxsImg" :src="info.picture.large">
       </div>
       <div class="dataUser">
           <p class="nameUser">{{info.name.title}} {{info.name.first}} 
               {{info.name.last}}  <span class="nick">{{info.login.username}}</span>   <span class="time">0h</span></p>
           <button class="btn more">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
           </button>
       </div>
   </div>
   <div> 
        <p class="content" v-if="addTweet">{{this.postToday}}111</p>
        <TweetToday v-else-if="!addTweet"  @postSave="bringPost()"/>
    </div>
        
    <div class="qwery">
        <Like/>
        <Posted/>
        <Load/>
    </div>
</div>
</template>

<script>
import Like from './likeButton.vue'
import Posted from './postedButton.vue'
import Load from './loadButton.vue'
import {mapGetters} from 'vuex'
import TweetToday from './TweetToday.vue'
export default {
    name: 'tweets',
    components: {
        TweetToday,
        Like,
        Posted,
        Load
    },
    data () {
        return {
            user: null,
            addTweet: false,
            postToday: null 
        }
    },
    computed: {
        ...mapGetters({
            getPostToday: 'getPostToday'
        })
    },
    methods: {
         bringUser() {
               this.user = this.$store.state.user;
       },
        bringPost () {
         this.postToday = this.$store.getters.getPostToday
         this.addTweet = !this.addTweet
         console.log(this.postToday)
        }
    },
    mounted() {
        this.bringUser()
    }
}
</script>

<style scoped>
.dataUser{
    display: flex;
    justify-content: space-evenly;
}
.box{
    border: 1px solid rgba(0,0,0, .125);
    border-radius: 0.25rem;
}
.tweets{
    display: flex;
    flex-direction: none;
}
.qwery{
    display: flex;
    justify-content:space-around ;
}

.xxsImg{
    width: 48px;
    height: 48px;
    background: #000000;
    border-radius: 100px;
    margin: 10px;
}

.nameUser{
    font-weight: 800;
    font-style: normal;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 3.4%;
    padding-top: 20px;
}

.more{
    margin-left: 500px;
}

.nick, .time{
    font-weight: 400;
}
.content{
    padding: 0 110px;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 3.4%;
    text-align: justify;
}

</style>