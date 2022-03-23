<template>
    <div>
     <h1>Bitcoin Price Index</h1>
      <div v-for="(curency, idx) in info" :key="idx">{{curency.description}}: {{curency.rate}}</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Query",
    data(){
        return {
            info: null 
        }
    },
    mounted() {
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
             .then(response => {
                 this.info = response.data.bpi;
             })
             .catch(error => console.log(error));
           
    }
}

</script>

<style scoped>
</style>
