<template>
  <ion-page>
    <ion-header class="headerTab3">
      <ion-toolbar>
        <ion-title>Мои рецепты (В разработке)</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <ion-modal ref='modal_win' trigger="open-modal">
        <recipe-form @create="createRecipe" @cancel="cancelModal"/>
      </ion-modal>

      <recipe-container :recipes="recipes" @info="infoRecipeOpen"/>

      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button id="open-modal">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>
    <ion-modal :is-open="isOpen">
      <info-recipe @infoClose="infoRecipeClose" :recipe="infoRecipe"/>
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
  IonIcon,
  IonFab,
  IonFabButton,
  IonModal
} from '@ionic/vue';
import {add} from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';
import RecipeContainer from "@/components/RecipeContainer.vue";
import RecipeForm from "@/components/RecipeForm.vue";
import InfoRecipe from '@/components/InfoRecipe.vue';
</script>

<script>
export default {
  data() {
    return {
      isOpen: false,
      infoRecipe: [],
      recipes: [
        {
          _id: "11111111111",
          name: "Свекольник",
          picture: "svekolnik.jpg",
          calorie: 56,
          proteins: 4,
          fats: 2,
          carbs: 6,
          recipeText: "ШАГ 1. Свеклу можно отварить или запечь. Отваривать её нужно 1 - 1.5 часа в зависимости от размера, поместив в кастрюлю с холодной водой, чтобы она полностью прикрывала овощ.   \n ШАГ 2. Отваренную и охлаждённую свеклу очистите от шкурки, натрите на крупной тёрке и выложите в глубокую миску.  \n ШАГ 3. Свежие огурцы промойте тщательно холодной водой, натрите на крупной тёрке или мелко порежьте. Выложите измельчённый огурец в посуду со свеклой. \n ШАГ 4. Отваренные и охлаждённые яйца очистите от скорлупы и мелко порежьте. Добавьте нарезанные яйца в посуду к ранее подготовленным овощам. \n ШАГ 5. Добавьте в подготовленные ингредиенты соль по вкусу и горчицу. От горчицы можно отказаться. Перемешайте содержимое посуды. \n ШАГ 6. Добавьте в свекольник кефир и перемешайте.",
          category: "Супы",
          ingredients: [
            {
              ingredientId: "Свекла",
              quantity: 250,
              unit: "г"
            },
            {
              ingredientId: "Огурец",
              quantity: 2,
              unit: "шт"
            },
            {
              ingredientId: "Яйцо",
              quantity: 2,
              unit: "шт"
            },
            {
              ingredientId: "Укроп",
              quantity: 50,
              unit: "г"
            },
            {
              ingredientId: "Кефир",
              quantity: 150,
              unit: "мл"
            },
            {
              ingredientId: "Горчица",
              quantity: 1,
              unit: "ч. л."
            }
          ],
          cookingTime: "1 ч 30 мин"
        },
        {
          _id: "222222222",
          name: "Суп с курицей",
          picture: "sup-s-kartohkoy.jpg",
          calorie: 58,
          proteins: 3,
          fats: 3,
          carbs: 4,
          recipeText: "ШАГ 1. Сварите бульон в течение 20-25 минут, затем извлеките грудку. \n ШАГ 2. Очищенный картофель нарежьте на небольшие кусочки и выложите в кипящий бульон. Варите картофель минут 15-20. За время варки картофель станет мягкий.  \n ШАГ 3. Пока варится картофель займитесь овощной зажаркой. Лук и морковь очистите от кожуры и ополосните. Лук мелко нарежьте, а морковь натрите на крупной терке. на сковороду налейте немного растительного масла и обжарьте овощи на небольшом огне пару минут. Затем добавьте в сковороду нарезанный болгарский перец. Перец можно нарезать как крупными кусочками, так и мелкими. Обжарьте все овощи еще 2-3 минуты и выложите поджарку в кастрюлю с супом. \n ШАГ 4. По вкусу добавьте в суп немного соли и специи. Проварите все вместе 1-2 минуты и снимите кастрюлю с огня.",
          category: "Супы",
          ingredients: [
            {
              ingredientId: "Куриная грудка",
              quantity: 250,
              unit: "г"
            },
            {
              ingredientId: "Картофель",
              quantity: 5,
              unit: "шт"
            },
            {
              ingredientId: "Лук",
              quantity: 1,
              unit: "шт"
            },
            {
              ingredientId: "Морковь",
              quantity: 1,
              unit: "шт"
            },
            {
              ingredientId: "Болгарский перец",
              quantity: 0.5,
              unit: "шт"
            },
            {
              ingredientId: "Растительное масло",
              quantity: 20,
              unit: "г"
            },
            {
              ingredientId: "Вода",
              quantity: 2000,
              unit: "мл"
            }
          ],
          cookingTime: "1 ч"
        }
      ],
      my_recipe_name: '',
      my_recipe_calorie: '',
      my_recipe_ingredient: '',
      my_recipe_ingredient_quantity: '',
    }
  },
  methods: {
    createRecipe(recipe) {
      this.recipes.push(recipe);
      this.$refs.modal_win.$el.dismiss(null, 'cancel');
    },
    removeRecipe(recipe) {
      this.recipes = this.recipes.filter(r => r.id !== recipe.id)
    },
    cancelModal() {
      this.$refs.modal_win.$el.dismiss(null, 'cancel');
    },
    async infoRecipeOpen(recipe) {
      if (this.isOpen === true) {
        this.isOpen = false;
        await new Promise(resolve => setTimeout(resolve, 10));
      }
      this.infoRecipe= recipe;
      //console.log(this.infoRecipe);
      this.isOpen = true;
      // console.log("Открытие информации о рецепте:", this.isOpen);
      // console.log(this.recipes.find(r => r.id === recipe.id).id);
    },
    infoRecipeClose() {
      this.isOpen = false;
      // console.log("Закрытие информации о рецепте:", this.isOpen);
    },
  }
}
</script>

<style scoped>

</style>