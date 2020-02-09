<template>
    <div class="row pl-4">
        <h1 class="w-100">{{this.$router.currentRoute.meta.title}}</h1>
        <SelectedItems/>
    </div>
</template>

<script>

    export default {
        name: "SelectedItemsView",
        components: {
            SelectedItems: () => import('../components/SelectedItems.vue')
        }
    }
</script>

<style scoped>

</style>s