<template>
    <div>
        <button
            class="inline-block px-3 py-2 rounded bg-secondary text-white"
            @click="$router.go(-1)"
        >
            {{ $t("back") }}
        </button>
        <h1 class="text-4xl font-bold mb-4 mt-4 text-primary">
            Meals with {{ $route.params.ingredients }}
        </h1>

        <meal-list :meals="meals" />
    </div>
</template>

<script>
import MealList from "../components/MealList.vue";
import store from "../store";

export default {
    components: { MealList },

    computed: {
        meals() {
            return store.state.mealsByIngredient;
        },
    },

    mounted() {
        store.dispatch(
            "searchMealsByIngredient",
            this.$route.params.ingredients
        );
    },
};
</script>
