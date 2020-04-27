<template>
	<v-content >
		<v-container fluid> 
			<v-overlay :value="showFullLoading" :absolute="absolute">
				<v-progress-circular indeterminate size="64"></v-progress-circular>
			</v-overlay>
				<ToolbarLeft>
					<v-spacer></v-spacer>
					<v-text-field
						v-model="search"
						append-icon="search"
						label="Search"
						hide-details
						outlined
						dense
					></v-text-field>
				</ToolbarLeft>
			<Breadcrumbs/>
			<v-row justify="center">
				<v-col sm="12" md="12" lg="12">
					<v-data-table color="white" :headers="headers" :items="dataList" :search="search" class="elevation-4">
						<template v-slot:item.action="{ item }">
							<v-icon small @click="editItem(item)">edit</v-icon>
						</template>
						<template v-slot:item.status="{ item }">
							<v-chip :color="item.status?'green':'red'" text-color="white" >{{item.status?'Active':'Disable'}}</v-chip>
						</template>
						<template v-slot:no-data>
							<NoDataList :loading="loading" @initialize="initialize"></NoDataList>
						</template>
					</v-data-table>
				</v-col>
			</v-row>
			<v-btn bottom color="accent" dark fab fixed right @click="dialog = !dialog">
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</v-container>
        <v-dialog v-model="dialog" max-width="500px" persistent>
            <v-card>
				<v-card color="primary" dark tile flat >
					<v-card-title
					class="headline"
					v-text="formTitle"
					></v-card-title>
         		 </v-card >
                <v-card-title>
                </v-card-title>

                <v-card-text>
                    <v-container >
						<v-form ref="form" v-model="valid">
                        <v-row>
								<v-col cols="12">
									<v-text-field
										v-model="editedItem.name"
										label="Name*"
										:rules="[v => !!v || 'Name is required']"
                                        required
										outlined
									></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-select
										v-model="editedItem.status"
										:items="dataStatus"
										item-text="name"
										item-value="value"
										:rules="[v => !!v || 'Status is required']"
										label="Status"
										required
										outlined
									></v-select>
								</v-col>
								
	                        </v-row>
						</v-form>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="close">Cancel</v-btn>
                    <v-btn
                        color="primary"
                        :loading="loading"
                        :disabled="loading"
                        text
                        @click="save"
                    >Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
import Breadcrumbs from "./../../common/Breadcrumbs"
import ToolbarLeft from "./../../common/ToolbarLeft"
import NoDataList from "./../../common/NoDataList"
import DeleteModal from "./../../common/DeleteModal";
export default {
	components:{
		Breadcrumbs,
		ToolbarLeft,
		NoDataList,
		DeleteModal
	},
	data: () => ({
		isImage:false,
		valid:false,
		search: "",
		absolute: true,
		loading: false,
		edit: true,
		dialog: false,
		dataList: [],
		headers: [
			{ text: "Name", value: "name" },
			{ text: "Status", value: "status" },
			{ text: "Action", value: "action" }
		],
		editedIndex: -1,
		editedItem: {
			name: "",
			status: 1
		},
		defaultItem: {
			name: "",
			status: 1
		},
		rules: [
			value => !value || value.size < 2000000 || 'Image size should be less than 2 MB!',
		],
		dataStatus: [
			{ name: "Active", value: 1 },
			{ name: "Disable", value: 0 }
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

		async initialize() {
			this.loading=true;
			try {
				let { data } = await axios({
					method: "get",
					url: "/app/category"
				});
				this.dataList = data;
				this.loading=false;
			} catch (e) {
				this.loading=false;
				
			}

		},
		editItem(item) {
			this.edit = false;
			this.editedIndex = this.dataList.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},
		deleteItem(item) {
			const index = this.dataList.indexOf(item);
			confirm("Are you sure you want to delete this item?") &&
				this.dataList.splice(index, 1);
		},
		close() {
			this.dialog = false;
			this.loading = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			}, 300);
		},
		reset () {
			this.$refs.form.reset();

		},
		async save() {
            if(!this.valid)
            {
                this.$refs.form.validate();
                return ;
            }
            this.loading = true;
			if (this.editedIndex > -1) 
			{
				try {
					let { data } = await axios({
						method: "put",
						url: "/app/category/" + this.editedItem.id,
						data: this.editedItem
					});
					if (data.status) {
						this.snacks("Successfully Updated", "green");
						Object.assign(this.dataList[this.editedIndex], this.editedItem);
						this.close();
					} else {
						this.snacks("Failed", "red");
						this.loading = false;
					}
				} catch (e) {
					this.snacks("Failed", "red");
					this.loading = false;
				}
			} else {
				try {
					let { data } = await axios({
						method: "post",
						url: "/app/category",
						data: this.editedItem
					});
					if (data.status) {
						this.dataList.unshift(data.data);
						this.snacks("Successfully Added", "green");
						this.close();
					} else {
						this.snacks("Failed! "+data.data, "red");
						this.loading = false;
					}
				} catch (e) {
					this.snacks("Failed! "+e, "red");
					this.loading = false;
				}
			}
		}
	}
};
</script>