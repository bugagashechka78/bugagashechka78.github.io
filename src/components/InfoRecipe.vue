<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="$emit('infoClose')">
          <ion-icon slot="icon-only" :icon="chevronBackOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>Рецепт</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>

<!--    Сюда нужно будет писать информацию о рецепте -->

  </ion-content>
</template>

<script setup>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import {chevronBackOutline} from 'ionicons/icons';
</script>

<script>

export default {
  name: "InfoRecipe",
  emits: ["infoClose"]
}
</script>

<style scoped>

</style>