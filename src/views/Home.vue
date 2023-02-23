<template>
    <div>
        <Transition name="fade" mode="out-in">
            <div class="flex items-center mb-4">
                <Transition name="fade" mode="out-in">
                    <h1
                        class="text-2xl md:text-4xl font-bold text-primary"
                        :key="$t('random-meals')"
                    >
                        {{ $t("random-meals") }}
                    </h1>
                </Transition>
                <button
                    type="button"
                    @click="refreshRandomMeals"
                    class="w-6 h-6 ml-4 translate-y-0.5 cursor-pointer -md:w-4 -md:ml-2 -md:h-4 md:translate-y-1 group transition-transform"
                    :class="{ 'hover:rotate-45': !isLoading }"
                >
                    <refreshSvg
                        :class="{
                            'animate-spin': isLoading,
                            'group-hover:[&>path]:fill-warning': !isLoading,
                        }"
                        class="w-full h-full [&>path]:fill-primary dark:[&>path]:fill-white [&>path]:transition"
                    />
                </button>
            </div>
        </Transition>

        <meal-list :meals="meals" v-if="!isLoading" />
        <div class="flex justify-center" v-else>
            <spinner />
        </div>
    </div>
</template>

<script>
import MealList from "../components/MealList.vue";
import Spinner from "../components/UI/Spinner.vue";
import store from "../store";
import refreshSvg from "../assets/refresh.svg";

export default {
    components: {
        MealList,
        refreshSvg,
        Spinner,
    },

    data() {
        return {
            meals: [],
            isLoading: false,
        };
    },

    methods: {
        async refreshRandomMeals() {
            this.isLoading = true;
            await store.dispatch("getRandomMeals");
            this.isLoading = false;
            this.$data.meals = store.state.randomMeals;

            localStorage.randomMeals = JSON.stringify(this.$data.meals);
        },
    },

    mounted() {
        if (localStorage.randomMeals) {
            this.$data.meals = JSON.parse(localStorage.randomMeals);
        } else if (!store.state.randomMeals.length) {
            this.refreshRandomMeals();
        }
    },
};
</script>
