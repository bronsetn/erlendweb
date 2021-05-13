<template>
  <div>
    <v-container>
      <v-container class="justify-center pt-12">
        <div class="serif">IV</div>
        <h1>{{ $t('header.other') }}</h1>
        <p class="pa-2 text-center">{{ $t('other.description') }}</p>
      </v-container>

      <v-row class="d-flex justify-center">

        <Typography></Typography>
        <SvgTest></SvgTest>
        <Forecast></Forecast>
        <Nasa></Nasa>
        <ModelViewer></ModelViewer>
        <Gallery></Gallery>

      </v-row>
    </v-container>
  </div>
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
    }
  },

};
</script>