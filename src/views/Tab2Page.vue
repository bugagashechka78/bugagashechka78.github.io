<template>
  <ion-page>

    <ion-searchbar placeholder="Поиск рецепта" class="custom" :debounce="1000" @ionInput="handleInput($event)"></ion-searchbar>
    <ion-label class="categories_label"><b>Категории</b></ion-label>

<<<<<<< HEAD
    <ion-tab-bar slot="top">
      <ion-tab-button  v-for="category in categories" tab="account">
=======
    <ion-tab-bar class = "bar" slot="top">
      <ion-tab-button v-for="category in categories" tab="account">
>>>>>>> 96ba87ccbdee5666dbbd8e90c3433508ca3e7b2e
        <img class="categories_img" alt={{category.name}} :src="`/categories/${category.picture}`"/>
        <ion-label>{{ category.name }}</ion-label>
      </ion-tab-button>
    </ion-tab-bar>


    <!--      <ExploreContainer name="Тут будет список популярных рецептов" />-->
    <ion-content>
      <recipe-container :recipes="filteredRecipes" @info="infoRecipeOpen"/>
    </ion-content>
    <ion-modal :is-open="isOpen">
      <info-recipe :recipe="infoRecipe" @infoClose="infoRecipeClose"/>
    </ion-modal>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonSearchbar,
  IonIcon,
  IonTabBar, IonTabButton, IonTabs,
  IonHeader,
  IonLabel,
  IonTitle,
  IonNote,
  IonAvatar,
  IonContent,
  IonModal
} from '@ionic/vue';
import {call, person, settings} from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';
import InfoRecipe from '@/components/InfoRecipe.vue';

import {useRecipeStore} from "../stores/recipeStore";
import {storeToRefs} from "pinia";
import {ref} from "vue";


const recipeStore = useRecipeStore();

const infoRecipe = ref({})
const {recipes, ingredients} = storeToRefs(recipeStore)

const filteredRecipes = ref(recipes);
const isOpen = ref(false)
const categories = [
  {name: "Все", picture: "all2.png"},
  {name: "Завтраки", picture: "breakfast.jpg"},
  {name: "Салаты", picture: "salad.jpg"},
  {name: "Второе", picture: "secondCourse.jpg"},
  {name: "Супы", picture: "soup.jpg"}
]

const infoRecipeOpen = async (recipe) => {
  if (isOpen.value === true) {
    isOpen.value = false;
    await new Promise(resolve => setTimeout(resolve, 10));
  }
  infoRecipe.value = recipe;
  isOpen.value = true;
  // console.log("Открытие информации о рецепте:", this.isOpen);
  // console.log(this.recipes.find(r => r.id === recipe.id).id);
}

const infoRecipeClose = function () {
  isOpen.value = false;
  // console.log("Закрытие информации о рецепте:", this.isOpen);
}

const handleInput = function(event) {
  const query = event.target.value.toLowerCase();
  filteredRecipes.value = recipes.value.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
}

</script>

<style>
.bar{
  height: 7rem;
}
ion-searchbar.custom {
  --border-radius: 500px;
}

img.categories_img {
  max-width: 6vh;
  max-height: 6vh;
  border-radius: 50%;
}

.categories_label {
  margin-left: 5vw;
}
</style>