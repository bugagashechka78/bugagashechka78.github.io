<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Меню дня</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ExploreContainer name="Здесь планируется создать график пониторинга потребленных к/б/ж/у, а также названия съеденных блюд" />
      </ion-content>
    </ion-page>
  </template>


<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';
</script>
