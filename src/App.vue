<template>
  <initial-screen v-if="initApp"/>
  <ion-app v-if="!initApp">
    <ion-router-outlet/>

  </ion-app>
</template>

<script setup>
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import InitialScreen from '@/components/Initial/InitialScreen.vue';
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import { SplashScreen } from '@capacitor/splash-screen';
import {useUserStore} from "./stores/UserStore";

const router = useRouter();
const initApp = ref(true);
const userStore=useUserStore()

const initializeApp = async () => {
  await SplashScreen.hide();
  await new Promise(resolve => setTimeout(resolve, 1000));

  await router.push({
    name: 'Auth',
  })
  await new Promise(resolve => setTimeout(resolve, 1000));


  initApp.value = false;
};
onMounted(initializeApp);


</script>

