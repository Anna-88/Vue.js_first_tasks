<template>
<div class="containerUser">
    <div class="boxUser"> 
        <div class="infoUser" v-for="(info, idx) in user" :key="idx+5">
           <img class="imgPhoto" :src="info.picture.large">
        </div>
       <div class="info">
           <button class="btn">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-three-dots">
             <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
             </svg>
           </button>
           <button class="btn follow">Follow</button>
       </div>
    </div>
       <div class="text-left cardInfo" v-for="(info, idx) in user" :key="idx+2">
            <h3 class="content">{{info.name.title}} {{info.name.first}} {{info.name.last}}</h3>
            <p>{{info.login.username}}</p>
       </div>
       <p class="text-left cardInfo2">Lorem ipsum dolor sit amet, consectetur adipising elt. Fermentum augue ut non.</p>
       <div class="checkBox" v-for="(info, idx) in user" :key="idx+1">
       <div class="form-check choice">
           <strong>Country:</strong> {{info.location.country}}, {{info.location.city}}
       </div>
        <div class="form-check choice">
            <strong>Email:</strong> {{info.email}}
       </div>
        <div class="form-check choice">
           <strong>Registered:</strong>  {{info.registered.age}} age 
       </div>
       </div>
       <div class="infoFolowing">
           <p class="form-check-label folowing" for="exampleRadios3">
            <b>0</b> Folowing
           </p>
           <p class="form-check-label folowers" for="exampleRadios3">
             <b>0</b> Folowers
           </p>
       </div>

</div>    
</template>

<script>
export default {
    name: 'CardUser',
    data() {
        return {
            user: null
        }
    },
    methods: {
        bringUser() {
           setTimeout(() => {
               this.user = this.$store.state.user;
           }, 5000);
       }
    },
    mounted() {
        this.bringUser();
    }
}
</script>

<style scoped>
.containerUser{
    margin-left: 20px;
}
.boxUser{
    display: flex;
    flex-flow: row nowrap;
}
.infoUser{
    width: 70%;
}
.info{
    width: 30%;
    padding-top: 5px;
}
.btn{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #566370;
    justify-content: center;
    align-items: center;
    padding: 0;
}
.follow{
  width: 80px;
  height: 36px;
  background-color: black;
  border-radius: 100px;
  color: white;
  font-size: 15px;
  line-height: 19,5px;
  letter-spacing: 3.4%;
  text-align: center;
  font-weight: 700;
  margin-left: 8px;
}
.content{
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 130%;
    align-items: center;
    letter-spacing: 0.01em;
    color: black;
    padding: 0;
    margin: 0 auto;
}
.imgPhoto{
    width: 133px;
    height: 133px;
    background-color: black;
    border: 4px solid #FFFFFF;
    border-radius: 100px;
    float: left;
    position: absolute;
    left: 37px;
    top: 250px;
}
.cardInfo{
    margin-left: 20px;
    margin-top: 20px;

}
.cardInfo2{
    margin-left: 20px;
    margin-top: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    color: black;
}
.checkBox{
    display: flex;
}

.infoFolowing{
    margin-top: 10px;
    margin-left: 20px;
    display: flex;
}

.folowing, .folowers{
    font-weight: 400;
    font-size: 15px;
    font-style: normal;
    line-height: 19.5px;
    letter-spacing: 0.01em;

}
.folowers{
    padding-left: 30px;
}
</style>