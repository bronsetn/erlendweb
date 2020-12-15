<template>
  <body>
    <v-container>
      <span class="font-weight-light">&#8546;</span>
      <br />

      <v-row class="d-flex justify-center">
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">Kjekke API-er</v-col>
        <Nasa></Nasa>
        <Forecast></Forecast>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import Nasa from "../api/Nasa.vue";
import Forecast from "../api/Forecast.vue";

export default {
  components: {
    Nasa,
    Forecast,
  },
};
</script>

<style>
</style>