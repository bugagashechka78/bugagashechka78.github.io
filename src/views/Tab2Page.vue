<template>
  <ion-page>

    <ion-searchbar v-model="searchRecipe" placeholder="Поиск рецепта" class="custom" :debounce="200"
                   @ionInput="handleInput($event)"></ion-searchbar>
    <ion-label class="categories_label"><b>Категории</b></ion-label>

    <ion-tab-bar class="bar" slot="top">
      <ion-tab-button v-for="category in categories" @click="filterByCategory(category.name)" tab=category>
        <img class="categories_img" alt={{category.name}} :src="`/categories/${category.picture}`"/>
        <ion-text v-if="currentCategory === category.name" color="primary">
          <ion-label class="category_name">{{ category.name }}</ion-label>
        </ion-text>
        <ion-text v-else>
          <ion-label class="category_name">{{ category.name }}</ion-label>
        </ion-text>
      </ion-tab-button>
    </ion-tab-bar>


    <!--      <ExploreContainer name="Тут будет список популярных рецептов" />-->
    <ion-content>
      <recipe-container :recipes="filteredByCategoryRecipes" @info="infoRecipeOpen"/>
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
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonContent,
  IonModal,
  IonText
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';
import InfoRecipe from '@/components/InfoRecipe.vue';

import {useRecipeStore} from "../stores/recipeStore";
import {storeToRefs} from "pinia";
import {ref} from "vue";


const recipeStore = useRecipeStore();

const infoRecipe = ref({})
const searchRecipe = ref('')
const currentCategory = ref('Все')
const {recipes, ingredients} = storeToRefs(recipeStore)

const filteredRecipes = ref([]);
filteredRecipes.value = recipes.value;
const filteredByCategoryRecipes = ref([]);
filteredByCategoryRecipes.value = filteredRecipes.value;
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

const handleInput = function (event) {
  const query = event.target.value.toLowerCase();
  filteredRecipes.value = recipes.value.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
  filteredByCategoryRecipes.value = filteredRecipes.value;
}

const filterByCategory = function (category) {
  currentCategory.value = category;
  if (category === "Второе") {
    category = "Вторые блюда";
  }
  if (category === "Все") {
    filteredByCategoryRecipes.value = filteredRecipes.value;
  } else {
    filteredByCategoryRecipes.value = filteredRecipes.value.filter((d) => d.category === category);
  }
}

</script>

<style>
.bar {
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

.category_name {
  margin-top: 5px;
}
</style>