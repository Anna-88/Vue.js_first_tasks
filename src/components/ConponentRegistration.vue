<template>
    <div class="registration cardRegist">
        <p>
           Enter your name:
        <input type="text" v-model="userName">
        </p>
        <p>
            <label>Enter your age: </label>
         <input type="text" v-model="userAge">
        </p>
        <p>
             <label>Enter your hobby: </label>
          <input type="text" v-model="hobby">
        </p>
        <button class="btn primary" @click="creatNewUser">Save</button>
    </div>
</template>

<script>
import { mapGetters ,  mapActions} from 'vuex' 
export default {
    name: 'ComponentRegistration',
      computed: {
          ...mapGetters({
        getUsers : 'getUsers'
       })
    },
    data() {
        return {
            user: {},
            userName: '',
            userAge: '',
            hobby: '',
        }
    },
    mounted () {
        console.log(this.$store.state.users);
    },
    methods: {
        creatNewUser () {
            this.user = {
                name: this.userName,
                age: this.userAge,
                hobby: this.hobby
            }
            this.add_new_user(this.user);
        },
       ...mapActions(['addUser']), //достаю одну функцию из actions  и эта функция есть в моем пользовании.
       add_new_user(obj) {
           console.log(obj);
           this.addUser(obj)
           console.log(this.getUsers);
       }
    }
}
</script>


<style scoped>
body{
    background: linear-gradient(to top,  );
}
 .cardRegist{
     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
     border: .5px solid #87CEFA;
     box-shadow: -3px 3px 3px -3px #87CEFA;
     margin: 0px 100px;
     padding: 15px;
     
 }
</style>