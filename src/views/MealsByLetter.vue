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
                class="uppercase py-1.5 group px-2.5 sm:p-1.5 dark:text-white dark:hover:text-primary hover:text-primary transition-all pointer-events-auto"
            >
                <span
                    class="inline-block sm:group-hover:-translate-y-4 transition-transform"
                >
                    {{ letter }}
                </span>
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
    @apply text-primary sm:-translate-y-4 sm:px-3 pointer-events-none;
}
</style>
