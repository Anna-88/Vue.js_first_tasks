<template>
    <div class="form-check choice1">
        <strong>{{counterLike}}</strong>
        <button class="btn" @click="controlLike">
            <img v-if="liked" src="../images/likeActive.svg">
            <img v-else src="../images/likeNoactive.svg">
        </button>
    </div>
</template>


<script>
export default {
    name: 'Like',
    data() {
        return {
            counterLike: 0,
            liked: false,
        }
    },
    methods: {
         controlLike () {
                this.liked  ?  this.counterLike = 0  : this.counterLike = 1 
                this.liked = !this.liked
        }
    }
}
</script>



<style scoped>

</style>
