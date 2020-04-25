<template>
	<v-content >
		<v-container fluid> 
			<v-overlay :value="showFullLoading" :absolute="absolute">
				<v-progress-circular indeterminate size="64"></v-progress-circular>
			</v-overlay>
            <v-toolbar color="transparent" flat>
                <v-avatar tile color="primary" class=" elevation-12">
                    <v-icon dark>face</v-icon>
                </v-avatar>

                <v-toolbar-title class="ml-4 deep-purple--text" >{{$t('message.user.list')}}</v-toolbar-title>

                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    hide-details
                    outlined
                    dense

                ></v-text-field>
            </v-toolbar>
			<Breadcrumbs/>
			<v-row justify="center">
				<v-col sm="12" md="12" lg="12">
					<v-data-table color="white" :headers="headers" :items="dataUser" :search="search" class="elevation-4">
						<template v-slot:item.action="{ item }">
							<v-icon small @click="editItem(item)">edit</v-icon>
						</template>
						<template v-slot:item.status="{ item }">
							<v-chip :color="item.status?'green':'red'" text-color="white" >{{item.status?'Active':'Disable'}}</v-chip>
						</template>
						<template v-slot:item.type="{ item }">
							{{userType[item.type-1].text}}
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
				<v-card color="primary" dark :tile="true" flat >
					<v-card-title
					class="headline"
					v-text="formTitle"
					></v-card-title>
         		 </v-card >
                <v-card-title>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm12 md12>
                                <v-text-field
                                    v-model="editedItem.name"
                                    label="Full Name"
                                    :rules="[v => !!v || 'Name is required']"
                                    required
                                    filled
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md12>
                                <v-text-field
                                    :disabled="!edit"
                                    :rules="emailRules"
                                    v-model="editedItem.email"
                                    label="Email"
									type="email"
                                    filled
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md12>
                                <v-text-field
                                    v-model="editedItem.mobile"
                                    label="Mobile"
									filled
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md12>
                                <v-textarea v-model="editedItem.address" label="Address" filled></v-textarea>
                            </v-flex>

                            <v-flex xs12 sm12s md12 v-if="edit">
                                <v-text-field
                                    v-model="editedItem.password"
                                    :rules="passwordRules"
                                    label="Password"
                                    type="password"
                                    filled
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md12>
                                <v-select
                                    v-model="editedItem.type"
                                    :items="userType"
                                    item-text="text"
                                    item-value="value"
                                    :rules="[v => !!v || 'User type is required']"
                                    label="User Type"
                                    required
                                    filled
                                ></v-select>
                            </v-flex>
                            <v-flex xs12 sm12 md12>
                                <v-select
                                    v-model="editedItem.status"
                                    :items="dataStatus"
                                    item-text="name"
                                    item-value="value"
                                    :rules="[v => !!v || 'Status is required']"
                                    label="Status"
                                    required
                                    filled
                                ></v-select>
                            </v-flex>
                        </v-layout>
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
import NoDataList from "./../../common/NoDataList"
export default {
	components:{
		Breadcrumbs,
		NoDataList
	},
	data: () => ({
		search: "",
		absolute: true,
		loading: false,
		edit: true,
		dialog: false,
		dataUser: [],
		dataBreadcrumbs:[],
		items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
		userType: [
			{ text: "Admin", value:1 },
			{ text: "Staff", value:2 },
			{ text: "Delivery Agent", value:3 },
			{ text: "Customer", value:4 },
		],
		headers: [
			{ text: "ID", align: "left", value: "id" },
			{ text: "Name", value: "name" },
			{ text: "Email", value: "email" },
			{ text: "Type", value: "type" },
			{ text: "Status", value: "status" },
			{ text: "Action", value: "action" }
		],
		emailRules: [
			v => !!v || "E-mail is required",
			v => /.+@.+.\.+.+/.test(v) || "E-mail must be valid"
		],
		usernameRules: [
			v => !!v || "Name is required",
			v => (v || "").indexOf(" ") < 0 || "No spaces are allowed"
		],
		passwordRules: [
			v => (v || "").length >= 8 || `A minimum of 8 characters is allowed`
		],
		editedIndex: -1,
		editedItem: {
			name: "",
			email: "",
			type: 1,
			mobile: "",
			address: "",
			status: 1
		},
		defaultItem: {
			name: "",
			email: "",
			type: 1,
			mobile: "",
			address: "",
			status: 1
		},
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
		this.dataBreadcrumbs=this.$route.matched;
	},
	methods: {
		async initialize() {
			try {
				let { data } = await axios({
					method: "get",
					url: "/app/user"
				});
				this.dataUser = data;
			} catch (e) {}

		},
		editItem(item) {
			this.edit = false;
			this.editedIndex = this.dataUser.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},
		deleteItem(item) {
			const index = this.dataUser.indexOf(item);
			confirm("Are you sure you want to delete this item?") &&
				this.dataUser.splice(index, 1);
		},
		close() {
			this.dialog = false;
			this.loading = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			}, 300);
		},
		async save() {
			this.loading = true;
			if (this.editedIndex > -1) {
				try {
					let { data } = await axios({
						method: "put",
						url: "/app/user/" + this.editedItem.id,
						data: this.editedItem
					});
					if (data.status) {
						this.snacks("Successfully Added", "green");
						Object.assign(this.dataUser[this.editedIndex], this.editedItem);
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
						url: "/app/user",
						data: this.editedItem
					});
					if (data.status) {
						this.dataUser.unshift(this.editedItem);
						this.snacks("Successfully Added", "green");
						this.close();
					} else {
						this.snacks("Failed", "red");
						this.loading = false;
					}
				} catch (e) {
					this.snacks("Failed", "red");
					this.loading = false;
				}
			}
		}
	}
};
</script>