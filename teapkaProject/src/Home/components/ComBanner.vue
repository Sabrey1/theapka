<template>
    <section
        class="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-plum-deep text-ivory"
    >
        <!-- Hero photograph: portrait for phones, wide shot for larger screens -->
        <picture class="absolute inset-0 -z-20 block h-full w-full">
            <source
                media="(min-width: 768px)"
                srcset="/assets/images/wedding_hero_wide.jpg"
            />
            <img
                src="/assets/images/wedding_hero_tall.jpg"
                alt="Sabrey and Sara in traditional Khmer wedding attire"
                fetchpriority="high"
                decoding="async"
                class="h-full w-full object-cover object-[50%_35%] sm:object-[50%_40%]"
            />
        </picture>

        <!-- Readability overlays -->
        <div
            class="absolute inset-0 -z-10 bg-gradient-to-b from-plum-deep/85 via-plum-deep/30 to-plum-deep/95"
        />
        <div
            class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_transparent_15%,_rgba(51,23,34,0.6)_100%)]"
        />

        <div
            class="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pb-28 pt-20 text-center sm:px-8 sm:pb-32 sm:pt-24"
        >
            <div class="flex items-center gap-3 sm:gap-4">
                <span class="h-px w-7 bg-gold-soft/70 sm:w-12" />
                <p
                    class="font-khmer text-xs leading-relaxed tracking-normal text-gold-soft sm:text-sm"
                >
                    សិរីសួស្តីអាពាហ៍ពិពាហ៍
                </p>
                <span class="h-px w-7 bg-gold-soft/70 sm:w-12" />
            </div>

            <p
                class="mt-5 text-[0.6rem] font-semibold uppercase tracking-[0.45em] text-ivory/70 sm:text-xs"
            >
                The Wedding Of
            </p>

            <div
                class="mt-4 flex flex-col items-center justify-center gap-1 sm:mt-6 sm:flex-row sm:gap-5 lg:gap-7"
            >
                <h1
                    class="font-display text-[clamp(2.9rem,9vw,6rem)] font-light leading-[1.03] tracking-[-0.01em] text-ivory text-shadow-soft"
                >
                    Lim Sabrey
                </h1>

                <div class="flex items-center gap-3 py-1 sm:py-0">
                    <span class="h-px w-8 bg-gold-soft/60 sm:w-12" />
                    <span
                        class="font-display text-2xl italic leading-none text-gold-soft sm:text-3xl lg:text-4xl"
                        >&amp;</span
                    >
                    <span class="h-px w-8 bg-gold-soft/60 sm:w-12" />
                </div>

                <h1
                    class="font-display text-[clamp(2.9rem,9vw,6rem)] font-light leading-[1.03] tracking-[-0.01em] text-ivory text-shadow-soft"
                >
                    Sara
                </h1>
            </div>

            <img
                src="/assets/images/divid_gold.png"
                alt=""
                aria-hidden="true"
                class="mt-5 h-10 w-56 object-contain opacity-90 sm:mt-7 sm:w-72"
            />

            <div class="mt-3 flex flex-col items-center gap-1.5 sm:mt-4">
                <p class="font-khmer text-sm leading-relaxed text-ivory/85 sm:text-base">
                    ថ្ងៃចន្ទ ទី៣០ ខែវិច្ឆិកា ឆ្នាំ២០២៦
                </p>
                <p
                    class="font-display text-2xl tracking-[0.22em] text-gold-soft sm:text-3xl"
                >
                    30 . 11 . 2026
                </p>
                <p class="font-khmer text-sm leading-relaxed text-ivory/80 sm:text-base">
                    ម៉ោង ០៥ : ០០ ល្ងាច · 5:00 PM
                </p>
                <p
                    class="mt-1 flex items-center justify-center gap-2 text-xs text-ivory/75 sm:text-sm"
                >
                    <i class="pi pi-map-marker text-gold-soft" aria-hidden="true"></i>
                    <span class="font-khmer leading-relaxed"
                        >អគារ Building L, កោះពេជ្រ ភ្នំពេញ</span
                    >
                </p>
            </div>

            <!-- Countdown -->
            <div
                class="mt-7 grid w-full max-w-md grid-cols-4 gap-2 sm:mt-9 sm:gap-3"
                role="timer"
                aria-label="Time remaining until the wedding"
            >
                <div
                    v-for="unit in countdown"
                    :key="unit.label"
                    class="rounded-2xl border border-ivory/15 bg-ivory/10 px-1 py-3 backdrop-blur-md sm:py-4"
                >
                    <p
                        class="font-display text-2xl font-medium tabular-nums text-ivory sm:text-3xl"
                    >
                        {{ unit.value }}
                    </p>
                    <p class="mt-0.5 font-khmer text-[0.62rem] text-ivory/65 sm:text-xs">
                        {{ unit.label }}
                    </p>
                </div>
            </div>

            <div
                class="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
            >
                <a
                    href="#program"
                    class="cta cta-gold w-full sm:w-auto"
                >
                    View Programme
                </a>
                <a
                    href="#gift"
                    class="cta cta-ghost w-full sm:w-auto"
                >
                    Wedding Gift
                </a>
            </div>
        </div>

        <a
            href="#welcome"
            aria-label="Scroll to the invitation"
            class="scroll-cue absolute bottom-5 left-1/2 -translate-x-1/2"
        >
            <i class="pi pi-angle-down animate-bounce text-xl" aria-hidden="true"></i>
        </a>
    </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue"

const WEDDING_DATE = new Date("2026-11-30T17:00:00+07:00").getTime()

const now = ref(Date.now())
let timer = null

onMounted(() => {
    timer = window.setInterval(() => {
        now.value = Date.now()
    }, 1000)
})

onBeforeUnmount(() => {
    if (timer) window.clearInterval(timer)
})

const pad = (value) => String(value).padStart(2, "0")

const countdown = computed(() => {
    const remaining = Math.max(0, WEDDING_DATE - now.value)
    return [
        { value: String(Math.floor(remaining / 86_400_000)), label: "ថ្ងៃ" },
        { value: pad(Math.floor((remaining % 86_400_000) / 3_600_000)), label: "ម៉ោង" },
        { value: pad(Math.floor((remaining % 3_600_000) / 60_000)), label: "នាទី" },
        { value: pad(Math.floor((remaining % 60_000) / 1000)), label: "វិនាទី" },
    ]
})
</script>
