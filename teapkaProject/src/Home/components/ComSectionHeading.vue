<template>
    <div class="mx-auto max-w-2xl text-center">
        <p
            v-if="eyebrow"
            class="text-[0.66rem] font-semibold uppercase tracking-[0.38em] text-rose sm:text-xs"
        >
            {{ eyebrow }}
        </p>

        <h2
            class="mt-3 font-khmer text-xl font-semibold leading-[1.75] text-plum sm:text-2xl"
        >
            {{ title }}
        </h2>

        <img
            src="/assets/images/divid_gold.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            class="mx-auto mt-2 h-9 w-52 object-contain opacity-90 sm:w-64"
        />

        <p
            v-if="subtitle"
            class="mx-auto mt-2 max-w-xl font-khmer text-sm leading-[1.9] text-ink/60 sm:text-base"
        >
            {{ subtitle }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    eyebrow: { type: String, default: "" },
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
})
</script>
