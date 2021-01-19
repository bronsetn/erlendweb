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

        <ModelViewer></ModelViewer>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import Nasa from "./api/Nasa.vue";
import Forecast from "./api/Forecast.vue";

import SvgTest from "./vue-elements/SvgTest.vue";
import Gallery from "./vue-elements/Gallery.vue";

import ModelViewer from "./3d/ModelViewer.vue";

export default {
  components: {
    Nasa,
    Forecast,

    SvgTest,
    Gallery,

    ModelViewer,
  },
};
</script>

<style>
</style>