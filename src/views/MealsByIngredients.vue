<template>
    <meal-list :meals="meals" />
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
