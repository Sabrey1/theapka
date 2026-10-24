<template>
    <section class="mx-auto max-w-5xl">
        <ComSectionHeading
            eyebrow="Our Moments"
            title="កំរងរូបភាពអាពាហ៍ពិពាហ៍របស់យើង"
            subtitle="រូបភាពដ៏ផ្អែមល្ហែមនៃថ្ងៃពិសេសរបស់យើងទាំងពីរ"
        />

        <div class="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            <figure
                v-for="(photo, index) in photos"
                :key="index"
                class="group relative overflow-hidden rounded-2xl bg-cream ring-1 ring-transparent transition duration-500 hover:ring-gold/40 sm:rounded-3xl"
            >
                <img
                    :src="photo.src"
                    :alt="photo.alt"
                    loading="lazy"
                    decoding="async"
                    :class="[
                        'aspect-[4/5] h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]',
                        photo.position,
                    ]"
                />
                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum-deep/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                ></div>
            </figure>
        </div>
    </section>
</template>

<script setup>
import ComSectionHeading from "@/Home/components/ComSectionHeading.vue"

const photos = [
    {
        src: "/assets/images/wedding_photo_1.jpg",
        alt: "Sabrey and Sara in traditional Khmer wedding attire",
        position: "object-[50%_20%]",
    },
    {
        src: "/assets/images/wedding_photo_2.jpg",
        alt: "The couple at Angkor Wat",
        position: "object-center",
    },
    {
        src: "/assets/images/wedding_photo_1.jpg",
        alt: "Portrait of the bride and groom",
        position: "object-[50%_45%]",
    },
    {
        src: "/assets/images/wedding_photo_2.jpg",
        alt: "The couple smiling together",
        position: "object-[30%_50%]",
    },
    {
        src: "/assets/images/wedding_photo_1.jpg",
        alt: "Traditional Khmer wedding portrait",
        position: "object-[50%_70%]",
    },
    {
        src: "/assets/images/wedding_photo_2.jpg",
        alt: "Wedding photograph at the temple",
        position: "object-[70%_50%]",
    },
]
</script>
