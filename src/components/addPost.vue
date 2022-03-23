<template>
    <div>
        <input type="text" placeholder="Enter your post" v-model="post">
        <button @click="addPost">Save post</button>
    </div>
</template>
<script>
   export default {
    name: "addPost",
    props: {
        users: Object
    },
    data(){
        return {
            post: ''
        }
    },
    methods: {
        addPost(){
        console.log(this.users)
        this.users.post = this.post
         this.$emit('btn', this.users)
        }
    }
}
</script>

<style scoped>
</style>
