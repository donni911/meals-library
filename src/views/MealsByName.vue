<template>
    <div>
        <input-search @input-change="searchMeals" :tWriter="'ws.ws-name'" />
        <div>
            <pre>{{ meals }}</pre>
        </div>
    </div>
</template>

<script>
import store from "../store";
import InputSearch from "../components/UI/InputSearch.vue";

export default {
    components: { InputSearch },
    data() {
        return {
            meals: [],
        };
    },
    computed: {
        meals() {
            return this.$store.state.searchedMeals;
        },
    },
    methods: {
        searchMeals(value) {
            store.dispatch("searchMeals", value);
        },
    },
};
</script>
