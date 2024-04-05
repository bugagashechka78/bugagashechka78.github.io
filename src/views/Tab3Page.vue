<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Мои рецепты</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-item>
      <ion-input
          v-bind:value="my_recipe_name"
          @input="my_recipe_name = $event.target.value"
          label="Название"
          placeholder="Введите название"
          type="text">
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input
          v-bind:value="my_recipe_calorie"
          @input="my_recipe_calorie = $event.target.value"
          label="Ккал"
          placeholder="Введите калорийность на 100г"
          type="text">
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input
          v-bind:value="my_recipe_ingredient"
          @input="my_recipe_ingredient = $event.target.value"
          label="Ингредиент"
          placeholder="Введите главный ингредиент"
          type="text">
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input
          v-bind:value="my_recipe_ingredient_quantity"
          @input="my_recipe_ingredient_quantity = $event.target.value"
          label="Количество"
          placeholder="Введите количество главного ингредиента"
          type="text">
      </ion-input>
    </ion-item>
    <ion-button @click="createRecipe" expand="block" fill="outline">Добавить рецепт</ion-button>

    <ion-content>

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
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonButton} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

<script>
export default {
  data() {
    return {
      recipes: [
        {
          id: 1,
          name: 'Мой Плов',
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
      ],
      my_recipe_name: '',
      my_recipe_calorie: '',
      my_recipe_ingredient: '',
      my_recipe_ingredient_quantity: '',
    }
  },
  methods: {
    createRecipe() {
      const newRecipe = {
        id: Date.now(),
        name: this.my_recipe_name,
        calorie: this.my_recipe_calorie,
        ingredients:
        [
          {
            id: Date.now(),
            ingredient: this.my_recipe_ingredient,
            quantity: this.my_recipe_ingredient_quantity,

          }
        ]
      }
      this.recipes.push(newRecipe);
      this.my_recipe_name = '';
      this.my_recipe_calorie = '';
      this.my_recipe_ingredient = '';
      this.my_recipe_ingredient_quantity = '';

    },
  }
}
</script>

<style scoped>
ion-card-content {
  padding-top: 0;
  padding-bottom: 0;
}
</style>