import {routes} from "./routes";
import App from "./App.vue";
import store from "./store/store";
import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'https://stocktrader-3dd68.firebaseio.com/';

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
