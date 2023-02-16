<template>
    <div>
        <input-search
            @input-change="searchMeals"
            :tWriter="'ws.ws-ingredients'"
        />
    </div>
</template>

<script>
// import store from "../store";
import InputSearch from "../components/UI/InputSearch.vue";

export default {
    components: { InputSearch },
};
</script>
