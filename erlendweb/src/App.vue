<template>
  <div id="app">
    <v-app-bar>
      <v-btn text @click="$router.push('/Home')" color="primary">Home</v-btn>
      <v-btn text @click="$router.push('/About')" color="primary">About </v-btn>
      <v-btn text @click="$router.push('/Forecast')" color="primary">Forecast</v-btn>
    </v-app-bar>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
#app {
  font-family: "Roboto Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
