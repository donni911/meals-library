<template>
    <Header />
    <router-view v-slot="{ Component }">
        <Transition>
            <component :is="Component" v-if="isShow"></component>
        </Transition>
    </router-view>
</template>

<script>
import Header from "./components/UI/Header.vue";

export default {
    components: {
        Header,
    },
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
