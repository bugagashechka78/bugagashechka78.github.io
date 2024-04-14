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
      <recipe-container :recipes="recipes" @info="infoRecipeOpen" :tab="1"/>

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

</script>

<script>
export default {
  data() {
    return {
      recipeToModal: Object,
      isOpen: false,
      recipes: [
        {
          id: 1,
          name: 'Плов',
          calorie: '150.7 кКал',
          ingredients:
              [
                {
                  id: 1,
                  ingredient: 'Укроп',
                  quantity: "100 г"
                },
                {
                  id: 2,
                  ingredient: 'Баранина',
                  quantity: "900 г"
                },
                {
                  id: 3,
                  ingredient: 'Рис',
                  quantity: "1400 г"
                }
                ,
                {
                  id: 4,
                  ingredient: 'Карри',
                  quantity: "5 г"
                }
              ],
          recipe_text: 'Берем пучок укропа, потом баранья',
          like: true,
          ate: false,
        },
        {
          id: 2,
          name: 'Плов',
          calorie: '150.7 кКал',
          ingredients:
              [
                {
                  id: 1,
                  ingredient: 'Укроп',
                  quantity: "100 г"
                },
                {
                  id: 2,
                  ingredient: 'Баранина',
                  quantity: "900 г"
                },
                {
                  id: 3,
                  ingredient: 'Рис',
                  quantity: "1400 г"
                }
                ,
                {
                  id: 4,
                  ingredient: 'Карри',
                  quantity: "5 г"
                }
              ],
          recipe_text: 'Берем пучок укропа, потом баранья',
          like: false,
          ate: false,
        },
        {
          id: 3,
          name: 'Плов',
          calorie: '150.7 кКал',
          ingredients:
              [
                {
                  id: 1,
                  ingredient: 'Укроп',
                  quantity: "100 г"
                },
                {
                  id: 2,
                  ingredient: 'Баранина',
                  quantity: "900 г"
                },
                {
                  id: 3,
                  ingredient: 'Рис',
                  quantity: "1400 г"
                }
                ,
                {
                  id: 4,
                  ingredient: 'Карри',
                  quantity: "5 г"
                }
              ],
          recipe_text: 'Берем пучок укропа, потом баранья',
          like: false,
          ate: false,
        },
        {
          id: 4,
          name: 'Суп',
          calorie: '60 кКал',
          ingredients:
              [
                {
                  id: 1,
                  ingredient: 'Петрушка',
                  quantity: "200 г"
                },
                {
                  id: 2,
                  ingredient: 'Курица',
                  quantity: "1210 г"
                }
              ],
          recipe_text: 'Берем пучок укропа, потом баранья',
          like: true,
          ate: false,
        },
        {
          id: 5,
          name: 'Суп',
          calorie: '60 кКал',
          ingredients:
              [
                {
                  id: 1,
                  ingredient: 'Петрушка',
                  quantity: "200 г"
                },
                {
                  id: 2,
                  ingredient: 'Курица',
                  quantity: "1210 г"
                }
              ],
          recipe_text: 'Берем пучок укропа, потом баранья',
          like: false,
          ate: false,
        },
        {
          id: 6,
          name: 'Суп',
          calorie: '60 кКал',
          ingredients:
              [
                {
                  id: 1,
                  ingredient: 'Петрушка',
                  quantity: "200 г"
                },
                {
                  id: 2,
                  ingredient: 'Курица',
                  quantity: "1210 г"
                }
              ],
          recipe_text: 'Берем пучок укропа, потом баранья',
          like: false,
          ate: true,
        }
      ],
    }
  },
  methods: {
    async infoRecipeOpen(recipe) {
      if (this.isOpen === true) {
        this.isOpen = false;
        await new Promise(resolve => setTimeout(resolve, 10));
      }
      this.recipeToModal = recipe;
      this.isOpen = true;
      // console.log("Открытие информации о рецепте:", this.isOpen);
      // console.log(this.recipes.find(r => r.id === recipe.id).id);
    },
    infoRecipeClose() {
      this.isOpen = false;
      // console.log("Закрытие информации о рецепте:", this.isOpen);
    },
  }
}
</script>

<style>
ion-searchbar.custom {
  --border-radius: 500px;
}
</style>




