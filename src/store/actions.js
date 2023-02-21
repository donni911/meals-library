import axiosClient from "../axiosClient";

export function searchMeals({ state, commit }, value) {
    axiosClient.get(`search.php?s=${value}`).then(({ data }) => {
        commit("setSearchedMeals", data.meals);
    });
}

export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        commit("setMealsByLetter", data.meals);
    });
}

export function searchMealsByIngredient({ commit }, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
        commit("setMealsByIngredient", data.meals);
    });
}

export function searchMealsByCountry({ commit }, country) {
    axiosClient.get(`filter.php?a=${country}`).then(({ data }) => {
        commit("setMealsByCountry", data.meals);
    });
}

export async function getRandomMeals({ commit }) {
    let meals = [];
    for (let i = 0; i < 10; i++) {
        await axiosClient.get("random.php").then(({ data }) => {
            meals.push(data.meals[0]);
        });
    }
    commit("setRandomMeals", meals);
}

export function changeLanguage({ commit }, value) {
    commit("setLanguage", value);
}
