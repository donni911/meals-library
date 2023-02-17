<template>
    <div class="p-8" :class="class">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        class: {
            type: String,
        },
    },
};
</script>
