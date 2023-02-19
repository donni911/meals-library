<template>
    <header
        class="bg-white shadow-light dark:bg-black dark:shadow-dark px-8 transition-colors"
    >
        <div class="flex items-center justify-between -mx-3">
            <router-link
                :to="{ name: 'home' }"
                class="py-5 px-3 transition-colors hover:text-primary dark:hover:text-primary dark:text-white"
            >
                <Transition name="fade" mode="out-in">
                    <span :key="$t('homePage')">{{ $t("homePage") }}</span>
                </Transition>
            </router-link>
            <div class="gap-5">
                <switch-button :text="$t(themeText)" @switch="themeSwitch" />
                <switch-button :text="langText" @switch="langSwitch" />
            </div>
            <ul>
                <li>
                    <div class="flex align-center justify-between">
                        <router-link
                            :to="{ name: 'byName' }"
                            class="block py-5 px-3 transition-colors hover:bg-primary hover:text-white dark:text-white"
                        >
                            <Transition name="fade" mode="out-in">
                                <span :key="$t('searchPage')">
                                    {{ $t("searchPage") }}
                                </span>
                            </Transition>
                        </router-link>
                        <router-link
                            :to="{ name: 'byLetter' }"
                            class="block py-5 px-3 transition-colors hover:bg-primary hover:text-white dark:text-white"
                        >
                            <Transition name="fade" mode="out-in">
                                <span :key="$t('searchLetter')">
                                    {{ $t("searchLetter") }}
                                </span>
                            </Transition></router-link
                        >
                        <router-link
                            :to="{ name: 'ingredients' }"
                            class="block py-5 px-3 transition-colors hover:bg-primary hover:text-white dark:text-white"
                        >
                            <Transition name="fade" mode="out-in">
                                <span :key="$t('searchIngredients')">
                                    {{ $t("searchIngredients") }}
                                </span>
                            </Transition></router-link
                        >
                        <router-link
                            :to="{ name: 'byCountry' }"
                            class="block py-5 px-3 transition-colors hover:bg-primary hover:text-white dark:text-white"
                        >
                            <Transition name="fade" mode="out-in">
                                <span :key="$t('searchCountry')">
                                    {{ $t("searchCountry") }}
                                </span>
                            </Transition></router-link
                        >
                    </div>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import SwitchButton from "./SwitchButton.vue";
import store from "../../store";

export default {
    components: { SwitchButton },
    data() {
        return {
            isDark: false,
            isEnglish: store.state.lang,
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
