<template>
    <div>
    <ul class="list" v-if="show">
        <li v-for="user of users" :key="user.name">{{user.name}}</li>
    </ul>
    <button @click="show = !show"> Show Users name </button>
    </div>
</template>

<script>
export default {
    name: "Item",
    data() {
        return{
            show: false,
            users: [{name: 'Ann'},{name: 'Denis'},{name: 'Olya'}]
        }
    },
    methods: {
    }
}
</script>

<style scoped>

</style>