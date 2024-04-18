<template>
  <ion-card class="item_card" button="button" @click="confirmClick($event,'info')">
    <ion-card-content>
      <img
          class="dish_img"
          :src="`/recipes/${recipe.picture}`"/>
    </ion-card-content>
    <ion-card-header>
      <ion-card-title>
        {{ recipe.name }}
      </ion-card-title>
      <ion-card-subtitle>{{ recipe.calorie }} ккал
        <ion-button @click="confirmClick($event,'like')" fill="clear" class="like-button">
          <ion-icon v-if="likeAll.includes(recipe._id)" slot="icon-only" :icon="heart"></ion-icon>
          <ion-icon v-else slot="icon-only" :icon="heartOutline"></ion-icon>
        </ion-button>
      </ion-card-subtitle>
    </ion-card-header>
    <!--    <ion-card-content v-for="ingredient in recipe.ingredients">-->
    <!--      {{ ingredient.ingredient }} {{ ingredient.quantity }} {{ ingredient.unit }}-->
    <!--    </ion-card-content>-->

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
import {useUserStore} from "../stores/UserStore";

import {storeToRefs} from "pinia";
import {useRecipeStore} from "../stores/recipeStore";

const userStore = useUserStore();
const recipeStore = useRecipeStore()
const {recipes} = storeToRefs(recipeStore)
const {likeAll, likedRecipes} = storeToRefs(userStore);

const props = defineProps(['recipe'])
const emits = defineEmits(['info'])

const confirmClick = function (click, emit_type) {
  click.preventDefault();
  click.stopPropagation();
  if (emit_type === 'like') {
    if (likeAll.value.includes(props.recipe._id) === false) {
      likeAll.value.push(props.recipe._id)
    } else {
      likeAll.value = likeAll.value.filter(item => item !== props.recipe._id);

    }
    likedRecipes.value = [];
    likeAll.value.forEach((newId) => likedRecipes.value.push(recipes.value.filter(item => item._id === newId)[0]));
    console.log(likeAll.value)
  }
  if (emit_type === 'info') {
    emits('info', props.recipe)
  }
  userStore.syncUserData();
}
</script>


<style>

.dish_img {
  max-width: 30vw;
  max-height: 30vw;
  border-radius: 5%;
  margin-top: 15px;
}

ion-card.item_card {
  max-width: 40vw;
  padding-bottom: 0;
}
</style>
