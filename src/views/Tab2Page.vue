<template>
  <ion-page>
    <!--    <ion-header>-->
    <!--      <ion-toolbar>-->
    <!--        <ion-title>Популярные рецепты</ion-title>-->
    <!--      </ion-toolbar>-->
    <!--    </ion-header>-->


    <ion-searchbar placeholder="Поиск рецепта" class="custom"></ion-searchbar>
    <ion-label class="categories_label"><b>Категории</b></ion-label>
    <br/>

      <ion-tab-bar  slot="top">
        <ion-tab-button v-for="category in categories" tab="account">
          <img class="categories_img" alt={{category.name}} :src="`/categories/${category.picture}`"/>
          <ion-label>{{category.name}}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>


    <!--      <ExploreContainer name="Тут будет список популярных рецептов" />-->
    <ion-content>
      <recipe-container :recipes="recipes" @info="infoRecipeOpen" :tab="2"/>
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
import { call, person, settings } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';
import InfoRecipe from '@/components/InfoRecipe.vue';
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      infoRecipe: Object,
      recipes: [],
      ingredients: [],
      isOpen: false,
      categories:[
        {name: "Все", picture: "all2.png"},
        {name: "Завтраки", picture: "breakfast.jpg"},
        {name: "Салаты", picture: "salad.jpg"},
        {name: "Вторые блюда", picture: "secondCourse.jpg"},
        {name: "Супы", picture: "soup.jpg"}
      ]
    }
  },
  async mounted() {
    //console.log('the component is now mounted.')
    await new Promise(resolve => setTimeout(resolve, 1000));
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get(`http://77.238.225.192:3001/api/recipes`)
        .then((res)=>this.recipes=res.data)
        .catch(error => {
          console.log(error);
        });
    // axios.get(`http://77.238.225.192:3001/api/ingredients`)
    //     .then((res)=>this.ingredients=res.data)
    //     .catch(error => {
    //       console.log(error);
    //     });
  },
  methods: {
    async infoRecipeOpen(recipe) {
      if (this.isOpen === true) {
        this.isOpen = false;
        await new Promise(resolve => setTimeout(resolve, 10));
      }
      this.infoRecipe = recipe;
      this.isOpen = true;
      // console.log("Открытие информации о рецепте:", this.isOpen);
      // console.log(this.recipes.find(r => r.id === recipe.id).id);
    },
    infoRecipeClose() {
      this.isOpen = false;
      // console.log("Закрытие информации о рецепте:", this.isOpen);
    },
  }
};

</script>

<style>
ion-searchbar.custom {
  --border-radius: 500px;
}
img.categories_img{
  max-width: 3vh;
  max-height: 3vh;
  border-radius: 50%;
}
.categories_label {
  margin-left: 5vw;
}
</style>