<template>
  <ion-card button="button" @click="$emit('info', recipe)">
    <ion-card-header>
      <ion-card-title>
        {{ recipe.name }}
        <ion-button @click="$emit('like', recipe)" fill="clear">
          <ion-icon v-if="recipe.like === false" slot="icon-only" :icon="heartOutline"></ion-icon>
          <ion-icon v-else slot="icon-only" :icon="heart"></ion-icon>
        </ion-button>

      </ion-card-title>
      <ion-card-subtitle>{{ recipe.calorie }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content v-for="ingredient in recipe.ingredients">
      {{ ingredient.ingredient }} {{ ingredient.quantity }}
    </ion-card-content>


  </ion-card>
</template>

<style scoped>
ion-card {
  padding-bottom: 25px;
}

ion-card-content {
  padding-top: 0;
  padding-bottom: 0;
}

ion-card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ion-card-subtitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>

<script setup>
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
import {IonButton, IonIcon} from '@ionic/vue';
import {heartOutline, heart} from 'ionicons/icons';

</script>

<script>

export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  emits: ['like', 'info'],
}
</script>
