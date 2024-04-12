<template>
  <ion-page>
    <ion-header class="headerTab3">
      <ion-toolbar>
        <ion-title>Мои рецепты</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <ion-modal ref='modal_win' trigger="open-modal">
          <recipe-form @create="createRecipe" @cancel="cancelModal"/>
      </ion-modal>

      <recipe-container :recipes="recipes" @like="likeRecipe" @info="infoRecipeOpen"  :tab="3"/>

      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button id="open-modal">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>
    <ion-modal :is-open="isOpen">
      <info-recipe @infoClose="infoRecipeClose"/>
    </ion-modal>
  </ion-page>
</template>

<script setup>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFab, IonFabButton, IonModal} from '@ionic/vue';
import {add} from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from "@/components/RecipeContainer.vue";
import RecipeForm from "@/components/RecipeForm.vue";
import InfoRecipe from '@/components/InfoRecipe.vue';
</script>

<script>
export default {
  components: {
    RecipeContainer, RecipeForm, InfoRecipe,
  },
  data() {
    return {
      isOpen: false,
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
              ],
          recipe_text:'Берем пучок укропа, потом баранья',
          like: false,
        },
      ],
      my_recipe_name: '',
      my_recipe_calorie: '',
      my_recipe_ingredient: '',
      my_recipe_ingredient_quantity: '',
    }
  },
  methods: {
    likeRecipe(recipe){

      this.recipes.find(r => r.id === recipe.id).like = !this.recipes.find(r => r.id === recipe.id).like;
      console.log(this.recipes.find(r => r.id === recipe.id).like);
    },
    createRecipe(recipe) {
      this.recipes.push(recipe);
      this.$refs.modal_win.$el.dismiss(null, 'cancel');
    },
    removeRecipe(recipe) {
      this.recipes = this.recipes.filter(r => r.id !== recipe.id)
    },
    cancelModal(){
      this.$refs.modal_win.$el.dismiss(null, 'cancel');
    },
    async infoRecipeOpen(recipe){
      if (this.isOpen === true){
        this.isOpen = false;
        await new Promise(resolve => setTimeout(resolve, 10));
      }
      this.isOpen = true;
      // console.log("Открытие информации о рецепте:", this.isOpen);
      // console.log(this.recipes.find(r => r.id === recipe.id).id);
    },
    infoRecipeClose(){
      this.isOpen = false;
      // console.log("Закрытие информации о рецепте:", this.isOpen);
    },
  }
}
</script>

<style scoped>

</style>