<template>
  <ExploreContainer v-if="(recipes.length < 1)"  name="К сожалению, здесь пока нет рецептов" />
  <recipe-item
      v-else-if="(tab===2)||(tab===3)"
      v-for="recipe in recipes"
      :recipe="recipe"
      :key="recipe.id"
      @like="$emit('like', recipe)"
  />
  <recipe-item
      v-else-if="(tab===1)"
      v-for="recipe in recipes.filter(r => r.like === true)"
      :recipe="recipe"
      :key="recipe.id"
      @like="$emit('like', recipe)"
  />

</template>

<style scoped>

</style>

<script setup>
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeItem from "./RecipeItem.vue";
</script>

<script>

export default {
  components: {RecipeItem},
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
  emits: ['like'],
}
</script>
