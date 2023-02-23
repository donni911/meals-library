<template>
    <div
        class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-primary duration-150 cursor-not-allowed"
    >
        <spin class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
        <Transition name="fade" mode="out-in">
            <span class="mr-4" :key="$t('loading')">
                {{ $t("loading") }}
            </span>
        </Transition>
    </div>
</template>

<script>
import spin from "../../assets/spin.svg";
export default {
    components: {
        spin,
    },
};
</script>
