<template>
    <Header
        :menu-items="menuItems"
        :menu-open="showMenu"
        @menu-active="toggleOverlay"
    />
    <router-view v-slot="{ Component }" class="max-w-[1560px] mx-auto">
        <Transition>
            <component :is="Component" v-if="isShow"></component>
        </Transition>
    </router-view>
    <div
        @click="showMenu = false"
        class="bg-black opacity-0 fixed inset-0 pointer-events-none transition-opacity lg:hidden"
        :class="{ 'opacity-40 pointer-events-auto': showMenu }"
    ></div>
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
            showMenu: false,

            menuItems: [
                { linkName: "byName", name: "searchPage" },
                { linkName: "byLetter", name: "searchLetter" },
                { linkName: "ingredients", name: "searchIngredients" },
                // { linkName: "byCountry", name: "searchCountry" },
            ],
        };
    },
    methods: {
        toggleOverlay() {
            this.showMenu = !this.showMenu;

            this.showMenu
                ? document.body.classList.add("overflow-hidden")
                : document.body.classList.remove("overflow-hidden");
        },
    },
    mounted() {
        this.$data.isShow = true;
    },
};
</script>

<style>
/* .v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
} */

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s linear;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
