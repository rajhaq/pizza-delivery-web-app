<template>
  <v-app>
    <Leftbar :items="items" :trigger="isLeftbar" ></Leftbar>
    <Header   @send="headerGet" ></Header>
    <router-view></router-view>
    <Footer></Footer>

  </v-app>
</template>

<script>
import Header from './common/Header'
import Footer from './common/Footer'
import Leftbar from './common/Leftbar'
export default {
    data: () => ({
      isLeftbar:false,
      items: []
      
    }),
    components:
    {
        Header,
        Footer,
        Leftbar
    },
    methods:{
      headerGet(item)
      {
          this.isLeftbar=item
      }

    },
        created() {
        this.$router.options.routes.forEach(route => {
			if(route.meta.status)
			{
				this.items.push({
					name: route.name,
					path: route.path,
					meta: route.meta,
					children: route.children,
					
				})
			}
        })
    }
  }
</script>