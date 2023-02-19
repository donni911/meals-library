<template>
    <div>
        <img
            v-if="!imageLoaded"
            src="@image/loader.png"
            :class="classes + ' object-contain'"
        />
        <transition name="fade" mode="out-in">
            <img
                v-show="imageLoaded"
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
                :class="classes"
                @load="onImageLoaded"
            />
        </transition>
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
