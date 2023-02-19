<template>
    <template v-if="!isError">
        <card :class="'max-w-[90%] mx-auto'">
            <h1 class="text-5xl font-bold mb-5 text-secondary">
                {{ meal.strMeal }}
            </h1>
            <section class="flex">
                <div class="w-[25%] mr-10">
                    <image-wrap
                        :meal="meal"
                        :classes="'w-[100%] h-auto rounded-md object-cover'"
                    />
                </div>
                <div class="w-[75%]">
                    <div>
                        <div
                            class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2"
                        >
                            <div>
                                <strong class="dark:text-white">
                                    Category:</strong
                                >
                                {{ meal.strCategory }}
                            </div>
                            <div>
                                <strong class="dark:text-white">Area:</strong>
                                {{ meal.strArea }}
                            </div>
                            <div>
                                <strong class="dark:text-white">Tags:</strong>
                                {{ meal.strTags }}
                            </div>
                        </div>

                        <p class="my-3">{{ meal.strInstructions }}</p>

                        <div class="grid grid-cols-1 sm:grid-cols-2">
                            <div>
                                <h2
                                    class="text-2xl font-semibold mb-2 dark:text-white"
                                >
                                    Ingredients
                                </h2>
                                <ul>
                                    <template v-for="(el, ind) of new Array(20)"
                                        ><li
                                            class="dark:text-white"
                                            v-if="
                                                meal[`strIngredient${ind + 1}`]
                                            "
                                        ></li>
                                        {{ ind + 1 }}.
                                        {{
                                            meal[`strIngredient${ind + 1}`]
                                        }}</template
                                    >
                                </ul>
                            </div>
                            <div>
                                <h2
                                    class="text-2xl font-semibold mb-2 dark:text-white"
                                >
                                    Measures
                                </h2>
                                <ul>
                                    <template v-for="(el, ind) of new Array(20)"
                                        ><li
                                            v-if="meal[`strMeasure${ind + 1}`]"
                                        ></li>
                                        {{ ind + 1 }}.
                                        {{
                                            meal[`strMeasure${ind + 1}`]
                                        }}</template
                                    >
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <link-button :link="meal.strYoutube" :type="'warning'"
                            >Watch on Youtube</link-button
                        >
                        <link-button :link="meal.strSource" :type="'secondary'"
                            >Watch Source</link-button
                        >
                    </div>
                </div>
            </section>
        </card>
    </template>
    <template v-if="isError">
        <div>Not Found!</div>
    </template>
</template>

<script>
import axiosClient from "../axiosClient";

import Card from "../components/UI/Card.vue";
import LinkButton from "../components/UI/LinkButton.vue";
import ImageWrap from "../components/UI/ImageWrap.vue";

export default {
    components: {
        Card,
        LinkButton,
        ImageWrap,
    },
    data() {
        return {
            meal: "",
            isError: false,
        };
    },

    mounted() {
        axiosClient
            .get(`lookup.php?i=${this.$route.params.id}`)
            .then((data) => {
                try {
                    this.meal = data.data.meals[0] || {};

                    this.isError = false;
                } catch (error) {
                    this.isError = true;
                }
            });
    },
};
</script>
