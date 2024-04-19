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
      <img alt={{recipe.name}} :src="`/recipes/${recipe.picture}`"/>
    </div>
    <ion-title class="name">{{ recipe.name }}</ion-title>
    <ion-title class="energy">Энергетическая ценность на порцию</ion-title>
    <ion-card-subtitle class="energy_items">
      <ul class="item">
        <li>Калорийность</li>
        <li>{{ recipe.calorie }} ккал</li>
      </ul>
      <ul class="item">
        <li>Белки</li>
        <li>{{ recipe.proteins }} г</li>
      </ul>
      <ul class="item">
        <li>Жиры</li>
        <li>{{ recipe.fats }} г</li>
      </ul>
      <ul class="item">
        <li>Углеводы</li>
        <li>{{ recipe.carbs }} г</li>
      </ul>
    </ion-card-subtitle>
    <ion-card-content> Время приготовления: {{ recipe.cookingTime }}</ion-card-content>

    <ion-card>
      <ion-card-header>
        <ion-card-title>Список ингредиентов</ion-card-title>
      </ion-card-header>
      <ion-card-content v-for="ingredient in recipe.ingredients">
        {{ ingredients.find(r => r.name === ingredient.ingredientId).name }} ..... {{ ingredient.quantity }}
        {{ ingredient.unit }} ..............................
        КБЖУ {{ ingredients.find(r => r.name === ingredient.ingredientId).calorie }}
        /{{ ingredients.find(r => r.name === ingredient.ingredientId).proteins }}
        /{{ ingredients.find(r => r.name === ingredient.ingredientId).fats }}
        /{{ ingredients.find(r => r.name === ingredient.ingredientId).carbs }}
      </ion-card-content>
    </ion-card>
    <ion-title class="name">Способ приготовления</ion-title>
    <br/>
    <ion-card-content><p v-for="paragraph in recipe.recipeText.split('\n')">{{ paragraph }}</p></ion-card-content>
    <ion-item>
      <ion-input
          v-model="eatWeight"
          placeholder="Введите, сколько грамм готового блюда вы съели"
          type="number">
      </ion-input>
      <ion-note slot="end">г</ion-note>
    </ion-item>
    <ion-button @click="want_to_eat" id="ate" expand="full">Хочу съесть
    </ion-button>

    <ion-alert
        trigger="ate"
        header="Сохранено"
        :buttons="alertButtons">
    </ion-alert>
    <!--    Сюда нужно будет писать информацию о рецепте -->
  </ion-content>
</template>

<script setup>
import {
  IonHeader,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonAlert,
  IonInput,
  IonItem,
  IonNote
} from '@ionic/vue';
import {chevronBackOutline, heart} from 'ionicons/icons';
import {storeToRefs} from "pinia/dist/pinia";
import {useRecipeStore} from "../stores/recipeStore";
import {useUserStore} from "../stores/UserStore";
import {ref, watch} from "vue"



const userStore = useUserStore();
const { eatenAll } = storeToRefs(userStore);

const props = defineProps([
  'recipe'
]);
const emits = defineEmits(['infoClose']);

const recipeStore = useRecipeStore();
const {ingredients} = storeToRefs(recipeStore);
const eatWeight = ref('')
const alertButtons = ['Ok'];


const want_to_eat = function () {
  let eatenRecipe = {name: props.recipe.name, weight: eatWeight.value, calorie: props.recipe.calorie}
  //console.log(eatenRecipe);
  eatenAll.value.push(eatenRecipe);
  eatWeight.value = ''
  // props.recipe.ate = true;
}
</script>

<style scoped>

ion-card-content {
  padding-top: 0;
  padding-bottom: 5px;
}

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
  padding-left: 0;
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