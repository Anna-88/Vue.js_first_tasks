<template>
    <div class="counter">
        <button @click="powCounter">-1</button>

        {{doneTodosCount}}
        {{$store.getters.powCounter}} 
    </div>
</template>

<script>
 export default {
     name: "Counter",
     components: {},
     data() { 
         return{
        counter: 0,
        }
    },
    computed: {
         doneTodosCount () {
            return this.$store.getters.doneTodosCount +  this.counter
        }
    },
    methods: {
        decrement() {
            return this.counter = this.counter - 1;
        },
       async powCounter () {
            await this.$store.dispatch('powCounter', this.$store.getters.doneTodosCount + 1);
        }
  
    }
}
</script>

<style scoped>
 .counter{
     border: black;
     color: blueviolet;
     display: -ms-flexbox;
 }
 
</style>
