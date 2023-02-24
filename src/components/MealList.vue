<template>
    <div>
        <div
            v-if="meals.length && isChoosed"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 py-2 md:py-8"
        >
            <meal-item
                v-for="meal of meals"
                :key="meal.idMeal"
                :meal="meal"
            ></meal-item>
        </div>
        <div v-else-if="!isChoosed" class="flex justify-center m-4">
            <Transition name="fade" mode="out-in">
                <span :key="$t('choose')" class="dark:text-white">{{
                    $t("choose")
                }}</span>
            </Transition>
        </div>
        <div v-else class="flex justify-center m-4">
            <Transition name="fade" mode="out-in">
                <span :key="$t('no-meals')" class="dark:text-white">{{
                    $t("no-meals")
                }}</span>
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
    props: ["meals", "isChoosed"],
};
</script>
