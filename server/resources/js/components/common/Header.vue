<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#241d3b" dark flat>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <v-app-bar-nav-icon @click="drawerTrigger"></v-app-bar-nav-icon>
      <span class="hidden-sm-and-down">Zero Pizza | Admin</span>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-btn icon large>
      <v-avatar size="32px" item>
        <!-- <v-img :src="dataUser.image" :alt="dataUser.name"></v-img> -->
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    dialog: false,
    dataUser: {}
  }),
  created() {
    this.dataUser = this.$store.state.authUser;
  },
  methods: {
    drawerTrigger() {
      this.drawer = !this.drawer;
      this.$emit("send", this.drawer);
    }
  }
};
</script>