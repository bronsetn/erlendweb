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

          <Typography></Typography>
          <SvgTest></SvgTest>
          <Forecast></Forecast>
          <Nasa></Nasa>
          <ModelViewer></ModelViewer>
          <Gallery></Gallery>

        </v-row>
      </v-container>
    </v-lazy>
  </body>
</template>

<script>
import Typography from "./layout-elements/Typography.vue";
import SvgTest from "./layout-elements/SvgTest.vue";
import ModelViewer from "./3d-elements/ModelViewer.vue";
import Nasa from "./api-elements/Nasa.vue";
import Forecast from "./api-elements/Forecast.vue";
import Gallery from "./layout-elements/Gallery.vue";

export default {
  components: {
    Typography,
    SvgTest,
    ModelViewer,
    Forecast,
    Nasa,
    Gallery,
  },

  data() {
    return {
      isActive: false,
    }
  },

};
</script>