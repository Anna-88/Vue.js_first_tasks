<template>
    <div class="">
      <TweetHeader />
      <TwetBackImg/>
      <CardUser />
      <TweetNav />
    </div>
</template>


<script>
import TweetHeader from './TwitHeader.vue'
import TwetBackImg from './TweetBacgImg.vue'
import CardUser from './CardUserTwe.vue'
import TweetNav from './TweetsNav.vue'
import { mapActions } from 'vuex'

export default {
    name: 'Tweetss',
    components: {
        TweetHeader,
        TwetBackImg,
        CardUser,
        TweetNav
    },
    data () {
        return{
            url: '',
            user: null
        }
    },
    computed: {
        ...mapActions({
            takeUser: 'takeUser'
        }),
         bringUser() {
        return this.$store.getters('getUser')
       }
    },
    methods: {
        //  requestUser () {
        //   this.url  = 'https://randomuser.me/api/?results=1'
        //   axios
        //     .get(this.url)
        //         .then(response => this.user = response.data.results);
        // },
         bringUser2() {
           setTimeout(() => {
            //    this.user = this.$store.state.user;
               console.log(this.$store.state.user)
           }, 7000);
       }
       
    

    },
    mounted() {
        // this.requestUser();
        // console.log(this.$store.state.user);
         this.$store.dispatch('takeUser')
         this.bringUser2();

    }
}
</script>


<style scoped>

</style>