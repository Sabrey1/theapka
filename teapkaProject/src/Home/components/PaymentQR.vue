<template>
    <section class="mx-auto max-w-4xl">
        <ComSectionHeading
            eyebrow="Wedding Gift"
            title="ចំណងដៃ"
            subtitle="សូមស្កែនដើម្បីចំណងដៃ · ការទូទាត់តាម KHQR"
        />

        <div
            class="mt-8 grid gap-8 rounded-[1.75rem] border border-sand/70 bg-white/80 p-6 shadow-[0_30px_80px_-50px_rgba(51,23,34,0.5)] backdrop-blur-sm sm:mt-10 sm:rounded-[2rem] sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-12 lg:p-10"
        >
            <div class="text-center lg:text-left">
                <p
                    class="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-rose sm:text-xs"
                >
                    With Love &amp; Appreciation
                </p>

                <p
                    class="khmer-copy mt-4 font-khmer text-[0.95rem] text-ink/75 sm:text-base"
                >
                    សូមស្កែនដើម្បីចំណងដៃ · ការទូទាត់តាម KHQR
                </p>

                <p class="mt-3 text-sm leading-relaxed text-ink/55">
                    Scan the QR code with any banking app that supports KHQR.
                </p>

                <!-- Currency selector -->
                <div
                    class="mt-6 inline-flex rounded-full bg-cream p-1"
                    role="tablist"
                    aria-label="Gift currency"
                >
                    <button
                        v-for="currency in currencies"
                        :key="currency"
                        type="button"
                        role="tab"
                        :aria-selected="activeCurrency === currency"
                        class="btn-pill min-h-11 min-w-24 px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition"
                        :class="
                            activeCurrency === currency
                                ? 'bg-plum text-ivory shadow-sm'
                                : 'text-plum/65 hover:bg-white/70'
                        "
                        @click="activeCurrency = currency"
                    >
                        {{ currency }}
                    </button>
                </div>

                <div class="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                    <span
                        class="inline-flex items-center gap-2 rounded-full border border-sand/70 bg-ivory/60 px-3.5 py-2 text-xs text-ink/60"
                    >
                        <i class="pi pi-qrcode text-gold" aria-hidden="true"></i>
                        KHQR
                    </span>
                    <span
                        class="inline-flex items-center gap-2 rounded-full border border-sand/70 bg-ivory/60 px-3.5 py-2 text-xs text-ink/60"
                    >
                        <i class="pi pi-mobile text-gold" aria-hidden="true"></i>
                        Mobile Banking
                    </span>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <div
                    class="relative w-full max-w-[272px] rounded-3xl border border-gold/25 bg-white p-5 pt-7 shadow-[0_24px_60px_-35px_rgba(51,23,34,0.6)]"
                >
                    <span
                        class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-plum px-4 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-ivory"
                    >
                        KHQR
                    </span>

                    <img
                        src="/assets/images/qr_code.png"
                        alt="KHQR payment code for the wedding gift"
                        width="300"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        class="mx-auto w-full rounded-xl"
                    />

                    <p class="mt-4 text-center font-display text-2xl text-plum">
                        Sabrey
                    </p>
                    <p
                        class="text-center text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-rose"
                    >
                        {{ activeCurrency }}
                    </p>
                </div>

                <p class="mt-4 text-center font-khmer text-xs text-ink/55">
                    សូមស្កែនដើម្បីចំណងដៃ
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue"
import ComSectionHeading from "@/Home/components/ComSectionHeading.vue"

const currencies = ["Riel", "USD"]
const activeCurrency = ref("Riel")
</script>
