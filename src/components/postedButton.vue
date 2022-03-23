<template>
    <div class="form-check choice1">
        <strong>{{counterPosted}}</strong>
        <button class="btn" @click="controllPosted">
            <img v-if="posted" src="../images/postedActiv.svg">
            <img v-else src="../images/postedNoactive.svg">
        </button>
    </div>
</template>

<script>
export default {
    name: 'Posted',
    data() {
        return{
             counterPosted: 0,
             posted: false,
        }
    },
    methods: {
         controllPosted () {
                this.posted ? this.counterPosted = 0 : this.counterPosted = 1 
                this.posted = !this.posted
        }
    }
    
}
</script>

<style scoped>

</style>