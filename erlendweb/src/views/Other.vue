<template>

  <body>
    <v-lazy
      v-model="isActive"
      :options="{ threshold: .5 }"
      class="fill-height"
      transition="fade-transition"
    >
      <v-container>
        <v-container class="justify-center pt-12">
          <div class="serif">IV</div>
          <h1>{{ $t('header.other') }}</h1>
          <p class="normal pa-2">{{ $t('other.description') }}</p>
        </v-container>

        <v-row justify="center">

          <SvgTest></SvgTest>
          <ModelViewer></ModelViewer>
          <Nasa></Nasa>
          <Forecast></Forecast>
          <Gallery></Gallery>

        </v-row>
      </v-container>
    </v-lazy>
  </body>
</template>

<script>
import Nasa from "./api-elements/Nasa.vue";
import Forecast from "./api-elements/Forecast.vue";
import SvgTest from "./layout-elements/SvgTest.vue";
import Gallery from "./layout-elements/Gallery.vue";
import ModelViewer from "./3d-elements/ModelViewer.vue";

export default {
  components: {
    Nasa,
    Forecast,
    ModelViewer,
    Gallery,
    SvgTest,
  },

  data() {
    return {
      isActive: false,
    }
  },

};
</script>