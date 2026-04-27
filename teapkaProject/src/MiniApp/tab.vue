<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="playCircle" />
          <ion-label>Listen now</ion-label>
        </ion-tab-button>

       

        <ion-tab-button tab="library" href="/weddingGift">
          <ion-icon :icon="library" />
          <ion-label>Wedding Gift</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio" href="/templatePage">
          <ion-icon :icon="radio" />
          <ion-label>Template</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/userInfo">
          <ion-icon :icon="search" />
          <ion-label>User Info</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  import { playCircle, radio, library, search } from 'ionicons/icons';
</script>