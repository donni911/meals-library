<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 py-8"
    >
        <meal-item
            v-for="meal of meals"
            :key="meal.idMeal"
            :meal="meal"
        ></meal-item>
    </div>
</template>
<script>
import MealItem from "../components/MealItem.vue";
import store from "../store";

export default {
    data() {
        return {
            isLoading: store.state.isLoading,
        };
    },
    components: {
        MealItem,
    },
    props: ["meals"],
};
</script>
