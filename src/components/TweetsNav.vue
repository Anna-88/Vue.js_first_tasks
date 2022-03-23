<template>
   <div>
   <ul class="nav navTweet">
       <li class="nav-item tweets"><a href="#" class="tweetsA" @click="nameComponent = 'Tweets'">Tweet today </a></li>
       <li class="nav-item tweeRep"><a href="#" class="tweeRepA" @click="nameComponent = 'TweetsReplase'">My Tweets</a></li>
       <li class="nav-item media"><a href="#" class="mediaA" @click="nameComponent = 'Media'">Media</a></li>
       <li class="nav-item like"><a href="#" class="likeA" @click="nameComponent = 'Likes'">Likes</a></li>
   </ul>
      <component :is="nameComponent"/>
   </div>
</template>

<script>
import Tweets from './Tweets.vue'
import TweetsReplase from './TweetsReplase.vue'
import Likes from './LikesTweet.vue'
import Media from './MediaTweet.vue'


export default {
    name: 'TweetNav',
    components: {
        Tweets,
        TweetsReplase,
        Likes,
        Media
    },
    data(){
        return {
            nameComponent: ''
        }
    }
}
</script>

<style scoped>
.navTweet{
    display: flex;
    justify-content: space-around;
}
.tweetsA, .tweeRepA, .mediaA, .likeA{
    font-weight: bold;
    font-size: 15px;
    font-style: normal;
    line-height: 130%;
    letter-spacing: -0.02em;
    color:black;
}

.tweetsA:hover{
   text-decoration: underline 3px #00BFFF;
}
.tweeRepA:hover{
   text-decoration: underline 3px #00BFFF;
}
.mediaA:hover{
   text-decoration: underline 3px #00BFFF;
}
.likeA:hover{
   text-decoration: underline 3px #00BFFF;
}
</style>