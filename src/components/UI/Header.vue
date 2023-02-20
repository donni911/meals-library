<template>
    <header
        class="bg-white dark:bg-black shadow-light dark:shadow-dark px-4 md:px-8 transition-colors static z-20"
    >
        <div class="flex items-center justify-between">
            <router-link :to="{ name: 'home' }" class="py-2 px-2 group">
                <div class="flex items-center">
                    <logo
                        class="w-10 h-10 group-hover:[&>path]:fill-warning [&>path]:fill-primary dark:[&>path]:fill-white [&>path]:transition"
                    />
                </div>
            </router-link>

            <div class="gap-5 ml-auto lg:mx-auto">
                <switch-button :text="$t(themeText)" @switch="themeSwitch" />
                <switch-button :text="langText" @switch="langSwitch" />
            </div>

            <div class="flex lg:hidden">
                <button @click="toggleMenu" type="button" class="w-6 h-6 z-30">
                    <span
                        class="block h-[2px] rounded-xl w-full bg-black dark:bg-white transition"
                        :class="{
                            'translate-x-0 translate-y-[5px] -rotate-45  delay-200':
                                showMenu,
                        }"
                    ></span>
                    <span
                        class="block h-[2px] rounded-xl w-full bg-black dark:bg-white transition my-[3px]"
                        :class="{
                            'translate-x-1.5 opacity-0 delay-100': showMenu,
                        }"
                    ></span>
                    <span
                        class="block h-[2px] rounded-xl w-full bg-black dark:bg-white transition"
                        :class="{
                            'translate-x-0 translate-y-[-5px] rotate-45 delay-300':
                                showMenu,
                        }"
                    ></span>
                </button>
            </div>

            <ul
                :class="
                    showMenu
                        ? '-lg:opacity-100 -lg:translate-y-0 -lg:pointer-events-auto'
                        : '-lg:opacity-0  -lg:-translate-y-5 -lg:pointer-events-none'
                "
                class="flex -lg:flex-col -lg:w-full -lg:shadow-dark -lg:fixed -lg:top-0 -lg:pt-16 -lg:left-0 bg-white z-10 dark:bg-black transition"
            >
                <li v-for="item in menuItems">
                    <router-link
                        :to="{ name: item.linkName }"
                        @click="toggleMenu"
                        class="-lg:px-8 block py-5 px-3 transition-colors hover:bg-primary hover:text-white dark:text-white"
                    >
                        <Transition name="fade" mode="out-in">
                            <span
                                :key="$t(item.name)"
                                class="whitespace-nowrap"
                            >
                                {{ $t(item.name) }}
                            </span>
                        </Transition>
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import SwitchButton from "./SwitchButton.vue";
import store from "../../store";

import logo from "../../assets/logo.svg";

export default {
    components: { SwitchButton, logo },

    props: ["menuItems", "showMenu"],

    data() {
        return {
            isDark: false,
            isEnglish: store.state.lang,
            // showMenu: false,
        };
    },
    computed: {
        themeText() {
            return this.$data.isDark ? "theme-dark" : "theme-light";
        },

        langText() {
            return store.state.lang == "en" ? "EN" : "UA";
        },
    },
    methods: {
        toggleMenu() {
            this.$emit("menu-active");
        },

        themeSwitch() {
            const html = document.documentElement;

            this.$data.isDark = !this.$data.isDark;

            this.$data.isDark
                ? html.classList.add("dark")
                : html.classList.remove("dark");
        },

        langSwitch() {
            this.$data.isEnglish = !this.$data.isEnglish;

            if (this.$data.isEnglish) {
                store.dispatch("changeLanguage", "en");
                this.$i18n.locale = store.state.lang;
            } else {
                store.dispatch("changeLanguage", "ua");
                this.$i18n.locale = store.state.lang;
            }
        },
    },
    beforeCreate() {
        this.$store.commit("initialiseLang");
    },

    mounted() {
        //init theme
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? (this.$data.isDark = true)
            : false;

        //init lang
        this.$i18n.locale = store.state.lang;
    },
};
</script>
