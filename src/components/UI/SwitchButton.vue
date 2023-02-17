<template>
    <button
        class="transition-colors hover:text-primary dark:hover:text-primary dark:text-white py-5 px-3 min-w-[85px]"
        @click="$emit('switch')"
    >
        <Transition name="fade" mode="out-in">
            <span :key="text"> {{ text }}</span>
        </Transition>
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
        },
    },
};
</script>

<style></style>
