<template>
    <div>
        <div
            v-if="meals.length"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 py-8"
        >
            <meal-item
                v-for="meal of meals"
                :key="meal.idMeal"
                :meal="meal"
            ></meal-item>
        </div>
        <div v-if="!meals.length" class="flex justify-center m-4">
            <Transition name="fade" mode="out-in">
                <span :key="$t('no-meals')">{{ $t("no-meals") }}</span>
            </Transition>
        </div>
    </div>
</template>
<script>
import MealItem from "../components/MealItem.vue";

export default {
    components: {
        MealItem,
    },
    props: ["meals"],
};
</script>
