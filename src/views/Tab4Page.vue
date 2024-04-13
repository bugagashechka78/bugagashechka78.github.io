<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Меню дня</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" v-for="ingredient in recipe.ingredients">
        {{ ingredient.ingredient }} {{ ingredient.quantity }}
        <recipe-container :recipe=recipe @want_to_eat="wantRecipe" :tab="4"/>
      </ion-content>
    </ion-page>
  </template>


<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';
import RecipeItem from '@/components/RecipeItem.vue';
/*<ExploreContainer name="Здесь планируется создать график пониторинга потребленных к/б/ж/у, а также названия съеденных блюд" />*/
</script>

<script>

export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods:{
    wantRecipe(recipe){
        this.recipe.find(r => r.id === recipe.id).ate= !this.recipe.find(r => r.id === recipe.id).ate;
        console.log(this.recipe.find(r => r.id === recipe.id).ate);
      }
    }
}
</script>

