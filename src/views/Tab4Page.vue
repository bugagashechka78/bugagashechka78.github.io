<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Меню дня (В разработке)</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content" :fullscreen="true">
      <br/>
      <ion-progress-bar class="progress_bar" :value="progress"></ion-progress-bar>
      <br/>
      <ion-label><b>Сегодня вы потребили {{ (progress * 100).toFixed(2) }}% от суточной нормы</b></ion-label>
      <br/><br/>
      <ion-label>Ваша суточная норма: <b>{{ calorieL }} ккал</b></ion-label>
      <br/><br/>
      <ion-label>На данный момент потреблено: <b>{{ eatenC }} ккал</b></ion-label>
      <br/><br/>
      <ion-label>Меню дня:</ion-label>
      <br/><br/>
      <ion-card v-for="recipe in eatenRecipes">
        <ion-card-title>
          {{ recipe.name }}
        </ion-card-title>
        <ion-card-header>
          {{ recipe.weight }} г ({{ ((recipe.calorie * recipe.weight) / 100).toFixed(0) }} ккал)
        </ion-card-header>
      </ion-card>

      <!--      <recipe-container :recipes="recipes" @info="infoRecipeOpen"/>-->
    </ion-content>
    <ion-modal :is-open="isOpen">
      <info-recipe :recipe="infoRecipe" @infoClose="infoRecipeClose"/>
    </ion-modal>
  </ion-page>
</template>


<script setup>

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonModal,
  IonLabel,
  IonProgressBar
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';
import RecipeItem from '@/components/RecipeItem.vue';
import {defineComponent, ref, watch} from 'vue';
import InfoRecipe from '@/components/InfoRecipe.vue';


import {useUserStore} from "../stores/UserStore";
import {storeToRefs} from "pinia";

const userStore = useUserStore();
const {calorieLimit, eatenAll} = storeToRefs(userStore);

const isOpen = ref(false);
const infoRecipe = ref({});
const progress = ref(0.2688);
progress.value = 0 / calorieLimit.value;
const calorieL = ref(2064);
calorieL.value = calorieLimit.value;
const eatenRecipes = ref([]);
eatenRecipes.value = eatenAll.value;
const eatenC = ref(0);
eatenC.value = userStore.getEatenCalorieSumm;

watch(()=>userStore.getEatenCalorieSumm, (newVal, oldVal) => {
      eatenC.value = userStore.getEatenCalorieSumm;
      progress.value = eatenC.value / calorieL.value;
    },
    {immediate: true})

watch(calorieLimit, (newVal, oldVal) => {
  eatenC.value = userStore.getEatenCalorieSumm;
  calorieL.value = newVal;
  progress.value = eatenC.value / newVal;
})

const infoRecipeOpen = async (recipe) => {
  if (isOpen.value === true) {
    isOpen.value = false;
    await new Promise(resolve => setTimeout(resolve, 10));
  }
  infoRecipe.value = recipe;
  isOpen.value = true;
}

const infoRecipeClose = function () {
  isOpen.value = false;
  // console.log("Закрытие информации о рецепте:", this.isOpen);
}

</script>

<style>
.content {
  justify-content: center;
}

.progress_bar {
  text-align: center;
}
</style>

