<template>
  <ion-card class="item_card" button="button" @click="confirmClick($event,'info')">
    <ion-card-header>
      <ion-card-title>
        {{ recipe.name }}
      </ion-card-title>
      <ion-card-subtitle>{{ recipe.calorie }} ккал
        <ion-button @click="confirmClick($event,'like')" fill="clear" class="like-button">
          <ion-icon v-if="recipe.like === false" slot="icon-only" :icon="heartOutline"></ion-icon>
          <ion-icon v-else slot="icon-only" :icon="heart"></ion-icon>
        </ion-button>
      </ion-card-subtitle>
    </ion-card-header>
    <!--    <ion-card-content v-for="ingredient in recipe.ingredients">-->
    <!--      {{ ingredient.ingredient }} {{ ingredient.quantity }} {{ ingredient.unit }}-->
    <!--    </ion-card-content>-->
    <ion-card-content>
      <img
          class="dish_img"
          :src="`/recipes/${recipe.picture}`"/>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
.like-button {
  z-index: 1000;
}

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
  methods: {
    confirmClick(click, emit_type) {
      click.preventDefault();
      click.stopPropagation();
      this.$emit(emit_type, this.recipe);
    }
  }
}
</script>

<style>
.dish_img {
  max-width: 30vw;
  max-height: 30vw;
  border-radius: 5%;
}

ion-card.item_card {
  max-width: 40vw;
}
</style>
