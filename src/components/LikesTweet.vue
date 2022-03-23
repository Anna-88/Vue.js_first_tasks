<template>
    <div class="box">
        <div class="tweets" v-for="(info, idx) in user" :key="idx+2">
            <div class="text-left">
               <img class="xxsImg" :src="info.picture.large">
            </div>
            <div class="dataUser">
                <p class="nameUser">{{info.name.title}} {{info.name.first}} {{info.name.last}}
                <span class="nick">{{info.login.username}}</span> <span class="time">0h</span></p>
                <button class="btn more">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                </button>
           </div>
       </div>
    <p class="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Dignissimos expedita ad mollitia reiciendis, porro veritatis nam quam assumenda doloribus deserunt magni, 
        nisi amet placeat, praesentium inventore libero laborum animi? Beatae.
    </p>
    <div class="qwery">
                <div class="form-check choice1">
                    <strong>0</strong>
                   <button class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </button>
                </div>
                <div class="form-check choice1">
                    <strong>0</strong>
                  <button class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                 </button>
                </div>
                <div class="form-check choice1">
                    <strong>0</strong>
                   <button class="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                  </button>
                </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Likes',
    data() {
        return {
            user: null
        }
    },
     methods: {
         bringUser() {
               this.user = this.$store.state.user;
       }
    },
    mounted() {
        this.bringUser();
    }
}
</script>


<style scoped>
.box{
     border: 1px solid rgba(0,0,0, .125);
    border-radius: 0.25rem;
}

.tweets{
    display: flex;
    flex-direction: none;
}

.xxsImg{
     width: 48px;
    height: 48px;
    background: #000000;
    border-radius: 100px;
    margin: 10px;
}

.dataUser{
    display: flex;
    justify-content: space-evenly;
}

.nameUser{
     font-weight: 800;
    font-style: normal;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 3.4%;
    padding-top: 20px;
}
.nick, .time{
 font-weight: 400;
}

.more{
    margin-left: 500px;
}

.content{
    padding: 0 110px;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 3.4%;
    text-align: justify;
}

.qwery{
    display: flex;
    justify-content:space-around ;
}


</style>