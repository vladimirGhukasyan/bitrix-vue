<template>
    <div class="row pl-4">
      <div class="col-12">
          <h1 class="w-100">{{this.$router.currentRoute.meta.title}}</h1>
          <SelectedItems/>
          <SelectItems/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MergeComponentView",
        components: {
            SelectItems: () => import('../components/SelectItems.vue'),
            SelectedItems: () => import('../components/SelectedItems.vue')
        }
    }
</script>

<style scoped>

</style>