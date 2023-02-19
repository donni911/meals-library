<template>
    <div>
        <h1 class="text-4xl font-bold mb-4 text-primary">Ingredients</h1>
        <router-link
            v-for="ingredient of ingredients"
            :to="{
                name: 'byIngredients',
                params: { ingredients: ingredient.idIngredient },
            }"
            :key="ingredient.idIngredient"
            class="block bg-white dark:bg-slate-200 rounded p-3 mb-3 shadow"
        >
            <h3 class="text-2xl font-bold mb-2">
                {{ ingredient.strIngredient }}
            </h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>

<script>
import InputSearch from "../components/UI/InputSearch.vue";
import axiosClient from "../axiosClient";

export default {
    components: { InputSearch },

    data() {
        return {
            ingredients: null,
        };
    },

    mounted() {
        axiosClient.get("list.php?i=list").then(({ data }) => {
            this.ingredients = data.meals;
        });
    },
};
</script>
