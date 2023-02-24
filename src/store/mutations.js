function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || [];
}

function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || [];
}

function setMealsByIngredient(state, meals) {
    state.mealsByIngredient = meals || [];
}

function setMealsByCountry(state, meals) {
    state.mealsByCountry = meals || [];
}

function setLanguage(state, lang) {
    localStorage.setItem("lang", lang);
    state.lang = lang;
}

function setMeal(state, meal) {
    state.meal = meal;
}

function setRandomMeals(state, randomMeals) {
    state.randomMeals = randomMeals;
}

function initialiseLang(state) {
    if (localStorage.getItem("lang")) {
        state.lang = localStorage.getItem("lang");
    } else {
        state.lang = "en";
    }
}

export {
    setSearchedMeals,
    setMealsByLetter,
    setMealsByIngredient,
    setMealsByCountry,
    setLanguage,
    initialiseLang,
    setRandomMeals,
    setMeal,
};
