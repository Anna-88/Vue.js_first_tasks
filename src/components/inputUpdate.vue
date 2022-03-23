<template>
    <div  v-if="open">
        <input type="text" v-model="post.newTweet">
        <button class="btn" @click="upDatePost">Save
            <img src="../images/done.svg">
        </button>
    </div>
</template>


<script>
import  { mapActions } from 'vuex'
export default {
    // post.newTweet"
    name: 'InputUpdate',
    props: {
        post: Object,
        open: Boolean
    },
    data() {
        return {
            newPost: '',
            objPost: {},
            isShow:false
        }
    },
    methods: {
        ...mapActions( ['addUpdatePost']),
        upDatePost() {
           this.addUpdatePost(this.post.newTweet, this.isShow)
           this.$emit('updatePost');
           this.isShow = !this.isShow

        }
    },
    mounted() {
        // console.log(this.props)
    }

    
}
</script>

<style scoped>

</style>