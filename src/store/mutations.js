function setSearchedMeals(state, meals) {
    state.searchedMeals = meals;
}

function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals;
}

function setMealsByIngredient(state, meals) {
    state.mealsByIngredient = meals;
}

function setMealsByCountry(state, meals) {
    state.mealsByCountry = meals;
}

function setLanguage(state, lang) {
    state.lang = lang;
}

export {
    setSearchedMeals,
    setMealsByLetter,
    setMealsByIngredient,
    setMealsByCountry,
    setLanguage,
};
