<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Профиль</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-item>
        <ion-input
            v-model="my_data.name"
            label="Имя"
            placeholder="Введите имя"
            type="text">
        </ion-input>
      </ion-item>
      <ion-item>
        <ion-input
            v-model="my_data.age"
            label="Возраст"
            placeholder="Введите возраст"
            type="number" required>
        </ion-input>
      </ion-item>
      <ion-item>
        <ion-input
            v-model="my_data.height"
            label="Рост"
            placeholder="Введите рост в см"
            type="number">
        </ion-input>
        <ion-note slot="end">см</ion-note>
      </ion-item>
      <ion-item>
        <ion-input
            v-model="my_data.weight"
            label="Вес"
            placeholder="Введите вес в кг"
            type="number">
        </ion-input>
        <ion-note slot="end">кг</ion-note>
      </ion-item>

      <ion-item>
        <ion-list>
          <ion-select v-model="my_data.gender" label="Пол" placeholder="Выберите пол">
            <ion-select-option value="male">муж</ion-select-option>
            <ion-select-option value="female">жен</ion-select-option>
          </ion-select>
        </ion-list>
      </ion-item>

      <ion-item>
        <ion-list>
          <ion-select v-model="my_data.activity" label="Активность" placeholder="Выберите активность">
            <ion-select-option value=1.2>сидячий образ жизни</ion-select-option>
            <ion-select-option value=1.375>небольшая (1-3 раза в неделю)</ion-select-option>
            <ion-select-option value=1.55>умеренная (3-5 раза в неделю)</ion-select-option>
            <ion-select-option value=1.725>высокая (6-7 раз в неделю)</ion-select-option>
            <ion-select-option value=1.9>очень высокая (более 1 раза в день)</ion-select-option>
          </ion-select>
        </ion-list>
      </ion-item>

      <ion-item>
        <ion-label slot="start">Рекомендованный лимит калорий:</ion-label>
        <ion-label slot="end">{{ bmr }}</ion-label>
        <ion-label slot="end"> ккал</ion-label>
      </ion-item>
      <ion-button @click="calculateCalories" expand="block" fill="outline">Рассчитать лимит калорий</ion-button>
      <ion-button @click="saveProfile" expand="block" fill="solid">Сохранить</ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonButton,
  IonContent, IonInput, IonItem, IonSelect, IonSelectOption,
  IonList, IonLabel, IonNote
} from '@ionic/vue';
import {ref, watch} from "vue";
import {useUserStore} from "../stores/UserStore";
import {storeToRefs} from "pinia";

const userStore = useUserStore();
const {name, age, height, weight, gender, activity, calorieLimit, } = storeToRefs(userStore);

const bmr = ref(0);
const my_data = ref({
  name: name.value,
  age: age.value,
  height: height.value,
  weight: weight.value,
  gender: gender.value,
  activity: activity.value
});
bmr.value = calorieLimit.value;

const calculateCalories = function () {
  bmr.value = (10 * my_data.value.weight + 6.25 * my_data.value.height - 5 * my_data.value.age + 5) * my_data.value.activity;
  if (my_data.value.gender === "") {
    bmr.value += 5;
  }
  if (my_data.value.gender === "male") {
    bmr.value += 5;
  }
  if (my_data.value.gender === "female") {
    bmr.value -= 161;
  }
  bmr.value = Math.round(bmr.value);
};

const saveProfile = function () {
  calculateCalories();
  name.value = my_data.value.name;
  age.value = my_data.value.age;
  height.value = my_data.value.height;
  weight.value = my_data.value.weight;
  gender.value = my_data.value.gender;
  activity.value = my_data.value.activity;
  calorieLimit.value = bmr.value;
  userStore.syncUserProfile();
  console.log(name.value);
  console.log(age.value);
  console.log(height.value);
  console.log(weight.value);
  console.log(gender.value);
  console.log(activity.value);
  console.log(calorieLimit.value);
}

</script>

