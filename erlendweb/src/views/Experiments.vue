<template>
  <body>
    <v-container>
      <span class="font-weight-light">&#8546;</span>
      <br />
      <v-row class="d-flex justify-center">
        <Nasa></Nasa>
        <Forecast></Forecast>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import Nasa from "../Experiments/Nasa.vue";
import Forecast from "../Experiments/Forecast.vue";

export default {
  components: {
    Nasa,
    Forecast,
  },
};
</script>

<style>
</style>