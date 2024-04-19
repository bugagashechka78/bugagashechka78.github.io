<template>
  <ion-page>
    <ion-content>

      <ion-text color="dark"><h1 class="header1"><b>CookingNote</b></h1></ion-text>
      <br/>

      <ion-segment value="login">
        <ion-segment-button value="register" @click="segment_value='register'">
          <ion-label>Регистрация</ion-label>
        </ion-segment-button>

        <ion-segment-button value="login" @click="segment_value='login'">
          <ion-label>Вход</ion-label>
        </ion-segment-button>
      </ion-segment>
      <br/>

      <ion-input class="login-form"
                 label="Логин"
                 label-placement="floating"
                 fill="outline"
                 placeholder="Введите логин"
                 v-model="login.username"
      />
      <br/>
      <ion-input class="login-form"
                 label="Пароль"
                 label-placement="floating"
                 fill="outline"
                 type="password"
                 placeholder="Введите пароль"
                 v-model="login.password"
      />
      <br/>
      <ion-input v-if="segment_value==='register'"
                 class="login-form"
                 label="Подтвердите пароль"
                 label-placement="floating"
                 fill="outline"
                 type="password"
                 placeholder="Введите пароль"
                 v-model="password_copy"
      />

    </ion-content>

    <ion-button v-if="segment_value==='login'"
                class="login-button"
                size="large"
                expand="block"
                @click="handleLoginButton"
    >
      Войти
    </ion-button>
    <ion-button v-if="segment_value==='register'"
                class="login-button"
                size="large"
                expand="block"
                @click="handleRegisterButton"
    >
      Зарегистрироваться
    </ion-button>
    <ion-toast :is-open="isOpen" message="Пароли не совпадают" :duration="3000"
               @didDismiss="setOpen(false, 'reg')"></ion-toast>
    <ion-toast :is-open="isOpen1" message="Неправильный логин или пароль" :duration="3000"
               @didDismiss="setOpen(false, 'log')"></ion-toast>
  </ion-page>
</template>

<script setup>
import {
  IonButton,
  IonInput,
  IonToast,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonPage,
  IonContent,
  IonText
} from "@ionic/vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";
import {useRecipeStore} from "../stores/recipeStore";
import {useUserStore} from "../stores/UserStore";

const recipeStore = useRecipeStore();
const userStore=useUserStore()

const isOpen1 = ref(false);
const isOpen = ref(false);
const segment_value = ref('login');
const password_copy = ref('');
const router = useRouter();
const login = ref({username:''});

const setOpen = (state, flag) => {
  if (flag === 'reg') {
    isOpen.value = state;
  } else {
    isOpen1.value = state;
  }
};

const handleLoginButton = (event) => {
  event.preventDefault();
  axios.post(`http://77.238.225.192:3001/api/auth/login`, login.value)
      .then(async response => {
        localStorage.setItem('jwtToken', response.data.token);
        await recipeStore.fetchRecipes();
        await recipeStore.fetchIngredients();
        userStore.username=login.value.username;
        userStore.likeAll=response.data.likeAll;
        userStore.name=response.data.name;
        userStore.age=response.data.age;
        userStore.height=response.data.height;
        userStore.weight=response.data.weight;
        userStore.gender=response.data.gender;
        userStore.activity=response.data.activity;
        userStore.calorieLimit=response.data.calorieLimit;
        await new Promise(resolve => setTimeout(resolve, 1000));
        await router.push({
          name: 'Tab2',
        });

      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 401) {
          //message.error('Неправильный логин или пароль')
          isOpen1.value = true;
        }
      });
};

const handleRegisterButton = (event) => {
  event.preventDefault();
  if (password_copy.value === login.value.password) {
    axios.post(`http://77.238.225.192:3001/api/auth/register`, login.value)
        .then(() => {
          segment_value.value = 'login';
          // router.push({
          //   name: 'Login'
          // })
          // router.back()
        })
        .catch(e => {
          console.log(e)
        })
  } else {
    //alert('Пароли не совпадают')
    isOpen.value = true;
  }
};

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap');

.login-form {
  margin: auto;
  max-width: 86vw;
}

.login-button {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  min-width: 66vw;
}

.header1 {
  font-size: 14vw;
  text-align: center;
  font-family: "Alegreya Sans SC", sans-serif;
  font-weight: 500;
  font-style: normal;
}
</style>