<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Меню дня</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class = "content" :fullscreen="true">
      <br/>
      <ion-progress-bar class = "progress_bar":value="progress"></ion-progress-bar>
      <br/>
      <ion-label>Сегодня вы потребили {{ progress * 100 }}% от суточной нормы</ion-label>
      <recipe-container :recipes="recipes" @info="infoRecipeOpen" :tab="4"/>
    </ion-content>
    <ion-modal :is-open="isOpen">
      <info-recipe :recipe="infoRecipe" @infoClose="infoRecipeClose"/>
    </ion-modal>
  </ion-page>
</template>


<script>

import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader,  IonModal} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';
import RecipeItem from '@/components/RecipeItem.vue';
import { IonProgressBar } from '@ionic/vue';
import { defineComponent, ref} from 'vue';
import { IonLabel } from '@ionic/vue';
import InfoRecipe from '@/components/InfoRecipe.vue';
/*<ExploreContainer name="Здесь планируется создать график пониторинга потребленных к/б/ж/у, а также названия съеденных блюд" />*/


export default defineComponent({
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
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
  },
  /*methods:{
    wantRecipe(recipe){
        this.recipe.find(r => r.id === recipe.id).ate= !this.recipe.find(r => r.id === recipe.id).ate;
        console.log(this.recipe.find(r => r.id === recipe.id).ate);
      }
    }*/
    components: { IonProgressBar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainer, IonLabel, RecipeContainer, InfoRecipe,  IonModal},
    setup() {
      /*let sum = 0
      for(recipe in recipes)
        recipe="recipe"
        sum += int(this.recipe.calorie)
      sum = sum/2200*/
      let progress = ref(0.5);

      return {
        progress,
      };
    },    
});
</script>

<style>
.content{
  justify-content: center;
}
.progress_bar{
  text-align: center;
}
</style>

