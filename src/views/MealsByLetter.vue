<template>
    <div>
        <Transition name="fade" mode="out-in">
            <h1
                class="text-2xl md:text-4xl font-bold mb-4 text-primary"
                :key="$t('search-input-letter')"
            >
                {{ $t("search-input-letter") }}
            </h1>
        </Transition>

        <div class="flex flex-wrap justify-center mt-2">
            <router-link
                :to="{ name: 'byLetter', params: { letter } }"
                v-for="letter of letters"
                :key="letter"
                class="uppercase py-1.5 px-2.5 sm:p-1.5 sm:hover:-translate-y-4 dark:text-white dark:hover:text-primary hover:text-primary transition-all"
            >
                {{ letter }}
            </router-link>
        </div>
        <meal-list :meals="meals" />
    </div>
</template>

<script>
import store from "../store";

import MealList from "../components/MealList.vue";

export default {
    components: {
        MealList,
    },
    data() {
        return {
            letters: "abcdefghijklmnopqrstuvwxyz".split(""),
        };
    },

    computed: {
        meals() {
            return store.state.mealsByLetter || [];
        },
    },

    watch: {
        $route() {
            store.dispatch("searchMealsByLetter", this.$route.params.letter);
        },
    },

    mounted() {
        store.dispatch("searchMealsByLetter", this.$route.params.letter);
    },
};
</script>

<style scoped>
.router-link-active {
    @apply text-primary sm:-translate-y-4 sm:px-3;
}
</style>
