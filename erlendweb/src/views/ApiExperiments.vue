<template>
  <body>
    <v-container>
      <h1>Experiments</h1>
      <v-divider></v-divider>
      <v-row>
        <v-col xs="12" sm="12" md="6" lg="6" xl="6">
          <Nasa></Nasa>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import Nasa from "../Experiments/Nasa.vue";

export default {
  components: {
    Nasa,
  },
};
</script>

<style>
</style>