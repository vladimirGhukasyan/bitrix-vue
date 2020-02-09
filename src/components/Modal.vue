<template>
    <div>
        <transition name="modal">
            <div class="overlay" @click.self="close">
                <div class="modal d-block position-absolute">
                    <div class="modal-dialog mt-0">
                        <div class="modal-content border-0  pt-0">
                            <div class="modal-body mt-0">
                                <div class="row p-4">
                                    <h4 class="modal-title text-success text-left w-100">Диалог выбора элементов
                                        <hr>
                                    </h4>

                                    <div class="col-12 mt-3">
                                        <div class="form-group row">
                                            <input type="text" class="form-control" placeholder="Поиск"
                                                   v-model="searchKey">
                                        </div>
                                        <div class="form-group row items-list">
                                            <div class="form-check w-100 text-left mt-1 "
                                                 v-for="(item,key) in  filteredItems"
                                                 :key="key" :ref="'item'+key">
                                                <label class="form-check-label p-1">
                                                    <input type="checkbox" :value="item" class="form-check-input"
                                                           v-model="selectedItems" :disabled="disable(item.id)">
                                                    {{item.title}}
                                                </label>
                                            </div>
                                        </div>
                                        <h6 class="text-left form-group row">Выбрано элементов:
                                            {{selectedItems.length}}</h6>

                                        <div class="form-group row">
                                            <button type="button" class="btn btn-secondary mr-1 mt-1"
                                                    style="font-size: .7rem" v-for="(item) in  selectedItems"
                                                    :key="item.id">
                                                <span class="float-left mr-3">{{item.title}}</span> <i
                                                    class="fa fa-times" @click="removeSelectedItem(item.id)"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'modal',
        data() {
            return {
                items: [],
                selectedItems: [],
                searchKey: '',
                is_disable: false
            }
        },

        created() {


            for (var i = 1; i <= 300; i++) {
                this.items.push({id: i, title: 'Элемент ' + i})
            }
        },
        methods: {
            removeSelectedItem(id) {
                for (var i = 0; i < this.selectedItems.length; i++) {
                    if (this.selectedItems[i].id === id) {
                        this.selectedItems.splice(i, 1);
                    }
                }
            },
            disable(id) {
                if (this.is_disable) {
                    for (var i = 0; i < this.selectedItems.length; i++) {
                        if (this.selectedItems[i].id === id) {
                            return false;
                        }
                    }

                    return true;
                }
                return false;
            },
            close() {
                this.$emit('close');
            },
        },
        watch: {
            selectedItems: function (val) {

                if (val.length >= 5) {
                    this.is_disable = true;
                } else {
                    this.is_disable = false
                }

            }
        },
        computed: {

            filteredItems() {
                const search = this.searchKey.toLowerCase().trim();
                if (!search) return this.items;
                return this.items.filter(c => c.title.toLowerCase().indexOf(search) > -1);
            },
        }
    };
</script>
<style scoped>

    .modal {
        left: unset !important;
        width: 800px;
        height: auto;
        padding: 20px;
        transition: all 0.2s ease-in;
    }

    .items-list {
        max-height: 35vh;
        overflow-y: auto;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #00000094;
        z-index: 999;
        transition: opacity 0.2s ease;
    }
</style>