<template>
    <div class="flex justify-center flex-col"></div>
    <meal-list :meals="meals" />
</template>

<script>
import MealList from "../components/MealList.vue";

export default {
    components: {
        MealList,
    },

    computed: {
        meals() {
            return this.$store.state.mealsByLetter;
        },
    },

    mounted() {
        this.$store.dispatch(
            "searchMealsByLetter",
            this.$route.params.letter || "A"
        );
    },
};
</script>
