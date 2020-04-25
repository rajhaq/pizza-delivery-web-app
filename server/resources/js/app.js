require('./bootstrap');
window.Vue = require('vue');
import vuetify from './plugins/vuetify' // path to vuetify export

import common from './common';

Vue.mixin(common);
// import 'babel-polyfill';
require('es6-object-assign').polyfill();
require('es6-promise').polyfill();

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title ? to.meta.title : 'OneQatar.qa';
    });
})
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import router from './router'
import store from './store'
Vue.component('z-dashboard', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store: store,
});
