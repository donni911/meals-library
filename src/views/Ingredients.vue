<template>
    <div>
        <h1 class="text-4xl font-bold mb-4 text-primary">Ingredients</h1>
        <input-search
            v-model="inputValue"
            :tWriter="'ws.ws-ingredients'"
            class="mb-4"
        />
        <router-link
            v-for="ingredient of computedIngredients"
            :to="{
                name: 'byIngredients',
                params: { ingredients: ingredient.strIngredient },
            }"
            :key="ingredient.idIngredient"
            class="block bg-white dark:bg-slate-200 rounded p-3 mb-3 shadow"
        >
            <h3
                class="text-2xl font-bold mb-2"
                v-html="highlightText(ingredient.strIngredient, inputValue)"
            ></h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
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
