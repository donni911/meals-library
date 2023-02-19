<template>
    <article
        class="bg-white dark:bg-slate-200 shadow rounded-xl flex flex-col hover:scale-105 transition"
    >
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <image-wrap
                :meal="meal"
                :classes="'rounded-t-xl w-full h-48  object-cover'"
            />
        </router-link>

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
import ImageWrap from "../components/UI/ImageWrap.vue";

export default {
    components: {
        LinkButton,
        ImageWrap,
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

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s linear;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
