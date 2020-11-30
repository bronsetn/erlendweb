<template>
  <div id="app">
    <v-app>
        <Header></Header>
        <main>
          <router-view />
        </main>
    </v-app>
  </div>
</template>



<script>

import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

