<template>
  <div class="about">
    <h1>This is an about page</h1>


    <!-- <library /> -->
  </div>
</template>

<script>
import axios from 'axios';




export default {
    name: "About",

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
