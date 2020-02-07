<template>
    <div class="index">
       
        <h3> 首页index.vue start</h3>
        <!-- <h1 v-text="name"></h1> -->
        <router-view/>
        <h3> index.vue end</h3>
    </div>
</template>

<script>
export default {
    name: 'index',
    data(){
        return {
            name: '123'
        };
    },
};
</script>

<style lang='css'>
    .index{
        margin-top: 90px;
        margin-bottom: 50px;
    }
</style>
