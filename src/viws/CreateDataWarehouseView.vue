<template>
    <div class="row pl-4">
        <h1 class="w-100">{{this.$router.currentRoute.meta.title}}</h1>
        <button type="button" class="btn btn-primary" @click="create">Создать хранилище данных</button>

    </div>
</template>

<script>

    export default {
        name: "CreateDataWarehouseView",
        methods: {
            create() {

            }
        }
    }
</script>

<style scoped>

</style>