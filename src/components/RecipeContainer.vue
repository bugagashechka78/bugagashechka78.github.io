<template>
  <div>

    <ExploreContainer v-if="(recipes.length < 1)" name="К сожалению, здесь пока нет рецептов"/>
    <ion-grid>
      <ion-row>
        <ion-col
            v-for="recipe in recipes"
        >
          <recipe-item
              :recipe="recipe"
              :key="recipe._id"
              @info="$emit('info', recipe)"
          />
        </ion-col>
      </ion-row>
    </ion-grid>

    <!--    <recipe-item-->
    <!--        v-else-if="(tab===2)||(tab===3)"-->
    <!--        v-for="recipe in recipes"-->
    <!--        :recipe="recipe"-->
    <!--        :key="recipe.id"-->
    <!--        @like="likeRecipe"-->
    <!--        @info="$emit('info', recipe)"-->
    <!--    />-->
    <!--    <recipe-item-->
    <!--        v-else-if="(tab===1)"-->
    <!--        v-for="recipe in recipes.filter(r => r.like === true)"-->
    <!--        :recipe="recipe"-->
    <!--        :key="recipe.id"-->
    <!--        @like="likeRecipe"-->
    <!--        @info="$emit('info', recipe)"-->
    <!--    />-->
    <!--    <recipe-item-->
    <!--        v-else-if="(tab===4)"-->
    <!--        v-for="recipe in recipes"-->
    <!--        :recipe="recipe"-->
    <!--        :key="recipe.id"-->
    <!--        @like="likeRecipe"-->
    <!--        @info="$emit('info', recipe)"-->
    <!--    />-->

  </div>
</template>

<style scoped>

</style>

<script setup>
import {IonContent, IonGrid, IonRow, IonCol} from "@ionic/vue";
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeItem from "./RecipeItem.vue";

const props = defineProps([
  'recipes'
])
const emits = defineEmits(['info'])


</script>


