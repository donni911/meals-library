<template>
    <div>
        <Transition name="fade" mode="out-in">
            <div class="flex items-center mb-4">
                <h1
                    class="text-2xl md:text-4xl font-bold text-primary"
                    :key="$t('random-meals')"
                >
                    {{ $t("random-meals") }}
                </h1>
                <button
                    type="button"
                    @click="refreshRandomMeals"
                    class="w-6 h-6 ml-4 translate-y-0.5 cursor-pointer -md:w-4 -md:ml-2 -md:h-4 md:translate-y-1 group hover:rotate-45 transition-transform"
                >
                    <refreshSvg
                        class="w-full h-full group-hover:[&>path]:fill-warning [&>path]:fill-primary dark:[&>path]:fill-white [&>path]:transition"
                    />
                </button>
            </div>
        </Transition>

        <div class="flex justify-center flex-col"></div>
        <meal-list :meals="meals" v-if="!isLoading" />
        <div class="flex justify-center m-4" v-else>
            <span class="dark:text-white">{{ $t("loading") }}</span>
        </div>
    </div>
</template>

<script>
import MealList from "../components/MealList.vue";
import store from "../store";
import refreshSvg from "../assets/refresh.svg";

export default {
    components: {
        MealList,
        refreshSvg,
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
