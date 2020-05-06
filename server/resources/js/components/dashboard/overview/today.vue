<template>
	<v-content>
		<v-container fluid>
			<v-overlay :value="showFullLoading" :absolute="absolute">
				<v-progress-circular indeterminate size="64"></v-progress-circular>
			</v-overlay>
			<v-row justify="center">
				<v-col sm="12" md="12" lg="12">
                    <v-row >
						<v-col sm="6" md="3" lg="3">
							<v-menu
								v-model="date1"
								:close-on-content-click="false"
								:nudge-right="40"
								transition="scale-transition"
								offset-y
								min-width="290px"
								
							>
								<template v-slot:activator="{ on }">
								<v-text-field
									v-model="filters.start"
									
									label="Start"
									readonly
									prepend-inner-icon="event"
									v-on="on"
									filled
								></v-text-field>
								</template>
								<v-date-picker @change="getOrder" v-model="filters.start" @input="date1 = false"></v-date-picker>
							</v-menu>
						</v-col>
						<v-col sm="6" md="3" lg="3">
							<v-menu
								v-model="date2"
								:close-on-content-click="false"
								:nudge-right="40"
								transition="scale-transition"
								offset-y
								min-width="290px"
							>
								<template v-slot:activator="{ on }">
								<v-text-field
									v-model="filters.end"
									
									label="End"
									prepend-inner-icon="event"
									readonly
									v-on="on"
									filled
								></v-text-field>
								</template>
								<v-date-picker @change="getOrder" v-model="filters.end" @input="date2 = false"></v-date-picker>
							</v-menu>
						</v-col>
                        <v-col cols="6">
                            <v-select
                                v-model="filters.status"
                                :items="dataStatus"
                                item-text="name"
                                item-value="id"
                                label="Status"
                                required
								clearable
                                filled
								@change="getOrder"
                            ></v-select>                            
                        </v-col>
                        
                    </v-row>
					<v-toolbar flat color="white">
						<v-toolbar-title>Order List</v-toolbar-title>
						<v-divider class="mx-2" inset vertical></v-divider>
						<v-spacer></v-spacer>

					</v-toolbar>
                    <v-card flat>
                        <v-card-text>
                            <v-data-table  :headers="headers" :items="dataList" :search="search"
                                hide-default-footer
                            >
                                <template v-slot:item.created_at="{ item }">
                                    <span>{{ item.created_at | moment("from") }}</span>
                                </template>        
                                <template v-slot:item.status="{ item }">
									<v-select
										v-model="item.status"
										:items="dataStatus"
										item-text="name"
										item-value="id"
										solo
										dense
										class="mt-3"
										style="max-width: 150px"
										@change="changeStatus(item)"
									></v-select>   
                                </template>                    
                                <template v-slot:item.action="{ item }">
                                    <v-icon color="green"  @click="viewItem(item)">remove_red_eye</v-icon>
                                </template>
                                <template v-slot:no-data>
                                    <v-skeleton-loader v-if="loading" type="table-tbody"></v-skeleton-loader>
										<h3 v-else>No Data Found</h3>
                                    <v-btn color="primary" @click="initialize" class="ma-3">Reset</v-btn>
                                </template>
                            </v-data-table>
                            <div class="text-center">
                                <v-pagination
                                v-model="filters.page"
                                :length="pageCount"
                                @input="getOrder"
                                ></v-pagination>
                            </div>
                        </v-card-text>
                    </v-card>
				</v-col>
			</v-row>
			<OrderView :trigger="isView" :orderData="editedItem"></OrderView>
			
		</v-container>
		
		<v-snackbar
			v-model="snackbar"
			:vertical="snackvertical"
			:timeout="snacktimeout"
			:top="snacktop"
			:right="snackright"
			:color="snackcolor"
		>
			{{ snacktext }}
			<v-btn color="white" text @click="snackbar = false">Close</v-btn>
		</v-snackbar>
	</v-content>
</template>

