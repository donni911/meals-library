<template>
    <a
        :href="link"
        target="_blank"
        class="inline-block text-center px-3 py-2 rounded transition-colors cursor-pointer"
        :class="computedType"
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
        },
    },

    computed: {
        computedType() {
            switch (this.type) {
                case "secondary":
                    return "text-secondary border-2 border-transparent hover:border-secondary ";
                case "warning":
                    return "border-warning bg-warning hover:bg-transparent hover:text-warning text-white border-2 ";
                default:
                    return "border-secondary hover:bg-secondary text-secondary hover:text-white border-2 ";
            }
        },
    },
};
</script>
