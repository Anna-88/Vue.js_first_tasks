<template>
    <div>
        <input class="input-group-sm text center enterPost" type="text" v-model="postToday">
        <button class="btn" @click="sendPost">Add Post</button>
    </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'TweetToday',
    data () {
        return {
         postToday: ''
        }
    },
    computed: {
        ...mapGetters({
            getPostToday: 'getPostToday'
        })
    },
    methods: {
        ...mapActions(['addPostToday']),
        sendPost() {
            this.addPostToday(this.postToday) //отправка поста в store
            this.$emit('postSave') // создаю поль соб 
        }
    },
    mounted() {
        
    }
}
</script>


<style scoped>
.enterPost{
    width: 80%;
}
</style>