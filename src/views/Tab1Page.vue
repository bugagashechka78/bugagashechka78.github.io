<template>
  <ion-page>
    <!--    <ion-header>-->
    <!--      <ion-toolbar>-->
    <!--        <ion-title>Избранные рецепты</ion-title>-->
    <!--      </ion-toolbar>-->
    <!--    </ion-header>-->
    <ion-content>
      <!--  <ExploreContainer name="Тут будет список любимых рецептов" />-->

      <ion-searchbar placeholder="Поиск избранного рецепта" class="custom"></ion-searchbar>
      <recipe-container :recipes="likedRecipes" @info="infoRecipeOpen"/>
    </ion-content>
    <ion-modal :is-open="isOpen">
      <info-recipe @infoClose="infoRecipeClose" :recipe="recipeToModal"/>
    </ion-modal>
  </ion-page>
</template>

<script setup>
import {IonPage, IonHeader, IonSearchbar, IonToolbar, IonTitle, IonContent, IonModal} from '@ionic/vue';

import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';
import InfoRecipe from '@/components/InfoRecipe.vue';
import {useRecipeStore} from "../stores/recipeStore";
import {useUserStore} from "../stores/UserStore";
import {onMounted, ref, watch} from "vue"
import {storeToRefs} from "pinia"


const recipeStore = useRecipeStore();
const userStore = useUserStore();
const recipeToModal = ref({})

const isOpen = ref(false)
const {recipes, ingredients} = storeToRefs(recipeStore)
const {likeAll, likedRecipes} = storeToRefs(userStore)

onMounted(() => {
  likedRecipes.value = [];
  likeAll.value.forEach((newId) => likedRecipes.value.push(recipes.value.filter(item => item._id === newId)[0]));
  console.log(likedRecipes.value);
})

const infoRecipeOpen = async (recipe) => {
  if (isOpen.value === true) {
    isOpen.value = false;
    await new Promise(resolve => setTimeout(resolve, 10));
  }
  recipeToModal.value = recipe;
  isOpen.value = true;
  // console.log("Открытие информации о рецепте:", this.isOpen);
  // console.log(this.recipes.find(r => r.id === recipe.id).id);
}

const infoRecipeClose = function () {
  isOpen.value = false;
  // console.log("Закрытие информации о рецепте:", this.isOpen);
}

</script>

<style>
ion-searchbar.custom {
  --border-radius: 500px;
}
</style>




