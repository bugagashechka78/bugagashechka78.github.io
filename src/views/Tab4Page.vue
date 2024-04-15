<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Меню дня</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ExploreContainer
          name="Здесь планируется создать график пониторинга потребленных к/б/ж/у, а также названия съеденных блюд"/>
      <br/>
        <ion-progress-bar :value="progress"></ion-progress-bar>
      <br/>
    </ion-content>
  </ion-page>
</template>


<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';
import RecipeItem from '@/components/RecipeItem.vue';
import { IonProgressBar } from '@ionic/vue';
import { defineComponent, ref} from 'vue';
/*<ExploreContainer name="Здесь планируется создать график пониторинга потребленных к/б/ж/у, а также названия съеденных блюд" />*/


export default defineComponent({
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
    }
  },
  /*props: {
    recipe: {
      type: Object,
      required: true
    }
  },*/
  /*methods:{
    wantRecipe(recipe){
        this.recipe.find(r => r.id === recipe.id).ate= !this.recipe.find(r => r.id === recipe.id).ate;
        console.log(this.recipe.find(r => r.id === recipe.id).ate);
      }
    }*/
    components: { IonProgressBar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainer},
    setup() {
      let progress = ref(0.5);

      return {
        progress,
      };
    },
    mounted() {
      setInterval(() => {
        this.progress += 0.06;

        // Reset the progress bar when it reaches 100%
        // to continuously show the demo
        if (this.progress > 1) {
          setTimeout(() => {
            this.progress = 0;
          }, 1000);
        }
      }, 1000);
    }
});
</script>

<style>

</style>

