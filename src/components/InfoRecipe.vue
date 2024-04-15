<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="$emit('infoClose')">
          <ion-icon slot="icon-only" :icon="chevronBackOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>Рецепт</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <div class="image">
      <img
          src= "https://cdn.pixabay.com/photo/2017/01/24/20/30/soup-2006317_1280.jpg">
    </div>
    <ion-title class="name">{{ recipe.name }}</ion-title>
    <ion-title class="energy">Энергетическая ценность на порцию</ion-title>
    <ion-card-subtitle class="energy_items">
      <ul class="item">
        <li>Калорийность</li>
        <li>{{ recipe.calorie }}</li>
      </ul>
      <ul class="item">
        <li>Белки</li>
        <li>{{ recipe.proteins}}</li>
      </ul>
      <ul class="item">
        <li>Жиры</li>
        <li>{{ recipe.fats }}</li>
      </ul>
      <ul class="item">
        <li>Углеводы</li>
        <li>{{ recipe.carbs }}</li>
      </ul>
    </ion-card-subtitle>
    <ion-card-content> Время приготовления ~ 30 мин</ion-card-content>

    <ion-card>
      <ion-card-header>
        <ion-card-title>Список ингредиентов</ion-card-title>
      </ion-card-header>
      <ion-card-content v-for="ingredient in recipe.ingredients">
        {{ ingredient.ingredient }} {{ ingredient.quantity }} {{ ingredient.unit }}
      </ion-card-content>
    </ion-card>
    <ion-title class="name">Способ приготовления</ion-title>
    <ion-card-content> {{recipe.recipeText}}Ничего сложного в приготовлении этого вкусного
       и сытного блюда нет, самое главное — соблюдать основные правила приготовления. Результат
        приятно удивит и вас и ваших родных, плов получится вкусным. 
      </ion-card-content>
    <ion-button @click="" expand="full">Хочу съесть
    </ion-button>
    <!--    Сюда нужно будет писать информацию о рецепте -->
  </ion-content>
</template>

<script setup>
import { IonHeader, IonToolbar,IonCard, IonCardContent, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonCardSubtitle, IonCardTitle, IonCardHeader } from '@ionic/vue';
import {chevronBackOutline, heart} from 'ionicons/icons';
</script>

<script>

export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  want_to_eat(recipe){
    this.recipe.ate = true;
  },
  name: "InfoRecipe",
  emits: ["infoClose"]
}
</script>

<style scoped>

.name {
  text-align: center;
}

.energy {
  margin-top: 3%;
  text-align: center;
  font-size: 1rem;
}

.energy_items {
  display: flex;
  justify-content: space-around;

}

.item {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  text-align: center;
  padding-left: 0px;
}

.item1 {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

img {
  margin-top: 3%;
  margin-bottom: 3%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 90%;
  border-radius: 4%;
  /*object-fit: cover;*/
}

</style>