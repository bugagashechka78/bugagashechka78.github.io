<template>
  <initial-screen v-if="initApp"/>
  <ion-app v-if="!initApp">
    <ion-router-outlet/>
  </ion-app>
</template>

<script setup>
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import InitialScreen from '@/components/Initial/InitialScreen.vue';
import {onMounted, ref} from "vue";

const initApp = ref(true);
const initializeApp = async () => {
  await new Promise(resolve => setTimeout(resolve, 2500));
  initApp.value = false;
  // let result = await sourceStore.fetchSources();
  // if (result?.response?.status === 401) {
  //   await router.push({
  //     name: 'Login',
  //   })
  // }
  // await substanceStore.fetchSubstances();
  // await measuredPointsStore.fetchMeasuredPoints();
  // await new Promise(resolve => setTimeout(resolve, 1000));
  // loadingApp.value = false;
};
onMounted(initializeApp);


</script>

