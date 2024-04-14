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

      <ion-tab-bar slot="top">
        <ion-tab-button v-for="n in 10" tab="account">
          <img class="categories_img" alt="Десерт" src="/public/favicon.png"/>
          <ion-label>Десерты</ion-label>
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
export default {
  data() {
    return {
      infoRecipe: Object,
      recipes: [
        {
          id: 1,
          name: 'Плов',
          calorie: '150.7 кКал',
          squirrels: '45 г',
          fats: '88 г',
          carbohydrates: '100 г',
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
          id: 2,
          name: 'Плов',
          calorie: '150.7 кКал',
          squirrels: '45 г',
          fats: '88 г',
          carbohydrates: '100 г',
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
          squirrels: '45 г',
          fats: '88 г',
          carbohydrates: '100 г',
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
          squirrels: '45 г',
          fats: '88 г',
          carbohydrates: '100 г',
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
          id: 5,
          name: 'Суп',
          calorie: '60 кКал',
          squirrels: '45 г',
          fats: '88 г',
          carbohydrates: '100 г',
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
          squirrels: '45 г',
          fats: '88 г',
          carbohydrates: '100 г',
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
      isOpen: false
    }
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
}
.categories_label {
  margin-left: 5vw;
}
</style>