<template>
    <div>
        <Transition name="fade" mode="out-in">
            <button
                class="inline-block px-4 py-2 rounded border-2 border-secondary hover:bg-secondary hover:text-white text-black dark:text-white mb-4 transition"
                @click="$router.go(-1)"
                :key="$t('back')"
            >
                {{ $t("back") }}
            </button>
        </Transition>

        <h1 class="text-2xl md:text-4xl font-bold mb-4 mt-4 text-primary">
            Meals with {{ $route.params.ingredients }}
        </h1>

        <meal-list :meals="meals" :isChoosed="true" />
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
