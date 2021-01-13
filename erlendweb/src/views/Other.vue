<template>

  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">IV</div>
        <h1>Annet</h1>
      </v-container>

      <v-row>
        <Nasa></Nasa>
        <Forecast></Forecast>

        <SvgTest></SvgTest>
        <Gallery></Gallery>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import Nasa from "./api/Nasa.vue";
import Forecast from "./api/Forecast.vue";

import SvgTest from "./vue-elements/SvgTest.vue";
import Gallery from "./vue-elements/Gallery.vue";

export default {
  components: {
    Nasa,
    Forecast,

    SvgTest,
    Gallery,
  },
};
</script>

<style>
</style>