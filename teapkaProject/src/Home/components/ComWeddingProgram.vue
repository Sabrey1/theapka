<template>
    <section class="mx-auto max-w-4xl">
        <ComSectionHeading
            eyebrow="The Celebration"
            title="កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍"
            subtitle="សូមអញ្ជើញចូលរួមរួមអបអរសាទរជាមួយយើងខ្ញុំ"
        />

        <div
            class="mt-8 rounded-[1.75rem] border border-sand/70 bg-white/80 p-5 shadow-[0_30px_80px_-50px_rgba(51,23,34,0.5)] backdrop-blur-sm sm:mt-10 sm:rounded-[2rem] sm:p-8 lg:p-10"
        >
            <!-- Day switcher (kept ready for a second celebration day) -->
            <div
                v-if="days.length > 1"
                class="mx-auto mb-8 flex max-w-md gap-1 rounded-full bg-cream p-1"
                role="tablist"
                aria-label="Wedding days"
            >
                <button
                    v-for="(day, index) in days"
                    :key="day.short"
                    type="button"
                    role="tab"
                    :aria-selected="activeDay === index"
                    class="btn-pill min-h-11 flex-1 px-4 py-2 font-khmer text-xs transition sm:text-sm"
                    :class="
                        activeDay === index
                            ? 'bg-plum text-ivory shadow-sm'
                            : 'text-plum/70 hover:bg-white/70'
                    "
                    @click="activeDay = index"
                >
                    {{ day.short }}
                </button>
            </div>

            <div class="border-b border-dashed border-sand/80 pb-5 text-center">
                <p
                    class="flex items-center justify-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-rose sm:text-xs"
                >
                    <i class="pi pi-calendar text-gold" aria-hidden="true"></i>
                    Wedding Day
                </p>
                <p class="mt-2 font-khmer text-sm text-plum sm:text-lg">
                    {{ currentDay.date }}
                </p>
            </div>

            <ol class="relative mx-auto mt-7 max-w-2xl space-y-4 sm:mt-8 sm:space-y-5">
                <span
                    class="pointer-events-none absolute bottom-5 left-5 top-5 w-px bg-gradient-to-b from-gold/5 via-gold/40 to-gold/5 sm:left-6"
                    aria-hidden="true"
                ></span>

                <li
                    v-for="item in currentDay.items"
                    :key="item.step"
                    class="relative flex items-stretch gap-3 sm:gap-5"
                >
                    <span
                        class="relative z-10 flex size-10 shrink-0 items-center justify-center self-start rounded-full border border-gold/45 bg-ivory font-display text-base font-semibold text-plum shadow-[0_4px_14px_-6px_rgba(51,23,34,0.4)] sm:size-12 sm:text-lg"
                    >
                        {{ item.step }}
                    </span>

                    <div
                        class="min-w-0 flex-1 rounded-2xl border border-sand/50 bg-ivory/70 px-4 py-3.5 transition hover:border-gold/35 hover:bg-ivory sm:px-5 sm:py-4"
                    >
                        <p
                            class="font-khmer text-[0.68rem] tracking-normal text-gold sm:text-xs"
                        >
                            {{ item.time }}
                        </p>
                        <p
                            class="khmer-copy mt-1 font-khmer text-sm text-ink/80 sm:text-base"
                        >
                            {{ item.title }}
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from "vue"
import ComSectionHeading from "@/Home/components/ComSectionHeading.vue"

// Second celebration day stays hidden until it is confirmed.
const day2 = ref(false)

const dayOne = {
    short: "ថ្ងៃទី១",
    date: "ថ្ងៃចន្ទ ទី៣០ ខែវិច្ឆិកា ឆ្នាំ២០២៦",
    items: [
        {
            step: "1",
            time: "ម៉ោង១",
            title: "ជួបជុំភ្ញៀវរៀបចំពិធីហែរជំនួនទៅខាងស្រី",
        },
        {
            step: "3",
            time: "ម៉ោង១",
            title: "ជួបជុំភ្ញៀវរៀបចំពិធីហែរជំនួនទៅខាងស្រី",
        },
        {
            step: "4",
            time: "ម៉ោង១",
            title: "ជួបជុំភ្ញៀវរៀបចំពិធីហែរជំនួនទៅខាងស្រី",
        },
        {
            step: "5",
            time: "ម៉ោង១",
            title: "ជួបជុំភ្ញៀវរៀបចំពិធីហែរជំនួនទៅខាងស្រី",
        },
        {
            step: "6",
            time: "ម៉ោង១",
            title: "ជួបជុំភ្ញៀវរៀបចំពិធីហែរជំនួនទៅខាងស្រី",
        },
        {
            step: "7",
            time: "ម៉ោង១",
            title: "ជួបជុំភ្ញៀវរៀបចំពិធីហែរជំនួនទៅខាងស្រី",
        },
    ],
}

const dayTwo = {
    short: "ថ្ងៃទី២",
    date: "ថ្ងៃអង្គារ ទី0១ ខែវិច្ឆិកា ឆ្នាំ២០២៦",
    items: dayOne.items,
}

const days = computed(() => (day2.value ? [dayOne, dayTwo] : [dayOne]))
const activeDay = ref(0)
const currentDay = computed(() => days.value[activeDay.value] ?? dayOne)
</script>
