<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <main>
        <router-view />
      </main>
      <Footer></Footer>
    </v-app>
  </div>
</template>



<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>

</style>

