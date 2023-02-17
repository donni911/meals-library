<template>
    <a
        :href="link"
        target="_blank"
        class="inline-block px-3 py-2 border-2 rounded transition-colors"
        :class="{
            'border-warning hover:bg-warning text-warning hover:text-white':
                type == 'warning',
            'border-secondary hover:bg-secondary text-secondary hover:text-white ':
                type == 'secondary',
        }"
        ><slot></slot
    ></a>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
        },
        type: {
            type: String,
            default: "secondary",
        },
    },
};
</script>
