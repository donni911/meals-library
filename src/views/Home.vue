<template>
    <div class="flex justify-center flex-col"></div>
</template>

<script>
import axiosClient from "../axiosClient.js";

export default {
    mounted() {
        async () => {
            const response = await axiosClient.get("list.php?i=list");
        };
    },
};
</script>
