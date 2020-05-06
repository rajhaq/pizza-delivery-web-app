<template>
    <v-dialog v-model="dialog" persistent max-width="780">
        <v-card>
            <v-card-title>
                Order #{{orderData.id}}
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <v-card outlined>
                            <v-card-title>
                                Customer
                            </v-card-title>
                            <v-simple-table>
                                <template v-slot:default>
                                    
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>{{orderData.name}}</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>{{orderData.address}}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact:</td>
                                        <td>{{orderData.number}}</td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                    </v-col>
                    <v-col cols="12">
                       <p class="title">Product List</p>
                        <v-data-table  
                                                    
                            :headers="headers"
                            :items="orderData.item"
                            hide-default-footer
                            :items-per-page="50"
                            no-data-text="No Item Added"
                        >
                        <template v-slot:item.name="{ item }">
                            {{item.name}}
                        </template>
                        <template v-slot:item.price="{ item }">
                            {{item.price}}
                        </template>
                        <template v-slot:item.quantity="{ item }">
                            {{item.quantity}}
                        </template>
                        <template v-slot:item.note="{ item }">
                            <span v-html="item.note"></span>
                        </template>
                        <template v-slot:item.subtotal="{ item }">
                            {{item.price*item.quantity}}
                        </template>
                        </v-data-table>
                    </v-col>
                    <v-col cols="12">
                    <v-card dark>
                        <v-row>
                            <v-col cols="6">
                                <v-simple-table>
                                    <template v-slot:default>
                                    <tbody>
                                        <tr>
                                            <td>Status:</td>
                                            <td><b>{{orderData.status}}</b></td>
                                        </tr>

                                    </tbody>
                                    </template>
                                </v-simple-table>
                            </v-col>
                            <v-col cols="6">
                                <v-simple-table>
                                    <template v-slot:default>
                                    <tbody>
                                        <tr>
                                            <td>Items:</td>
                                            <td><b>{{totalItems}}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Amount:</td>
                                            <td><b>{{totalAmount}}</b></td>
                                        </tr>

                                    </tbody>
                                    </template>
                                </v-simple-table>
                            </v-col>
                        </v-row>
                    </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>

export default {
    data: () => ({
        dialog:false,
        
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Name', value: 'name' },
          { text: 'Price', value: 'price' },
          { text: 'Quantity', value: 'quantity' },
          { text: 'Sub-Total', value: 'subtotal' },
          { text: 'Note', value: 'note' },
        ],
    }),
    props:
    {
        trigger: false,
        orderData: Object,

    },
    methods:
    {

    },

    computed:{
        totalAmount()
		{
			var total=0
			for(let d of this.orderData.item)
			{
				total=parseInt(total)+parseInt(d.price*d.quantity)
			
			}
			return total;

		},
	totalItems()
		{
			var total=0
			for(let d of this.orderData.item)
			{
				total=parseInt(total)+parseInt(d.quantity)
			
			}
			return total;

		},

    },
    watch:{
        trigger() {
            this.dialog=true
            }
            


    }

}
</script>
