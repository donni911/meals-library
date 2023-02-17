import axiosClient from "../axiosClient";

export function searchMeals({ commit }, value) {
    axiosClient.get(`search.php?s=${value}`).then(({ data }) => {
        commit("setSearchedMeals", data.meals);
    });
}

export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        commit("setMealsByLetter", data.meals);
    });
}

export function setMealsByIngredient({ commit }, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
        commit("setSearchedMeals", data.meals);
    });
}

export function setMealsByCountry({ commit }, country) {
    axiosClient.get(`filter.php?a=${country}`).then(({ data }) => {
        commit("setSearchedMeals", data.meals);
    });
}

export function changeLanguage({ commit }, value) {
    commit("setLanguage", value);
}
