<template>
  <body>
    <v-container>
      <h1>Eksperimenter</h1>
      <br>
      <v-row class="d-flex justify-center">
        <v-col xs="12" sm="12" md="6" lg="6" xl="6">
          <Nasa></Nasa>
        </v-col>
        <v-col xs="12" sm="12" md="6" lg="6" xl="6">
          <Forecast></Forecast>
        </v-col>
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