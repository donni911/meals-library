<template>
    <article
        class="bg-white dark:bg-slate-200 shadow rounded-xl flex flex-col hover:scale-105 transition"
    >
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img
                v-show="imageLoaded"
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
                class="rounded-t-xl w-full h-48 object-cover"
                @load="onImageLoaded"
            />
        </router-link>

        {{ imageLoaded }}

        <div class="px-6 py-3">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <p class="text-ellipsis mt-2">
                {{ meal.strInstructions }}
            </p>
        </div>
        <div class="flex items-center mt-auto px-6 pt-4 pb-6">
            <link-button :link="meal.strYoutube" :type="'warning'">
                Youtube</link-button
            >
        </div>
    </article>
</template>

<script>
import LinkButton from "../components/UI/LinkButton.vue";

export default {
    components: {
        LinkButton,
    },

    data() {
        return {
            imageLoaded: false,
        };
    },

    methods: {
        onImageLoaded() {
            this.imageLoaded = true;
        },
    },
    props: {
        meal: {
            type: Object,
        },
    },
};
</script>
