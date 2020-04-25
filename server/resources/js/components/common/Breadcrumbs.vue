<template>
	<v-breadcrumbs :items="dataBreadcrumbs">
		<template v-slot:item="{ item }">
		<v-breadcrumbs-item
			
			:disabled="item.parent?true:false"
		>
			{{ item.meta.title }}
		</v-breadcrumbs-item>
		</template>
	</v-breadcrumbs>
</template>

<script>
export default {
	data: function () {
    return {
    dataBreadcrumbs: [],

  }},
	created() {
		this.dataBreadcrumbs=this.$route.matched;
	},

}
</script>


<style>

</style>