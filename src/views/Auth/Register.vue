<template>
  <ion-page>
    <ion-card class="card">

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

    </ion-card>
  </ion-page>
</template>

<script setup>
import {IonButton, IonCard, IonInput, IonPage} from "@ionic/vue";
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