<script>
import OrderView from "./OrderView";
export default {
	components: {
		OrderView
	},
	data: () => ({
		date1:false,
		date2:false,
		isAssign:false,
		setting:{},
        itemsPerPage:1,
        pageCount:2,
		search: "",
		absolute: true,
		loading: false,
		edit: true,
		dialog: false,
        dataList: [],
        dataCategory:[],
		dataBranch:[],
		dataDeliveryAgent:[],
        branch:[],
        filters:
        {
            category_id:null,
			branch_id:null,
			start:new Date().toISOString().substr(0, 10),
			end:new Date().toISOString().substr(0, 10),
			page: 1,
			show: 50,
        },
		headers: [
			{ text: "ID", align: "left", value: "id" },
			{ text: "Order Time", value: "created_at" },
			{ text: "Customer", value: "name" },
			{ text: "Address", value: "address" },
			{ text: "Total", value: "total_price" },
			{ text: "Status", value: "status" },
			{ text: "Action", value: "action" }
		],
		editedIndex: -1,
		editedItem: {
		},
		dataIndex: null,
		deleteTitle: "",
		deleteBody: "",
		isView:false,
		defaultItem: {
			name: "",
			description: "",
			parent_id: 0,
			status: 1,
			branch:[],
		},
		dataStatus: [
			{
				id:1,
				name:"On process"
			},
			{
				id:2,
				name:"On way"
			},
			{
				id:3,
				name:"Delivered"
			},
			{
				id:0,
				name:"Cancel"
			}
			
		]
	}),

	props: {
		source: String
	},
	computed: {
		formTitle() {
			return this.editedIndex === -1 ? "New Item" : "Edit Item";
		}
	},
	watch: {},
	created() {
        this.initialize();

	},
	methods: {
		async changeStatus(i)
		{
			this.loading = true;
			console.log(i)		
			try {
				let { data } = await axios({
					method: "get",
					url: "/app/order/"+i.id+"/edit",
					params:{
						status: i.status
					},

				});
				if (data.status) {
					this.snacks("Successfully Changed", "green");
					this.close();
				} else {
					this.snacks("Failed", "red");
					this.loading = false;
				}
			} catch (e) {
				this.snacks("Error, Server issue", "red");
				this.loading = false;
			}


		},

		async initialize() {
			this.loading=true;
			this.filters.page=1
			this.getOrder();

        },
        async getOrder()
        {
            this.loading=true;
            try {
				let { data } = await axios({
					method: "get",
                    url: "/app/order",
                    params: this.filters
				});
                this.dataList = data.data;
                this.itemsPerPage=data.per_page;
                this.pageCount=data.last_page;
				this.filters.page=data.current_page
			this.loading=false;

			} catch (e) {
				this.loading=false;                
            }
		},
		
		editItem(item) {
			this.$router.push('/dashboard/order/edit/'+item.id);
		},
		save(item) {
			this.$router.push('/dashboard/order/add');
		},
		deleteItem(item) {
			this.dataIndex = this.dataList.indexOf(item);
			this.deleteTitle = "Are you sure you want to delete this item?";
			this.isDelete = !this.isDelete;
		},
		viewItem(item) {
			this.editedItem = Object.assign({}, item);
			console.log(item);
			this.isView=!this.isView;

		},
		assignItem(item) {
			this.dataIndex = this.dataList.indexOf(item);
			this.editedItem = Object.assign({}, item);		
			this.isAssign=!this.isAssign;

		},
		close() {
			this.dialog = false;
			this.isAssign = false;
			this.loading = false;
		},
		async remove() {
			this.loading=true;
			try {
				let { data } = await axios({
					method: "delete",
					url: "/app/order/" + this.dataList[this.dataIndex].id
				});
				if (data.status) {
					this.snacks('Successfully Done','green')
					this.dataList.splice(this.dataIndex, 1);
					this.close();				
				}
				else
				{
					this.snacks(data.data,'red')
					this.loading = false;
				}

			} catch (e) {
				this.snacks('Operation Failed','red')
				this.loading = false;
			}
		}
	}
};
</script>