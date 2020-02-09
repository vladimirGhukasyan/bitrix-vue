<template>
    <div id="app">
        <div class="container justify-content-center">
            <div class="row">
                <div class="col-3 border-right">
                    <ul class="nav flex-column">
                        <MenuItem v-for="(r,i) in routes" :key="i" :route="r"/>
                    </ul>
                </div>
                <div class="col-9">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {
            MenuItem: () => import('./components/MenuItem.vue')
        },
        computed: {
            routes() {
                return this.$router.options.routes;
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    h1{
        font-size: 2em;
        text-align: left;
    }
</style>
