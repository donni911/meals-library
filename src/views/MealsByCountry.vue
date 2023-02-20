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
                class="uppercase p-3 sm:p-1.5 group dark:text-white dark:hover:text-primary hover:text-primary transition-all pointer-events-auto"
            >
                <span
                    class="inline-block sm:group-hover:-translate-y-4 transition-transform"
                >
                    {{ country.strArea }}
                </span>
            </router-link>
        </div>

        <meal-list :meals="meals" />
    </div>
</template>

<script>
import store from "../store";

import axiosClient from "../axiosClient";

import MealList from "../components/MealList.vue";

export default {
    components: {
        MealList,
    },
    data() {
        return {
            countries: [],
        };
    },

    computed: {
        meals() {
            return store.state.mealsByCountry || [];
        },
    },

    watch: {
        $route() {
            store.dispatch("searchMealsByCountry", this.$route.params.country);
        },
    },

    async mounted() {
        await axiosClient.get("list.php?a=list").then(({ data }) => {
            this.countries = data.meals;
        });

        store.dispatch("searchMealsByCountry", this.$route.params.country);
    },
};
</script>

<style scoped>
.router-link-active {
    @apply text-primary sm:-translate-y-4 sm:px-3 pointer-events-none;
}
</style>
