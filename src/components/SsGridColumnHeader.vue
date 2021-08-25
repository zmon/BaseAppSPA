<template>
<th :style="styleAttr">
    <a
        href="#"
        @click.prevent="sortBy()"
        v-bind:class="{ active: selected }"
        class="text-nowrap"
        :title="title"
    >
        <slot></slot>
        <span class="arrow" v-bind:class="sortOrder == 'asc' ? 'asc' : 'dsc'">
            </span>
    </a>
</th>
</template>

<script>
export default {
    name: "ss-grid-column-header",
    props: {
        params: {
            default: function () {
            }
        },
        selectedKey: [String, Number, Boolean],
        selectedOrder: {
            type: [String, Number, Boolean],
            default: "asc"
        },
        title: [String, Number],
        styleAttr: [String]
    },
    mounted: function () {
        /*if (this.params.sortField == this.selectedKey) {
            this.sortOrder = this.selectedOrder.toLowerCase() == 'desc' ? 'desc' : 'asc';
        }*/
    },
    data: function () {
        return {
            sortOrder: this.params.InitialSortOrder
        };
    },

    computed: {
        selected: function () {
            return this.params.sortField === this.selectedKey;
        }
    },
    methods: {
        sortBy: function () {
            this.sortOrder = this.sortOrder.toLowerCase();
            this.sortOrder = this.sortOrder == 'asc' ? 'desc' : 'asc';
            this.getData();
        },

        getData: function () {
            this.$emit("selectedSort", {
                sortField: this.params.sortField,
                sortOrder: this.sortOrder
            });
        }
    }
};
</script>

<style scoped></style>
