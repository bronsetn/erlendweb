<template>
  <body>
    <v-container>
      <span>&#8546;</span>
      <h1>Eksperimenter</h1>
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