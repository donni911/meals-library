<template>
    <!-- <Transition name="fade"> -->
    <div v-show="isShow">
        <Header
            :menu-items="menuItems"
            @menu-active="toggleOverlay"
            @close-menu="closeMenu"
            :show-menu="showMenu"
        />
        <router-view class="max-w-[1560px] mx-auto" />
        <div
            @click="toggleOverlay"
            class="bg-black opacity-0 fixed inset-0 pointer-events-none transition-opacity lg:hidden"
            :class="{ 'opacity-40 pointer-events-auto': showMenu == true }"
        ></div>
    </div>
    <!-- </Transition> -->
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
                { linkName: "byCountry", name: "searchCountry" },
            ],
        };
    },

    methods: {
        closeMenu() {
            this.showMenu = false;
            document.body.classList.remove("overflow-hidden");
        },

        toggleOverlay() {
            this.showMenu = !this.showMenu;

            document.body.classList.toggle("overflow-hidden", this.showMenu);
        },
    },
    mounted() {
        this.$data.isShow = true;
    },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
