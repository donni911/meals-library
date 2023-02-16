import axiosClient from "../axiosClient";

export function searchMeals({ commit }, value) {
    axiosClient.get(`search.php?s=${value}`).then(({ data }) => {
        // debugger;
        commit("setSearchedMeals", data.meals);
    });
}

export function changeLanguage({ commit }, value) {
    commit("setLanguage", value);
}
