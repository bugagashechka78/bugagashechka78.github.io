<template>
  <div>

    <ExploreContainer v-if="(recipes.length < 1)" name="К сожалению, здесь пока нет рецептов"/>
    <recipe-item
        v-else-if="(tab===2)||(tab===3)"
        v-for="recipe in recipes"
        :recipe="recipe"
        :key="recipe.id"
        @like="likeRecipe"
        @info="$emit('info', recipe)"
    />
    <recipe-item
        v-else-if="(tab===1)"
        v-for="recipe in recipes.filter(r => r.like === true)"
        :recipe="recipe"
        :key="recipe.id"
        @like="likeRecipe"
        @info="$emit('info', recipe)"
    />
    <recipe-item
        v-else-if="(tab===4)"
        v-for="recipe in recipes"
        :recipe="recipe"
        :key="recipe.id"
    />

  </div>
</template>

<style scoped>

</style>

<script setup>
import {IonContent} from "@ionic/vue";
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeItem from "./RecipeItem.vue";
</script>

<script>

export default {
  name: "RecipeContainer",
  props: {
    recipes: {
      type: Array,
      required: true
    },
    tab: {
      type: Number,
      required: true
    }
  },
  emits: ['like', 'info'],
  methods: {
    likeRecipe(recipe) {
      this.recipes.find(r => r.id === recipe.id).like = !this.recipes.find(r => r.id === recipe.id).like;
      console.log(this.recipes.find(r => r.id === recipe.id).like);
    },

  }
}
</script>
