<template>
    <div>
        <v-skeleton-loader v-if="loading" type="table-tbody"></v-skeleton-loader>
        <h3 v-else>No Data Found</h3>
        <v-btn color="primary" @click="initialize" class="ma-3">Reset</v-btn>
    </div>
</template>

<script>
export default {
    props:{
        loading:false,

    },
    methods:
    {
        initialize()
        {
            this.$emit('initialize')
        }

    }

}
</script>

<style>

</style>