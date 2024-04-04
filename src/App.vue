<template>
  <div>
    <h2>Список рецептов</h2>
    <div class="recipe" v-for="recipe in recipes" v-bind:key="recipe.id">
      <div><strong>Название рецепта:</strong> {{ recipe.name }}</div>
      <div><strong>Ингредиенты:</strong>
        <div class="ingredient" v-for="ingredient in recipe.ingredients" v-bind:key="ingredient.id">{{ ingredient.ingredient }} - {{ ingredient.quantity }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [
        {
          id: 1,
          name: 'Плов',
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
              ]
        },
        {
          id: 2,
          name: 'Суп',
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
              ]
        }
      ],
    }
  },
  methods: {

  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.recipe {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>