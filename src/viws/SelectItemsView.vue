<template>
    <div class="row pl-4">
        <h1 class="w-100">{{this.$router.currentRoute.meta.title}}</h1>
        <SelectItems/>
    </div>
</template>

<script>

    export default {
        name: "SelectItemsView",
        components:{
            SelectItems: () => import('../components/SelectItems.vue')
        }
    }
</script>

<style scoped>

</style>