<template>
    <div>
        <input-search v-model="inputValue" :tWriter="'ws.ws-name'" />
        <meal-list :meals="meals" />
    </div>
</template>

<script>
import store from "../store";

import InputSearch from "../components/UI/InputSearch.vue";
import MealList from "../components/MealList.vue";

import { debounce } from "../modules/debounce";

export default {
    components: { InputSearch, MealList },

    data() {
        return {
            inputValue: "",
            isMeals: false,
        };
    },
    computed: {
        meals() {
            this.isMeals = true;
            return store.state.searchedMeals || [];
        },
    },
    watch: {
        inputValue(value) {
            this.isMeals = false;
            this.searchMeals(value);
        },
    },

    methods: {
        searchMeals: debounce((value) => {
            store.dispatch("searchMeals", value);
        }, 300),
    },

    mounted() {
        const routeParamsName = this.$route.params.name;
        if (routeParamsName) {
            this.inputValue = routeParamsName;
        }
    },
};
</script>
