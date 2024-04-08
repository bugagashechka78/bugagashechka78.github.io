<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Избранные рецепты</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
<!--  <ExploreContainer name="Тут будет список любимых рецептов" />-->

      <recipe-container :recipes="recipes" @like="likeRecipe" :tab="1"/>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';

import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';

</script>

<script>
export default {
  components: {
    RecipeContainer,
  },
  data() {
    return {
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
          recipe_text:'Берем пучок укропа, потом баранья',
          like: true,
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
          recipe_text:'Берем пучок укропа, потом баранья',
          like: false,
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
          recipe_text:'Берем пучок укропа, потом баранья',
          like: false,
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
          recipe_text:'Берем пучок укропа, потом баранья',
          like: true,
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
          recipe_text:'Берем пучок укропа, потом баранья',
          like: false,
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
          recipe_text:'Берем пучок укропа, потом баранья',
          like: false,
        }
      ],
    }
  },
  methods: {
    likeRecipe(recipe){
      this.recipes.find(r => r.id === recipe.id).like = !this.recipes.find(r => r.id === recipe.id).like;
      console.log(this.recipes.find(r => r.id === recipe.id).like);
    },
  }
}
</script>




