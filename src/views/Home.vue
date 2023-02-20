<template>
    <div>
        <Transition name="fade" mode="out-in">
            <h1
                class="text-2xl md:text-4xl font-bold mb-4 text-primary"
                :key="$t('random-meals')"
            >
                {{ $t("random-meals") }}
            </h1>
        </Transition>

        <div class="flex justify-center flex-col"></div>
        <meal-list :meals="meals" />
    </div>
</template>

<script>
import MealList from "../components/MealList.vue";
import axiosClient from "../axiosClient";

export default {
    components: {
        MealList,
    },

    data() {
        return {
            meals: [],
        };
    },

    async mounted() {
        for (let i = 0; i < 10; i++) {
            await axiosClient.get("random.php").then(({ data }) => {
                this.meals.push(data.meals[0]);
            });
        }
    },
};
</script>
