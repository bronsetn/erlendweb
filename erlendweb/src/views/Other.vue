<template>

  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">IV</div>
        <h1>{{ $t('header.other') }}</h1>
      </v-container>

      <v-row justify="center">
        <SvgTest></SvgTest>
        <ModelViewer></ModelViewer>
        <Nasa></Nasa>
        <Forecast></Forecast>
        <!-- <Gallery></Gallery> -->

      </v-row>
    </v-container>
  </body>
</template>

<script>
import Nasa from "./api/Nasa.vue";
import Forecast from "./api/Forecast.vue";

import SvgTest from "./vue-elements/SvgTest.vue";
// import Gallery from "./vue-elements/Gallery.vue";

import ModelViewer from "./3d/ModelViewer.vue";

export default {
  components: {
    Nasa,
    Forecast,

    ModelViewer,
    // Gallery,

    SvgTest,

  },
};
</script>