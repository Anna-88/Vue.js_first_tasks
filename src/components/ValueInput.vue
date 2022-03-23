<template>
    <div>
        <p>Enter your name:
            <input type="text" v-model="userName" placeholder="Enter your name">
        </p>
        <p>Enter your age: 
            <input type="text" v-model="userAge" placeholder="Enter your age">
        </p>
        <button @click="addUser">Save</button>
        <div v-for="(user,idx) in users" :key="idx">
        <Card :users="user"/>
        </div>
    </div>

</template>

<script>
import Card from "./Card.vue"

export default {
    name: "User",
    components: {
      Card 
    },
    data() {
        return{
         users: [],
         values: 123
        }
    },
    computed:{
        filtredUsers(){
           return this.users.filter((user) => user.userAge > 18)
        }
    },
    methods: {
        addUser () {
            this.users.push(
                {
                    userName: this.userName,
                    userAge: this.userAge,
                }
            )
        }
    }

}
</script>

<style scoped>

</style>