<template>
    <div class="flex justify-center flex-col">
        <!-- <input-search /> -->
        <!-- <div class="flex justify-center mt-2">
            <router-link
                :to="{ name: 'byLetter', params: { letter } }"
                v-for="letter of letters"
                :key="letter"
                class="uppercase p-1.5 hover:-translate-y-2 dark:text-white dark:hover:text-primary hover:text-primary transition-transform"
            >
                {{ letter }}
            </router-link>
        </div> -->
    </div>
</template>

<script>
import axiosClient from "../axiosClient.js";

import Card from "../components/UI/Card.vue";
import InputSearch from "../components/UI/InputSearch.vue";

export default {
    components: {
        Card,
        InputSearch,
    },
    data() {
        return {
            letters: "abcdefghijklmnopqrstuvwxyz",
        };
    },
    mounted() {
        async () => {
            const response = await axiosClient.get("list.php?i=list");
        };
    },
};
</script>
