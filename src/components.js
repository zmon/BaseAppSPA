import { defineAsyncComponent } from "vue";

export const SsGridColumnHeader = defineAsyncComponent(() => import(/* webpackChunkName:"ss-grid-column-header" */ "./components/SsGridColumnHeader"));
export const SsGridPagination = defineAsyncComponent(() => import(/* webpackChunkName:"ss-grid-pagination" */ "./components/SsGridPagination"));

// module.exports = {
//     SsGridPagination,
//     SsGridColumnHeader
// }
