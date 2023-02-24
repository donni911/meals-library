<template>
    <button
        class="transition-colors hover:text-primary dark:hover:text-primary dark:text-white py-4 px-3 min-w-[85px] z-30"
        @click="$emit('switch')"
    >
        <Transition name="fade" mode="out-in">
            <span :key="text" class="whitespace-nowrap"> {{ text }}</span>
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
