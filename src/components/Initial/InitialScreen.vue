<template>
  <div>
    <ion-img
        src="/initialScreenPic.png"
        alt="Cooking Note"
    ></ion-img>
  </div>
</template>

<script>
import {IonImg} from "@ionic/vue";

export default {
  name: "InitialScreen",
  components: {IonImg},
}
</script>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

ion-img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

</style>