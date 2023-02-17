<template>
    <card>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </card>
</template>

<script>
import Card from "./UI/Card.vue";
export default {
    components: { Card },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s linear;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
