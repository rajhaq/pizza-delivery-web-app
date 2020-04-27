<template>
    <v-dialog v-model="dialog" persistent max-width="350">
        <v-card>
            <v-card-title>{{title}}</v-card-title>
            <v-card-text>{{body}}</v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="green darken-1" text @click="deleteData">Agree</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    data: () => ({
        dialog:false
    }),
    props:
    {
        trigger: false,
        title: '',
        body: '',

    },
    methods:
    {
        deleteData()
        {
            this.$emit('request')
            this.dialog=false
        }

    },
    watch:{
        trigger() {
            this.dialog=true
            }


    }

}
</script>
