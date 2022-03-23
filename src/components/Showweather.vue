<template>
    <div v-if="infoWeather">
       <div v-for="(day, idx) in infoWeather" :key="idx">
           <p>data: {{day.date}}</p>
           <p>maxtemp_c: {{day.day.maxtemp_c}} </p>
           <p>mintemp_c: {{day.day.mintemp_c}}</p>
               <img :src="day.day.condition.icon" >
               
       </div>
    </div>
    <div v-else>
        <p>You made a mistake in the name city. Try again.</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ShowWeather',
    props: {
        nameCity: String
    },
    data(){
        return {
            infoWeather: '',
            url: '',
        }
    },
    methods: {
        creatUrl(nameCity){
             this.url = `http://api.weatherapi.com/v1/forecast.json?key=badf4c40bcd7404b93b153447210211&q=${nameCity}&days=7`
             axios
                .get(this.url)
                .then(response => this.infoWeather = response.data.forecast.forecastday);
       },
    },
    mounted(){
        this.creatUrl(this.nameCity)
        this.$emit('vievDetalis',this.nameCity)

    }
}
</script>


<style scoped>

</style>