<template>
    <div class="relative block rounded-md w-full" :class="classes">
        <img
            v-if="!imageLoaded"
            src="@image/loader.png"
            class="object-contain'"
        />
        <Transition name="fade" mode="out-in">
            <img
                v-show="imageLoaded"
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
                @load="onImageLoaded"
            />
        </Transition>
    </div>
</template>

<script>
export default {
    props: {
        meal: { type: Object, required: true },
        classes: {
            type: String,
        },
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
};
</script>
