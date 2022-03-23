<template>
    <div class="card border-success mb-3 card_user">
       <div class="text-center pictureFoto">
            <img :src="user.picture.large" class="rounded">
       </div>
        <Icons :user="user" />
    </div>

</template>

<script>
import Icons from './ComponentIcons.vue';
export default {
    name: "User",
    components: {
        Icons
    },
    props:{
        user: Object
    },
    mounted() {
        //console.log(this.$route.params);
    }

}
</script>

<style scoped>
.pictureFoto{
    margin-top: 20px;
}
.card_user{
    padding: 25px;
    margin: 25px;
}

</style>