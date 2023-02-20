<template>
    <card>
        <h1 class="text-2xl md:text-5xl font-bold mb-5 text-secondary">
            {{ meal.strMeal }}
        </h1>
        <section class="lg:flex">
            <div class="lg:w-[25%] -lg:flex -sm:flex-col sm:mr-10">
                <div class="-sm:w-full -lg:w-1/2">
                    <image-wrap
                        :meal="meal"
                        :classes="'lg:w-[100%] h-auto rounded-md object-cover aspect-square'"
                    />
                </div>
                <div
                    class="-sm:w-full -lg:w-1/2 mt-4 sm:ml-4 lg:ml-0 flex flex-col"
                >
                    <Transition name="fade" mode="out-in">
                        <link-button
                            :link="meal.strYoutube"
                            :type="'warning'"
                            class="mb-4"
                            :key="$t('watch-youtube')"
                            >{{ $t("watch-youtube") }}</link-button
                        >
                    </Transition>
                    <Transition name="fade" mode="out-in">
                        <link-button
                            :link="meal.strSource"
                            :type="'secondary'"
                            :key="$t('watch-src')"
                            >{{ $t("watch-src") }}</link-button
                        >
                    </Transition>
                </div>
            </div>
            <div class="lg:w-[75%] -lg:mt-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 text-lg pb-2">
                    <div>
                        <h2
                            class="text-lg md:text-2xl font-semibold mb-2 dark:text-white"
                        >
                            <Transition name="fade" mode="out-in">
                                <span :key="$t('ingredients')">{{
                                    $t("ingredients")
                                }}</span>
                            </Transition>
                            /
                            <Transition name="fade" mode="out-in">
                                <span :key="$t('measures')">{{
                                    $t("measures")
                                }}</span>
                            </Transition>
                        </h2>
                        <ul>
                            <template v-for="(el, ind) of new Array(20)"
                                ><li
                                    class="dark:text-white"
                                    v-if="
                                        meal[`strIngredient${ind + 1}`] &&
                                        meal[`strMeasure${ind + 1}`]
                                    "
                                >
                                    {{ ind + 1 }}.
                                    {{
                                        meal[`strIngredient${ind + 1}`] +
                                        "/" +
                                        meal[`strMeasure${ind + 1}`]
                                    }}
                                </li>
                            </template>
                        </ul>
                    </div>
                    <div class="my-4 text-lg md:pl-4">
                        <div v-if="meal.strCategory">
                            <Transition name="fade" mode="out-in">
                                <strong
                                    class="dark:text-white"
                                    :key="$t('category')"
                                >
                                    {{ $t("category") }}:
                                </strong>
                            </Transition>
                            {{ meal.strCategory }}
                        </div>
                        <div v-if="meal.strArea">
                            <Transition name="fade" mode="out-in">
                                <strong
                                    class="dark:text-white"
                                    :key="$t('country')"
                                >
                                    {{ $t("country") }}:
                                </strong>
                            </Transition>
                            {{ meal.strArea }}
                        </div>
                        <div v-if="meal.strTags">
                            <Transition name="fade" mode="out-in">
                                <strong
                                    class="dark:text-white"
                                    :key="$t('tags')"
                                >
                                    {{ $t("tags") }}:
                                </strong>
                            </Transition>
                            {{ meal.strTags }}
                        </div>
                    </div>
                </div>
                <div>
                    <Transition name="fade" mode="out-in">
                        <h2
                            class="text-lg md:text-2xl font-semibold mb-2 dark:text-white"
                            :key="$t('description')"
                        >
                            {{ $t("description") }}
                        </h2>
                    </Transition>
                    <p class="my-3">{{ meal.strInstructions }}</p>
                </div>
            </div>
        </section>
    </card>
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
