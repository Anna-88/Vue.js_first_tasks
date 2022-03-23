<template>
  <div>
    <ul v-if="updated">

      {{userQ}}
       <h2>Name: {{ userQ.userName }}</h2>
       <h2>Age: {{ userQ.userAge}}</h2>

       {{userQ.post}}
       <h2 v-if="userQ.post">Post: {{userQ.post}}</h2>
       <addPost :users="users" @btn='check($event)'/>
    </ul>
    
  </div>
</template>

<script>
import addPost from "./addPost.vue"
export default {
  name: 'Card',
  components: {
    addPost
  },
  props: {
    users: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
  },
  data(){
    return { 
      userQ: null,
      updated: true
    } 
  },
  mounted(){
     this.userQ = this.users
  },
  methods: {
    check(e) {
      this.updated = false
      this.userQ = e
      this.updated = true
      console.log(this.userQ);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
