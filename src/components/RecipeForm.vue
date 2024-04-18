<template>


  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="$emit('cancel')">
          <ion-icon slot="icon-only" :icon="chevronBackOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>Информация о блюде</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-input
          v-model="my_recipe.name"
          label="Название"
          placeholder="Введите название"
          type="text">
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input
          v-model="my_recipe.calorie"
          label="Ккал"
          placeholder="Введите калорийность на 100г"
          type="text">
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-textarea
          v-model="my_recipe.recipe_text"
          label="Рецепт"
          placeholder="Введите подробный рецепт"
          :auto-grow="true"
      >
      </ion-textarea>
    </ion-item>

    <ion-item>
      <ion-input
          v-model="new_ingredient.ingredient"
          label="Ингредиент"
          placeholder="Введите название ингредиента"
          type="text">
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input
          v-model="new_ingredient.quantity"
          label="Количество"
          placeholder="Введите количество ингредиента"
          type="text">
      </ion-input>
    </ion-item>
    <ion-button @click="addIngredient" expand="block" fill="clear">Добавить ингредиент</ion-button>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Список ингредиентов</ion-card-title>
        <ion-card-subtitle v-if="my_recipe.ingredients.length === 0">Добавьте ингредиенты</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content v-for="ingredient in my_recipe.ingredients">
        {{ ingredient.ingredient }} {{ ingredient.quantity }}
      </ion-card-content>
    </ion-card>


    <ion-fab vertical="bottom" horizontal="end">
      <ion-fab-button @click="createRecipe">
        <ion-icon :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>


</template>

<script setup>
import {
  IonInput,
  IonItem,
  IonButton,
  IonButtons,
  IonTextarea,
  IonFab,
  IonFabButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon
} from '@ionic/vue';
import {chevronBackOutline, checkmark} from 'ionicons/icons';
import {ref} from "vue";

const my_recipe = ref ({
  id: '',
  name: '',
  calorie: '',
  ingredients: [],
  recipe_text: '',
  like: false,
});
const new_ingredient = ref({
  id: '',
  ingredient: '',
  quantity: ''
});

const emits = defineEmits(['create', 'cancel']);

const addIngredient = function () {
  new_ingredient.value.id = Date.now();
  my_recipe.value.ingredients.push(new_ingredient.value);
  new_ingredient.value = {
    id: '',
    ingredient: '',
    quantity: ''
  }
};

const createRecipe = function () {
  my_recipe.value.id = Date.now();
  emits('create', my_recipe.value);
  my_recipe.value = {
    id: '',
    name: '',
    calorie: '',
    ingredients: [],
    recipe_text: '',
    like: false,
  }
}

</script>


<style scoped>

</style>