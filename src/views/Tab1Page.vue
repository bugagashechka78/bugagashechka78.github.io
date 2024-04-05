<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Избранные рецепты</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>



<!--      <ExploreContainer name="Тут будет список любимых рецептов" />-->
      <ion-card v-for="recipe in recipes">
        <ion-card-header>
          <ion-card-title>{{ recipe.name }}</ion-card-title>
          <ion-card-subtitle>{{ recipe.calorie }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content v-for="ingredient in recipe.ingredients">{{ ingredient.ingredient }} {{ ingredient.quantity }}</ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';

</script>

<script>
export default {
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
              ]
        },
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
              ]
        },
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
              ]
        },
        {
          id: 2,
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
              ]
        },
        {
          id: 2,
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
              ]
        },
        {
          id: 2,
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
              ]
        }
      ],
    }
  },
  methods: {

  }
}
</script>

<style scoped>
ion-card-content {
  padding-top: 0;
  padding-bottom: 0;
}
</style>



