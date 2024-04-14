<template>
  <ion-page>
    <ion-content>

      <ion-text color="dark"><h1 class="header1"><b>CookingNote</b></h1></ion-text>
      <br/>

      <ion-segment value="register">
        <ion-segment-button value="register">
          <ion-label>Регистрация</ion-label>
        </ion-segment-button>

        <ion-segment-button value="login" @click.stop="handleLoginButton">
          <ion-label>Вход</ion-label>
        </ion-segment-button>
      </ion-segment>
      <br/><br/><br/>




      <h1>Регистрация</h1>
      <ion-input
          class="input"
          placeholder="Логин"
          v-model="register.username"
      />
      <ion-input
          class="input"
          type="password"
          placeholder="Пароль"
          v-model="register.password"
      />

      <ion-button
          @click="handleSubmitButton"
      >
        Зарегистрироваться
      </ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup>
import {IonButton, IonContent, IonInput, IonPage} from "@ionic/vue";
import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

const register = ref({});
const router = useRouter();

const handleSubmitButton = (event) => {
  event.preventDefault();
  axios.post(`http://77.238.225.192:3001/api/auth/register`, register.value)
      .then(() => {
        router.push({
          name: 'Login'
        })
        // router.back()
      })
      .catch(e => {
        console.log(e)
      })
};

const handleLoginButton = () => {
  router.push({
    name: 'Login'
  });
};

</script>

<style>
.card {
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