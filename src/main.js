import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
window.axios = require("axios");



createApp(App).use(store).use(router).mount('#app')

// const SsGridColumnHeader = () => import("./components/SsGridColumnHeader");
// import(/* webpackPrefetch: true */ "./components/SsGridColumnHeader")
// app.component('ss-grid-column-header', SsGridColumnHeader);
// app.component('ss-grid-pagination', SsGridPagination);

// import { defineAsyncComponent } from "vue";

