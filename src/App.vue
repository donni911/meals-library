<template>
    <Transition>
        <div v-if="isShow">
            <router-view></router-view>
        </div>
    </Transition>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
        };
    },
    mounted() {
        this.$data.isShow = true;
    },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
