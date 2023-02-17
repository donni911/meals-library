<template>
    <div>
        <input-search v-model="inputValue" :tWriter="'ws.ws-name'" />
        <div
            v-if="meals.length"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-8"
        >
            <meal-item
                v-for="meal of meals"
                :key="meal.idMeal"
                :meal="meal"
            ></meal-item>
        </div>
        <div v-else-if="inputValue != '' && isMeals" class="w-full mt-4">
            {{ $t("error_msg") }}
        </div>
    </div>
</template>

<script>
import store from "../store";

import InputSearch from "../components/UI/InputSearch.vue";
import MealItem from "../components/MealItem.vue";

import { debounce } from "../modules/debounce";

export default {
    components: { InputSearch, MealItem },

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
