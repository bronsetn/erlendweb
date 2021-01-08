<template>
  <body>
    <v-container>
      <v-container class="justify-center">
        <p class="font-weight-light ma-1 pa-0">&#8547;</p>
        <h1>Annet</h1>
      </v-container>

      <v-row class="d-flex justify-center">
        <Nasa></Nasa>
        <Forecast></Forecast>

        <Gallery></Gallery>
        <SvgTest></SvgTest>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import Nasa from "../api/Nasa.vue";
import Forecast from "../api/Forecast.vue";

import Gallery from "../vue-elements/Gallery.vue";
import SvgTest from "../vue-elements/SvgTest.vue";

export default {
  components: {
    Nasa,
    Forecast,

    Gallery,
    SvgTest,
  },
};
</script>

<style>
</style>