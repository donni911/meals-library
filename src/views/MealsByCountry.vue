<template>
    <div>
        <Transition name="fade" mode="out-in">
            <h1
                class="text-2xl md:text-4xl font-bold mb-4 text-primary"
                :key="$t('search-input-country')"
            >
                {{ $t("search-input-country") }}
            </h1>
        </Transition>

        <div class="flex flex-wrap justify-center mt-2">
            <router-link
                v-for="country of countries.slice(0, 10)"
                :to="{
                    name: 'byCountry',
                    params: { country: country.strArea },
                }"
                :key="country"
                class="router-active uppercase p-3 sm:p-1.5 group dark:text-white dark:hover:text-primary hover:text-primary transition-all pointer-events-auto"
            >
                <span
                    class="inline-block sm:group-hover:-translate-y-4 transition-transform"
                >
                    {{ country.strArea }}
                </span>
            </router-link>
        </div>
        <meal-list
            v-if="!isLoading"
            :meals="meals"
            :isChoosed="$route.params.country"
        />

        <div class="flex justify-center mt-4" v-else>
            <spinner />
        </div>
    </div>
</template>

<script>
import store from "../store";

import axiosClient from "../axiosClient";

import MealList from "../components/MealList.vue";
import Spinner from "../components/UI/Spinner.vue";

export default {
    components: {
        MealList,
        Spinner,
    },
    data() {
        return {
            countries: [],
            isLoading: false,
        };
    },

    computed: {
        meals() {
            return store.state.mealsByCountry || [];
        },
    },

    methods: {
        async refreshCountryMeals() {
            this.isLoading = true;
            await store.dispatch(
                "searchMealsByCountry",
                this.$route.params.country
            );
            this.isLoading = false;
        },
    },

    watch: {
        $route() {
            this.refreshCountryMeals();
        },
    },

    mounted() {
        //LIST OF COUNTRIES
        axiosClient.get("list.php?a=list").then(({ data }) => {
            this.countries = data.meals;
        });
        this.isLoading = true;
        this.refreshCountryMeals();
        this.isLoading = false;
    },
};
</script>
