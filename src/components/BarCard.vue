<template>
    <div>123</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "BarCard",
    date() {
        return {
            info: null
        }
    },
    mounted () {
      axios 
        .get('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
         .then(response => this.info = response)
    }
}
</script>

<style scoped>
</style>
