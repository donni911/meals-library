<template>
    <div>
        <Transition name="fade" mode="out-in">
            <h1
                class="text-2xl md:text-4xl font-bold mb-4 text-primary"
                :key="$t('search-input-name')"
            >
                {{ $t("search-input-name") }}
            </h1>
        </Transition>

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

            if (value) {
                this.searchMeals(value);
            } else {
                store.commit("setSearchedMeals", []);
            }
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
