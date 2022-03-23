<template>
    <div>
        <button class="btn update" @click="change">
            <img src="../images/update.svg">
        </button>
    </div>
</template>

<script>
export default {
    name: 'Update',
    props: {
        keyButton: Number
    },
    data () {
        return{
            h: '',
        }
    },
    methods: {
           change() {
                this.$emit('changeStatus')
                // console.log(this.keyButton) 
               }

            }
    }


</script>

<style scoped>
</style>