<template>
    <div>
        
    </div>
</template>


<script>
import tweets from './Tweets.vue'
export default {
    name: 'ScrollTweet',
    components: {
        tweets
    },
    data() {
        return {
            name: 'tweets'
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.scroll{
    position: relative;
    width: 56px;
    height: 2px;
    background: #4A99E9;
    border-radius: 100px;
}





</style>