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
        <button @click="ok = !ok">ok</button>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-8"
        >
            <TransitionGroup name="list" tag="ul">
                <meal-item
                    v-for="meal of meals"
                    :key="meal.idMeal"
                    :meal="meal"
                ></meal-item>
            </TransitionGroup>
            <!-- https://vuejs.org/guide/built-ins/transition-group.html#staggering-list-transitions -->
        </div>
    </div>
</template>

<script>
import store from "../store";

import MealItem from "../components/MealItem.vue";

export default {
    components: {
        MealItem,
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

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 20s linear;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
