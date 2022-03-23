<template>
    <div class=" d-flex flex-row headerCard">
        <div class="text-center">
            <button class="btn  btn-sx vector">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
        </button>
        </div>
        <div class="flex-column">
            <p class="text-left user" v-for="(info, idx) in user" :key="idx">
                {{info.name.title}} {{info.name.first}} {{info.name.last}}</p>
            <p class="text-left post">Post</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TweetHeader',
    data () {
        return {
            user: null
        }
    },
   methods: {
       bringUser() {
           setTimeout(() => {
               this.user = this.$store.state.user;
           }, 3000);
       }
   },
   mounted() {
    this.bringUser();
   }
}
</script>


<style scoped>
.headerCard{
    border-radius: 0%;
}
.vector{
    flex: none;
    order: 0;
    flex-grow: 0;
   
}

.user{
    font-weight: 800;
    font-style: normal;
    line-height: 26px;
    font: SF Pro Display;
    color: black;
    margin: 0;
}
.post{
    font-weight: 400;
    font-style: normal;
    size: 13px;
    line-height: 16.9px;
    margin: 0;
}    
</style>