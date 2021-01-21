<template>

  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">IV</div>
        <h1>Annet</h1>
      </v-container>

      <v-row justify="center">
        <Nasa></Nasa>
        <Forecast></Forecast>

        <ModelViewer></ModelViewer>

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

import ModelViewer from "./3d/ModelViewer.vue";

export default {
  components: {
    Nasa,
    Forecast,

    ModelViewer,
    Gallery,

    SvgTest,

  },
};
</script>

<style>
</style>