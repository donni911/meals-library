<template>
    <div class="relative">
        <input
            name="search"
            type="text"
            class="rounded border-2 border-gray-200 w-full peer h-16 focus:ring-primary focus:border-primary dark:bg-slate-200"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <div
            class="block absolute top-1/2 left-4 -translate-y-2/4 transition-all pointer-events-none peer-focus:left-0 peer-focus:opacity-0"
            :class="{ 'left-0 opacity-0': modelValue.length }"
        >
            <div>
                <span v-html="$t('search-input')"></span>
                <label for="search" ref="typewriter"></label>
                <span ref="symbol">|</span>
            </div>
        </div>
    </div>
</template>

<script>
import { TypeWriter, addSymbol } from "../../modules/TypeWriter";

export default {
    props: {
        tWriter: { type: String, required: true },

        modelValue: {
            type: String,
            required: true,
        },
    },

    mounted() {
        let gsap, symbol;

        this.$watch(
            () => this.$t(this.$props.tWriter),
            (value) => {
                const target = this.$refs.typewriter;
                target.innerText = "";
                gsap?.kill();
                symbol?.kill();

                gsap = TypeWriter(target, value);
                symbol = addSymbol(this.$refs.symbol);
            },
            {
                immediate: true,
            }
        );
    },
};
</script>
