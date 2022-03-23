<template>
      <div class="form-check choice1">
            <strong>{{counterLoaded}}</strong>
            <button class="btn" @click="controlLoaded">
                <img v-if="loaded" src="../images/loaderActive.svg">
                <img v-else src="../images/loaderNoactiv.svg">
            </button>
        </div>
</template>

<script>
export default {
    name: 'Load',
    data() {
        return {
            counterLoaded: 0,
            loaded: false 
        }
    },
    methods: {
         controlLoaded () {
                this.loaded ? this.counterLoaded = 0 : this.counterLoaded = 1
                this.loaded = !this.loaded
        }
    }
    
}
</script>

<style scoped>

</style>