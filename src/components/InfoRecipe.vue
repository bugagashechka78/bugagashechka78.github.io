<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="$emit('infoClose')">
          <ion-icon slot="icon-only" :icon="chevronBackOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>Рецепт </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <div class = "image">
      <img
    src="https://ionic-docs-demo-v7.vercel.app/assets/madison.jpg"></img>
    </div>
    <div class = "name">{{ recipe.name }}</div>
    <div class = "energy">Энергетическая ценность на порцию</div>
    <div class = "energy_items">
      <ul class="item">
        <li>Калорийность</li>
        <li>{{ recipe.calorie }}</li>
      </ul>
      <ul class="item">
        <li>Белки</li>
        <li>{{ recipe.squirrels }}</li>
      </ul>
      <ul class="item">
        <li>Жиры</li>
        <li>{{ recipe.fats }}</li>
      </ul>
      <ul class="item">
        <li>Углеводы</li>
        <li>{{ recipe.carbohydrates }}</li>
      </ul>
    </div>
    <div class = "energy">Ингредиенты</div>
    <ul class="leaders">
      <li>
          <span>{{ recipe.ingredients[0].ingredient }}</span>
          <span>{{ recipe.ingredients[0].quantity  }}</span>
      </li>
      <li>
        <span>{{ recipe.ingredients[1].ingredient }}</span>
          <span>{{ recipe.ingredients[1].quantity  }}</span>
      </li>
      <li>
        <span>{{ recipe.ingredients[2].ingredient }}</span>
          <span>{{ recipe.ingredients[2].quantity  }}</span>
      </li>
    </ul>
    <div class = "energy">Способ приготовления</div>
    <ion-button @click="" expand="full">Хочу съесть
    </ion-button>
<!--    Сюда нужно будет писать информацию о рецепте -->
  </ion-content>
</template>

<script setup>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import {chevronBackOutline} from 'ionicons/icons';
</script>

<script>

export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  name: "InfoRecipe",
  emits: ["infoClose"]
}
</script>

<style scoped>
ul.leaders {
    max-width: 40em;
    margin-right: 2%;
    overflow-x: hidden;
    list-style: none
}
ul.leaders li:before {
    float: left;
    width: 0;
    white-space: nowrap;
    content:"...................."
            "...................."
            "...................."
            "...................."
            "...................."
            "...................."
}
ul.leaders span:first-child {
    padding-right: 0.33em;
    background: white
}
ul.leaders span + span {
    float: right;
    padding-left: 0.15em;
    background: white
}
.name{
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
}
.energy{
  margin-top: 3%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
}
.energy_items{
  display: flex;  
  justify-content: space-around;
  text-align: center;
}
.item{
  list-style-type: none;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.item1{
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
  width: 50%;
  height: 50%;
  border-radius: 4%;
  /*object-fit: cover;*/
}

</style>