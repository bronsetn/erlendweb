<template>
  <body>
    <v-container>
      <v-container class="justify-center">
        <p class="font-weight-light ma-1 pa-0">&#8546;</p>
        <h2>Annet</h2>
      </v-container>

      <v-row class="d-flex justify-center">
        <Nasa></Nasa>
        <Forecast></Forecast>

        <Gallery></Gallery>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import Nasa from "../api/Nasa.vue";
import Forecast from "../api/Forecast.vue";

import Gallery from "../vue-elements/Gallery.vue";

export default {
  components: {
    Nasa,
    Forecast,

    Gallery,
  },
};
</script>

<style>
</style>