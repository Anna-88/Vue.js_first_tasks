<template>
    <div class="cardCity">
        <input type="text" placeholder="Enter your city" v-model="newCity">
        <button @click="addNewCity">add new City</button>
        <ul>
            {{cityName}}
        <li v-for="(city, idx) in cityName" :key="idx"><h2>{{city}}</h2>
            <ShowWeather :nameCity="city"/>
            <button type="button" @vievDetalis="check(console.log($event))">Show weather</button>
            <button @click="deleteCity(idx)">Delete city</button>
        </li>
        </ul>
        <!-- {{infoWeather}} -->
    </div>
</template>

<script>
import ShowWeather from './Showweather.vue'

export default {
    name: "CardWeather",
    components: {
        ShowWeather
    },
    data(){
        return{
            cityName:  localStorage.getItem('Cities').split(',').length > 1 ? localStorage.getItem('Cities').split(',') :['Kharkiv', 'Kiev', 'Dnipropetrovsk', 'Lviv', 'Odessa'],
            infoWeather: null,
        }
    },
    methods: {
        addNewCity (){
            let newArr = this.cityName.push(this.newCity)
            localStorage.setItem('Cities', this.cityName)
              return newArr
         },
         deleteCity(idx){
             this.cityName = this.cityName.filter((city, index) => index !== idx)
                        localStorage.setItem('Cities', this.cityName)

         },


         check(e) {
             console.log(123456);
             console.log(e);
         }
        
    },
    mounted () {
    }
    
}
</script>


<style scoped>
.cardCity{
    margin: 50px 10px;
}
li{
    list-style-type: none;
}
</style>