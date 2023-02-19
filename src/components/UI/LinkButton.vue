<template>
    <a
        :href="link"
        target="_blank"
        class="inline-block px-3 py-2 border-2 rounded transition-colors cursor-pointer"
        :class="type"
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
        type() {
            switch (this.type) {
                case "secondary":
                    return "border-secondary hover:bg-secondary text-secondary hover:text-white ";
                case "warning":
                    return "border-warning hover:bg-warning text-warning hover:text-white";
                default:
                    return "border-secondary hover:bg-secondary text-secondary hover:text-white ";
            }
        },
    },
};
</script>
