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
        <ion-label slot="start">Рекомендованный лимит калорий: </ion-label>
        <ion-label slot="end">{{ bmr }} </ion-label>
        <ion-label slot="end"> ккал</ion-label>
      </ion-item> 
      <ion-button @click="calculateCalories" expand="block" fill="solid">Рассчитать лимит калорий</ion-button>
      
    </ion-content>
  </ion-page>
</template>

<script setup>
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonButton,
  IonContent, IonInput, IonItem, IonSelect, IonSelectOption,IonList, IonLabel, IonNote 
} from '@ionic/vue';
 
</script>

<script>
export default {
  components: {   
  },
  data() {
    return {
      bmr: 0,
      my_data: 
        {
          id: '',
          name: '',
          age: '',
          height: '',
          weight:'',
          gender:'',
          activity: 1,
          limit_calories: ''
        },
    }
  },
  
  methods:{
    calculateCalories(){
      this.bmr=(10*this.my_data.weight+6.25*this.my_data.height-5*this.my_data.age+5)*this.my_data.activity;
      if (this.my_data.gender==""){
        this.bmr+=5;}
      if (this.my_data.gender=="male") {this.bmr+=5;}
      if (this.my_data.gender=="female") {this.bmr-=161;}
      this.bmr= Math.round(this.bmr);
      return this.bmr;
    }
    }
  }
</script>