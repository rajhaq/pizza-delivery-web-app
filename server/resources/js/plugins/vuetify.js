import Vue from 'vue'
import Vuetify from 'vuetify'
// To add vuetify css file
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi'|| 'mdiSvg' || 'md'
      },
      theme: {
        themes: {
          light: {
            primary: colors.deepPurple.accent4, // #E53935
            secondary: colors.purple.base, // #FFCDD2
            accent: '#241d3b', // #3F51B5
          },
        },
      },
}

export default new Vuetify(opts)