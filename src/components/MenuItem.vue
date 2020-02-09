<template>
    <div>
        <li class="nav-item text-left">
            <router-link
                    exact-active-class="active rounded"
                    :to="{name: route.name}"
                    class="nav-link "
            >{{title}}</router-link>
        </li>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            route: {
                type: Object
            }
        },
        computed: {
            title() {
                return this.route.meta.title
                    .toLowerCase()
                    .split("-")
                    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
                    .join(" ");
            }
        }
    }
</script>

<style scoped>
 .active{
     background-color: #027CFC;
     color: white!important;
 }
</style>