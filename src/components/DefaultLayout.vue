<template>
    <card>
        <router-view v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
                <component :is="Component" />
            </Transition>
        </router-view>
    </card>
</template>

<script>
import Card from "./UI/Card.vue";
export default {
    components: { Card },
};
</script>
