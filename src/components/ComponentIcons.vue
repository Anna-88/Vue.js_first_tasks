<template>
    <div class="text-center icon" >
        <p v-if="typeof infoUser == 'string'|| typeof infoUser == 'number'">{{infoUser}}</p>
        <p  v-for="(info,idx) in arrUser" :key="idx+1">{{info}}</p>
       <button class="btn btn-outline-info" :id="name" @mouseover="e">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
       </button>
       <button class="btn btn-outline-info" :id="location" @mouseover="e" >
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
</svg>
       </button>
       <button class="btn btn-outline-info" :id="email" @mouseover="e">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
       </button>
       <button class="btn btn-outline-info" :id="dob" @mouseover="e" >
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
       </button>
       <button class="btn btn-outline-info " :id="phone" @mouseover="e">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
       </button>
   </div>
</template>

<script>
export default {
    name: 'Icons',
    props:{
        user: Object
    },
    data() {
        return {
            infoUser: '',
            arrUser: [],
            name: 'name',
            location: 'location',
            email: 'email',
            dob: 'dob',
            phone: 'phone'
            }
    },
    methods: {
        e(e) {
            e.preventDefault();
            const keys = Object.keys(this.user);
            for(let i = 0; i <= keys.length; i++ ){
                if(e.target.id === keys[i]){
                    for(let value in this.user){
                        if(e.target.id === value) {
                           if(typeof this.user[value] == 'object'){
                                for(let j in this.user[value]){
                                    if(typeof this.user[value][j] !='object'){
                                        this.arrUser.push(`${j} : ${this.user[value][j]}`)
                                        this.infoUser = `${j} : ${this.user[value][j]}`
                                        // console.log(this.arrUser);
                                    } 
                                }
                           } else {
                               this.infoUser = `${value} : ${this.user[value]}`;
                           }
                        }
                    }
                }
            }
        },
        claerInfo(){
            this.arrUser = [];
            this.infoUser = ''
        }

    },
    mounted() {
         console.log(this.user);
        // console.dir(e.target.id);
        // // console.log(`${value}: ${this.user[value]}`)
        //  this.infoUser = `${value}: ${this.user[value]}`;
    }
}
</script>

<style scoped>
 button{
     margin: 10px;
 }
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
    border: 1px solid #20B2AA;
    padding: 15px;
    border-radius: 2%;
}
p{
 border: 1px solid #20B2AA;
    padding: 15px;
    border-radius: 2%;
    display: flex;
    margin: 10px; 
    align-items: center;
  justify-content: center;  
}
</style>