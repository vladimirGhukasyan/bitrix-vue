
<template>
    <div class="row pl-4">
        <button type="button" class="btn btn-primary" @click="showModal = true">Выбрать элементы</button>
        <Modal v-show="showModal" @close="closeModal"/>
    </div>
</template>

<script>

    export default {
        name: "SelectItems",
        components: {
            Modal: () => import('./Modal')
        },
        data(){
            return {
                showModal: false
            }
        },
        methods: {
            closeModal() {
                this.showModal = false;
            }
        },

    }
</script>

