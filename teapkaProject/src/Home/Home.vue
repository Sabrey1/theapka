<template>
    <ion-page class="home-page">
        <ion-content class="home-content" :fullscreen="true">
            <div class="relative min-h-screen overflow-x-clip bg-ivory text-ink">
                <ComBanner />

                <main
                    class="relative z-20 mx-auto -mt-14 w-full max-w-[1120px] px-4 pb-20 sm:-mt-20 sm:px-6 lg:px-10"
                >
                    <div class="space-y-16 sm:space-y-20 lg:space-y-24">
                        <section id="welcome" v-reveal class="scroll-mt-10 sm:scroll-mt-12">
                            <ComWelcome />
                        </section>

                        <section id="gallery" v-reveal class="scroll-mt-10 sm:scroll-mt-12">
                            <ComImageWedding />
                        </section>

                        <section id="program" v-reveal class="scroll-mt-10 sm:scroll-mt-12">
                            <ComWeddingProgram />
                        </section>

                        <section id="gift" v-reveal class="scroll-mt-10 sm:scroll-mt-12">
                            <PaymentQR />
                        </section>

                        <section id="location" v-reveal class="scroll-mt-10 sm:scroll-mt-12">
                            <ComMap />
                        </section>

                        <section id="wishes" v-reveal class="scroll-mt-10 sm:scroll-mt-12">
                            <ComWeddingWishes />
                        </section>
                    </div>
                </main>

                <ComThankYou />
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import ComWelcome from "@/Home/components/ComWelcome.vue"
import ComBanner from "@/Home/components/ComBanner.vue"
import PaymentQR from "@/Home/components/PaymentQR.vue"
import ComMap from "@/Home/components/ComMap.vue"
import ComWeddingWishes from "@/Home/components/ComWeddingWishes.vue"
import ComThankYou from "@/Home/components/ComThankYou.vue"
import ComImageWedding from "@/Home/components/ComImageWedding.vue"
import ComWeddingProgram from "@/Home/components/ComWeddingProgram.vue"

import { IonPage, IonContent } from "@ionic/vue"

const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

let revealObserver = null

if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue
                entry.target.classList.add("is-visible")
                revealObserver?.unobserve(entry.target)
            }
        },
        { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )
}

const vReveal = {
    mounted(el) {
        if (reduceMotion || !revealObserver) return
        el.classList.add("reveal")
        revealObserver.observe(el)
    },
    unmounted(el) {
        revealObserver?.unobserve(el)
    },
}
</script>
