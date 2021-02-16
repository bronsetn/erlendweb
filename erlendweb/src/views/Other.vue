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

      </v-row>
    </v-container>
  </body>
</template>

<script>
import Nasa from "./api-elements/Nasa.vue";
import Forecast from "./api-elements/Forecast.vue";

import SvgTest from "./layout-elements/SvgTest.vue";
// import Gallery from "./layout-elements/Gallery.vue";

import ModelViewer from "./3d-elements/ModelViewer.vue";

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