<template>
  <div class="about">
    <div class="grid-bottom row mb-0 align-items-center">
      <div class="col-lg-4 mb-2">
        <a href="/organization/download" class="btn btn-primary mb-2 mr-2">Export to Excel</a>
        <a href="/organization/print" class="btn btn-primary mb-2 mr-2">Print PDF</a>
      </div>
      <ss-grid-pagination class="col-lg-4 mb-2"
                          v-bind:current_page="1"
                          v-bind:last_page="2"
                          v-bind:total="2"
                          v-on:goto-page="getData(...arguments)">
      </ss-grid-pagination>
      <ss-grid-pagination-location class="col-lg-4 text-lg-right mb-2"
                                   v-bind:current_page="1"
                                   v-bind:last_page="2"
                                   v-bind:total="2">
      </ss-grid-pagination-location>
    </div><!-- end Grid Actions Bottom -->
  </div>
</template>

<script lang="ts">
import {SsGridPagination} from "../../components";

export default {
    name: 'organization-index',
    components: {SsGridPagination},

  props: {},
    data() {
        return {

        }
    },
    created() {},
    methods: {}
}
</script>
