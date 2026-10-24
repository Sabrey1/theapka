<template>
    <section class="mx-auto max-w-4xl">
        <ComSectionHeading
            eyebrow="Wedding Wishes"
            title="ពាក្យជូនពរសម្រាប់យើងខ្ញុំ"
            subtitle="សូមទុកពាក្យជូនពរដ៏ផ្អែមល្ហែមរបស់អ្នក"
        />

        <div class="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
            <!-- Wish form -->
            <div
                class="rounded-[1.75rem] border border-sand/70 bg-white/85 p-6 shadow-[0_30px_80px_-50px_rgba(51,23,34,0.5)] backdrop-blur-sm sm:p-8"
            >
                <form class="space-y-5" novalidate @submit.prevent="submitWish">
                    <div>
                        <label for="wish-name" class="block">
                            <span
                                class="block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-rose"
                            >
                                Your Name
                            </span>
                            <span class="mt-1 block font-khmer text-sm text-plum">
                                ឈ្មោះរបស់អ្នក
                            </span>
                        </label>
                        <input
                            id="wish-name"
                            v-model="form.name"
                            type="text"
                            maxlength="60"
                            autocomplete="name"
                            placeholder="សរសេរឈ្មោះរបស់អ្នក"
                            class="mt-2 w-full rounded-2xl border border-sand bg-ivory/70 px-4 py-3 font-khmer text-base text-ink outline-none transition placeholder:text-ink/35 focus:border-gold focus:ring-2 focus:ring-gold/20 sm:text-sm"
                        />
                    </div>

                    <div>
                        <div class="flex items-end justify-between gap-3">
                            <label for="wish-message" class="block">
                                <span
                                    class="block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-rose"
                                >
                                    Your Wish
                                </span>
                                <span class="mt-1 block font-khmer text-sm text-plum">
                                    សារជូនពរ
                                </span>
                            </label>
                            <span class="text-[0.62rem] tabular-nums text-ink/35">
                                {{ form.message.length }}/400
                            </span>
                        </div>
                        <textarea
                            id="wish-message"
                            v-model="form.message"
                            rows="4"
                            maxlength="400"
                            placeholder="សរសេរពាក្យជូនពរដ៏ផ្អែមល្ហែម..."
                            class="mt-2 w-full resize-none rounded-2xl border border-sand bg-ivory/70 px-4 py-3 font-khmer text-base leading-[1.9] text-ink outline-none transition placeholder:text-ink/35 focus:border-gold focus:ring-2 focus:ring-gold/20 sm:text-sm"
                        ></textarea>
                    </div>

                    <p
                        v-if="error"
                        role="alert"
                        class="rounded-xl bg-rose/10 px-4 py-2.5 text-xs text-rose"
                    >
                        {{ error }}
                    </p>

                    <button type="submit" class="cta cta-plum w-full">
                        <i class="pi pi-send text-xs" aria-hidden="true"></i>
                        Send Wish
                    </button>

                    <p class="text-center text-[0.68rem] leading-relaxed text-ink/40">
                        Your wish is saved on this device.
                    </p>
                </form>
            </div>

            <!-- Wish wall -->
            <div
                class="flex flex-col rounded-[1.75rem] border border-sand/70 bg-cream/45 p-6 sm:p-8"
            >
                <div class="flex items-center justify-between gap-4">
                    <p class="font-display text-xl text-plum sm:text-2xl">Guest Wishes</p>
                    <span
                        class="rounded-full border border-sand/80 bg-white px-3 py-1 text-[0.62rem] font-semibold tabular-nums text-plum/70"
                    >
                        {{ wishes.length }}
                    </span>
                </div>

                <div
                    v-if="wishes.length"
                    class="mt-5 max-h-[24rem] space-y-3 overflow-y-auto pr-1"
                >
                    <article
                        v-for="wish in wishes"
                        :key="wish.id"
                        class="animate-fade-down rounded-2xl border border-sand/60 bg-white/90 p-4"
                    >
                        <div class="flex items-center gap-3">
                            <span
                                class="flex size-9 shrink-0 items-center justify-center rounded-full bg-plum/10 font-display text-base font-semibold text-plum"
                                aria-hidden="true"
                            >
                                {{ initial(wish.name) }}
                            </span>
                            <div class="min-w-0">
                                <p class="truncate text-sm font-semibold text-plum">
                                    {{ wish.name }}
                                </p>
                                <p
                                    class="text-[0.62rem] uppercase tracking-[0.16em] text-ink/40"
                                >
                                    {{ formatDate(wish.createdAt) }}
                                </p>
                            </div>
                        </div>
                        <p class="khmer-copy mt-3 font-khmer text-sm text-ink/75">
                            {{ wish.message }}
                        </p>
                    </article>
                </div>

                <div
                    v-else
                    class="flex flex-1 flex-col items-center justify-center py-10 text-center"
                >
                    <span
                        class="flex size-14 items-center justify-center rounded-full bg-white text-gold"
                    >
                        <i class="pi pi-heart text-xl" aria-hidden="true"></i>
                    </span>
                    <p class="mt-4 font-khmer text-sm text-ink/60">
                        មិនទាន់មានពាក្យជូនពរនៅឡើយទេ
                    </p>
                    <p class="mt-1 text-xs text-ink/40">
                        Be the first to leave a wish for the couple.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
import ComSectionHeading from "@/Home/components/ComSectionHeading.vue"

const STORAGE_KEY = "wedding-wishes-v1"

const wishes = ref([])
const form = ref({ name: "", message: "" })
const error = ref("")

onMounted(() => {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")
        if (Array.isArray(stored)) {
            wishes.value = stored.filter(
                (wish) =>
                    wish &&
                    typeof wish.name === "string" &&
                    typeof wish.message === "string"
            )
        }
    } catch {
        wishes.value = []
    }
})

watch(
    wishes,
    (value) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
        } catch {
            // Storage can be unavailable (private mode); the wall still works in memory.
        }
    },
    { deep: true }
)

function submitWish() {
    const name = form.value.name.trim()
    const message = form.value.message.trim()

    if (!name || !message) {
        error.value = "Please add your name and a short wish."
        return
    }

    error.value = ""
    wishes.value.unshift({
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        name,
        message,
        createdAt: Date.now(),
    })
    form.value = { name: "", message: "" }
}

function initial(name) {
    return name.trim().charAt(0).toUpperCase()
}

function formatDate(timestamp) {
    try {
        return new Date(timestamp).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
    } catch {
        return ""
    }
}
</script>
