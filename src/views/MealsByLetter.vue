<template>
    <div>
        <div class="flex justify-center mt-2">
            <router-link
                :to="{ name: 'byLetter', params: { letter } }"
                v-for="letter of letters"
                :key="letter"
                class="uppercase p-1.5 hover:-translate-y-2 dark:text-white dark:hover:text-primary hover:text-primary transition-all"
            >
                {{ letter }}
            </router-link>
        </div>
        <meal-list :meals="meals" />
    </div>
</template>

<!-- https://vuejs.org/guide/built-ins/transition-group.html#staggering-list-transitions -->
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
            return store.state.mealsByLetter;
        },
    },

    watch: {
        $route() {
            store.dispatch("searchMealsByLetter", this.$route.params.letter);
        },
    },

    mounted() {
        store.dispatch("searchMealsByLetter", this.$route.params.letter || "A");
    },
};
</script>
