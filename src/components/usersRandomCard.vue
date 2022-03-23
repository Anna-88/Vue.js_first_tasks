<template>
    <div>
        <div class="card ml-5">
            <label class="form-check-label">Search users:</label>
            <input class="form-control form-control-sm search" 
                type="text" placeholder="Enter your name"
                v-model="name"
            >
          <ul v-if="users">
              <li v-for="(user, idx) in searchUsers" :key="idx" class='mt-5'>
                  <img :src="user.picture.medium" class="rounded float-start">
                  <p><em>{{user.name.title}} {{user.name.first}} {{user.name.last}}</em></p>
                  <router-link :to="{name:`User`, params: {user:user}}"  class="btn btn-success"><em>More</em></router-link>
              </li>
          </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UsersRandomCard',
    data() {
        return {
            users: null,
            url: '',
            name: ''
        }
    },
    computed:{
        searchUsers() {
            return this.users.filter( user => {
                  return user.name.first.toLowerCase().includes(this.name.toLowerCase())
            })}
    },
    methods: {
      requestUsers () {
          this.url  = 'https://randomuser.me/api/?results=25'
          axios
            .get(this.url)
                .then(response => this.users = response.data.results)
        },
       
    
    },
    mounted() {
         this.requestUsers();
    }

}
</script>


<style scoped>
ul{
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 100%;
}
li{
    list-style-type: none;
    width: 40%;
    margin: 10px;
    border: 2px solid #20B2AA;
    padding: 15px;
    border-radius: 2%;
}
</style>