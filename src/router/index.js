import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByCountry from "../views/MealsByCountry.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";

import DefaultLayout from "../components/DefaultLayout.vue";

import GuestLayout from "../components/GuestLayout.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: MealsByName,
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: MealsByLetter,
            },
            {
                path: "/ingredients",
                name: "ingredients",
                component: Ingredients,
            },
            {
                path: "/by-ingredients/:ingredients",
                name: "byIngredients",
                component: MealsByIngredients,
            },
            {
                path: "/by-country/:country?",
                name: "byCountry",
                component: MealsByCountry,
            },
        ],
    },
    {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
