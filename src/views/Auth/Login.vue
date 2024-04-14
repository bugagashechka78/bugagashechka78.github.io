<template>
  <ion-page>
    <ion-content>

      <ion-text color="dark"><h1 class="header1"><b>CookingNote</b></h1></ion-text>
      <br/>

      <ion-segment value="login">
        <ion-segment-button value="register" @click.stop="handleRegisterButton">
          <ion-label>Регистрация</ion-label>
        </ion-segment-button>

        <ion-segment-button value="login">
          <ion-label>Вход</ion-label>
        </ion-segment-button>
      </ion-segment>
      <br/><br/><br/>

      <ion-input class="login-form"
                 label="Логин"
                 label-placement="floating"
                 fill="outline"
                 placeholder="Введите логин"
                 v-model="login.username"
      />
      <br/><br/>
      <ion-input class="login-form"
                 label="Пароль"
                 label-placement="floating"
                 fill="outline"
                 type="password"
                 placeholder="Введите пароль"
                 v-model="login.password"
      />

    </ion-content>

    <ion-button
        class="login-button"
        size="large"
        expand="block"
        @click="handleSubmitButton"
    >
      Войти
    </ion-button>
  </ion-page>
</template>

<script setup>
import {IonButton, IonInput, IonSegment, IonSegmentButton, IonLabel, IonPage, IonContent, IonText} from "@ionic/vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";

const router = useRouter();
const login = ref({});
const handleSubmitButton = (event) => {
  event.preventDefault();
  axios.post(`http://77.238.225.192:3001/api/auth/login/`, login.value)
      .then(response => {
        localStorage.setItem('jwtToken', response.data.token);
        router.push({
          name: 'Tab1',
        });

      })
      .catch(error => {
        if (error.response.status === 401) {
          message.error('Неправильный логин или пароль')
        }
      });
};

const handleRegisterButton = () => {
  router.push({
    name: 'Register'
  });
};

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap');

.login-form {
  margin: auto;
  max-width: 86vw;
}
.login-button{
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  min-width: 66vw;
}
.header1{
  font-size: 8vh;
  text-align: center;
  font-family: "Alegreya Sans SC", sans-serif;
  font-weight: 500;
  font-style: normal;
}
</style>