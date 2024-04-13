<template>
  <ion-page>


    <ion-card class="login-form">
      <ion-card-header>
        Авторизация
      </ion-card-header>

      <ion-input
          class="input"
          placeholder="Логин"
          v-model="login.username"
      />
      <ion-input
          class="input"
          type="password"
          placeholder="Пароль"
          v-model="login.password"
      />

      <ion-button

          @click="handleSubmitButton"
      >
        Войти
      </ion-button>
      <ion-button

          @click.stop="handleRegisterButton"
      >
        Регистрация
      </ion-button>

    </ion-card>
  </ion-page>
</template>

<script setup>
import {IonButton, IonCard, IonInput, IonCardHeader, IonPage} from "@ionic/vue";
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
.login-form {
  max-width: 300px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}

.input {
  text-align: left;
}
</style>