<template>
    <section class="mx-auto max-w-5xl">
        <ComSectionHeading eyebrow="Location" title="ទីតាំងអាពាហ៍ពិពាហ៍" />

        <div
            class="mt-8 overflow-hidden rounded-[1.75rem] border border-sand/70 bg-white shadow-[0_30px_80px_-50px_rgba(51,23,34,0.5)] sm:mt-10 sm:rounded-[2rem]"
        >
            <div class="relative">
                <img
                    src="/assets/images/map_image.png"
                    alt="Map showing the wedding venue location in Koh Pich, Phnom Penh"
                    loading="lazy"
                    decoding="async"
                    class="h-60 w-full object-cover sm:h-80 lg:h-96"
                />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum-deep/45 via-transparent to-transparent"
                    aria-hidden="true"
                ></div>

                <span
                    class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-plum/85 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ivory backdrop-blur-sm sm:left-5 sm:top-5"
                >
                    <i class="pi pi-map-marker text-gold-soft" aria-hidden="true"></i>
                    Building L
                </span>
            </div>

            <div
                class="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
            >
                <div class="flex items-start gap-3">
                    <span
                        class="flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-plum"
                    >
                        <i class="pi pi-map-marker text-lg" aria-hidden="true"></i>
                    </span>
                    <div>
                        <p
                            class="font-khmer text-sm leading-relaxed text-plum sm:text-base"
                        >
                            អគារ Building L, កោះពេជ្រ ភ្នំពេញ
                        </p>
                        <p class="mt-0.5 text-xs text-ink/55 sm:text-sm">
                            Building L, Koh Pich, Phnom Penh
                        </p>
                    </div>
                </div>

                <a
                    :href="mapsUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cta cta-plum w-full sm:w-auto"
                >
                    <i class="pi pi-external-link text-xs" aria-hidden="true"></i>
                    Open in Maps
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import ComSectionHeading from "@/Home/components/ComSectionHeading.vue"

const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Building%20L%2C%20Koh%20Pich%2C%20Phnom%20Penh%2C%20Cambodia"
</script>
