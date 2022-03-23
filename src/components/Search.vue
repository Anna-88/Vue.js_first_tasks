<template>
    <div>
        <label>Search title:</label>
      <input type="search" placeholder="Serach users" v-model="valueInpt">
            {{valueInpt}}
      <button >Search users</button>

      <ul v-if="data">
          <li v-for="(user, idx) in searchUsers" :key="idx">
              <h3>Name:</h3>
              <p>{{user.name}}</p>
              <h3>Age: </h3>
              <p>{{user.age}}</p>
              <h3>Hobby:</h3> 
              <p>{{user.hobby}}</p> 
          </li>
      </ul>
    </div>
    
</template>

<script>
import {mapGetters} from 'vuex'
   export default {
       name: "Search",
       data () {
           return {
               data : [],// массив ,
               valueInpt: '',
               users2: null
           }
       },
       created () {
           this.data = this.getUsers


       },
       mounted(){
        console.log(this.getUsers);
       },
       computed: {
              ...mapGetters({
        getUsers : 'getUsers'
       }),
           searchUsers () {
            return this.data.filter(post => {
              return post.name.toLowerCase().includes(this.valueInpt.toLowerCase())
      })
    }
       }
   }
</script>

<style scoped>
 li {
    list-style-type: none;
    border: 2px solid black;
    margin: 10px;
   }
</style>
