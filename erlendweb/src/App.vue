<template>
  <div id="app">
    <v-app id="top">
      <Header></Header>
      <main
        :style="{ background: $vuetify.theme.themes[theme].background }"
        class="pt-16 pb-16"
      >
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

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>


