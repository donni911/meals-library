<template>
    <div>
        <Transition name="fade" mode="out-in">
            <h1
                class="text-2xl md:text-4xl font-bold mb-4 text-primary"
                :key="$t('search-input-ingredient')"
            >
                {{ $t("search-input-ingredient") }}
            </h1>
        </Transition>

        <input-search
            v-model="inputValue"
            :tWriter="'ws.ws-ingredients'"
            class="mb-4"
        />

        <Transition name="fade">
            <div
                v-if="computedIngredients.length"
                class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
                <router-link
                    v-for="ingredient of computedIngredients"
                    :to="{
                        name: 'byIngredients',
                        params: { ingredients: ingredient.strIngredient },
                    }"
                    :key="ingredient.idIngredient"
                    class="block bg-white dark:bg-slate-200 rounded p-4 shadow hover:scale-105 transition"
                >
                    <h3
                        class="text-2xl font-bold"
                        v-html="
                            highlightText(ingredient.strIngredient, inputValue)
                        "
                    ></h3>
                </router-link>
            </div>
        </Transition>
        <div v-if="!computedIngredients.length" class="flex justify-center m-4">
            <Transition name="fade" mode="out-in">
                <span :key="$t('no-ingredients')" class="dark:text-white">{{
                    $t("no-ingredients")
                }}</span>
            </Transition>
        </div>
    </div>
</template>

<script>
import InputSearch from "../components/UI/InputSearch.vue";
import axiosClient from "../axiosClient";
import strHighlight from "../modules/strHighlight";

export default {
    components: { InputSearch },

    data() {
        return {
            inputValue: "",
            ingredients: [],
            highlightText: strHighlight,
        };
    },

    computed: {
        computedIngredients() {
            if (!this.inputValue.length) {
                return this.ingredients;
            }
            return this.ingredients.filter((ingredient) =>
                ingredient.strIngredient.toLowerCase().includes(this.inputValue)
            );
        },
    },

    mounted() {
        axiosClient.get("list.php?i=list").then(({ data }) => {
            this.ingredients = data.meals;
        });
    },
};
</script>
