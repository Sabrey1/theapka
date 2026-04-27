<template>
    <ion-page>
        <ion-content>
            <ComBanner />
            <ComWelcome />
            <ComImageWedding />
            <ComWeddingProgram />
            <PaymentQR />
            <ComMap />
            <ComWeddingWishes />
            <ComThankYou />
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
</script>