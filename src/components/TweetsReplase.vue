<template>
    <div class="box">
       <ul>
           <li v-for="(tweet,idx) in tweets" :key="idx" class="posts"> 
        <div class="tweets" v-for="(info, idx) in user" :key="idx+2">
            <div class="text-left">
                <img class="xxsImg" :src="info.picture.large">
            </div>
            <div class="dataUser">
                <p class="nameUser">{{info.name.title}} {{info.name.first}} 
                    {{info.name.last}} <span class="nick">{{info.login.username}}</span> <span class="time">{{tweet.time}}</span></p>
            </div>
    </div>
            <p class="content">{{tweet.newTweet}}
                <InputUpdate :post="tweet" @updatePost='setNewTweet' :open='isShow'/>
            </p>
            <div class="qwery">
              <Like/>  
              <Posted/>  
              <Load/>
              <Update @changeStatus="updateP(idx)" :keyButton="idx"/>
    </div>
    </li>
       </ul>
    </div>
</template>

<script>
import InputUpdate from './inputUpdate.vue'
import Update from './updateButton.vue'
import Like from './likeButton.vue'
import Posted from './postedButton.vue'
import Load from './loadButton.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'TweetsReplase',
    components: {
        Posted,
        Load,
        Like,
        Update,
        InputUpdate
    },
      data () {
        return {
            user: null,
            tweets: null,
            isShow: false
        }
    },
    computed: {
        ...mapGetters({
            getuserTweeTPost: 'getuserTweeTPost' // массив твитов пользователя
        })
    },
    methods: {
         bringUser() {
               this.user = this.$store.state.user;
               this.tweets = this.$store.getters.getuserTweeTPost;
            },
            setNewTweet() {
                // this.tweets = this.$store.getters.getuserTweeTPost;
                this.isShow = !this.isShow
            },
            updateP(keyButton) {
                 this.tweets.filter((tweet, index) => index === keyButton).map(obj => {
                     console.log(obj)
                      this.isShow = !this.isShow
                 })
                //  console.log(keyButton)
                // console.log(this.tweets);
                //      this.isShow = !this.isShow
                //      console.log(this.tweet)
                }
    },
    mounted() {
        this.bringUser();
    }
}
</script>

<style scoped>
.box{
     border: 1px solid rgba(0,0,0, .125);
    border-radius: 0.25rem;
}

.tweets{
    display: flex;
    flex-direction: none;
}

.xxsImg{
     width: 48px;
    height: 48px;
    background: #000000;
    border-radius: 100px;
    margin: 10px;
}

.dataUser{
    display: flex;
    justify-content: space-evenly;
}

.nameUser{
     font-weight: 800;
    font-style: normal;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 3.4%;
    padding-top: 20px;
}
.nick, .time{
 font-weight: 400;
}

.more{
    margin-left: 500px;
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
li{
    list-style-type:none;
}
.posts{
    border: 1px solid #B0C4DE;
    margin: 15px;
}
.qwery{
    display: flex;
    justify-content:space-around ;
}
</style>