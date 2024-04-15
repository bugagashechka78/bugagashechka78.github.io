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
      <ion-progress-bar :value="progress"></ion-progress-bar>
    </ion-content>
  </ion-page>
</template>


<script setup>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from '@/components/RecipeContainer.vue';
import RecipeItem from '@/components/RecipeItem.vue';
import { IonProgressBar } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
/*<ExploreContainer name="Здесь планируется создать график пониторинга потребленных к/б/ж/у, а также названия съеденных блюд" />*/
</script>

<script>

export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  /*methods:{
    wantRecipe(recipe){
        this.recipe.find(r => r.id === recipe.id).ate= !this.recipe.find(r => r.id === recipe.id).ate;
        console.log(this.recipe.find(r => r.id === recipe.id).ate);
      }
    }*/
    components: { IonProgressBar },
    setup() {
      let progress = ref(0);

      return {
        progress,
      };
    },
    mounted() {
      setInterval(() => {
        this.progress += 0.01;

        // Reset the progress bar when it reaches 100%
        // to continuously show the demo
        if (this.progress > 1) {
          setTimeout(() => {
            this.progress = 0;
          }, 1000);
        }
      }, 50);
    },
}
</script>

