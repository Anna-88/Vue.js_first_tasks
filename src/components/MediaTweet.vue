<template>
    <div class="box">
        <div class="tweets" v-for="(info, idx) in user" :key="idx">
            <div class="text-left">
                <img class="xxsImg" :src="info.picture.large">
            </div>
            <div class="dataUser">
                <p class="nameUser">{{info.name.title}} {{info.name.first}} 
               {{info.name.last}} <span class="nick">{{info.login.username}}</span> <span class="time">0h</span></p>
                <button class="btn more">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                </button>
          </div>
        </div>
         <input type="text" placeholder="Enter your tweet" v-model="newTweet" class="newTweet">
         <p class="content" v-if="newTweet">Your new tweet: {{this.newTweet}}</p>
         <button class="btn newTweet" @click="addnewTweet">Add new Tweet
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
             <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
         </button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Media',
    data() {
        return {
            newTweet: '',
            user: null,
            objPost: null
        }
    },
    computed: {
        ...mapGetters({
            getuserTweeTPost: 'getuserTweeTPost'
        }),

    },
    methods: {
        ...mapActions( ['addPost']),
        addnewTweet () {
        let timeNow = new Date;
           this.objPost = {
               time: timeNow.toLocaleDateString(),
               newTweet : this.newTweet,
               open: false
           }
            this.addPost(this.objPost)
            console.log(this.$store.getters.getuserTweeTPost)
            },
         bringUser() {
               this.user = this.$store.state.user;
           }    
    },
    mounted () {
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
    border: 1px solid rgba(0,0,0, .125);
    margin: 10px 150px;
}

.newTweet{
    width: 70%;
    margin-top: 40px;
}
</style>