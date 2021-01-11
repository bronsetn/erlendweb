<template>
  <div id="app">
    <v-app id="top">
      <Header></Header>
      <main
        :style="{ background: $vuetify.theme.themes[theme].background }"
        class="pt-16 pb-16"
      >
        <router-view />
        <FloatingButton></FloatingButton>
      </main>
      <Footer class="mt-16"></Footer>
    </v-app>
  </div>
</template>



<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingBtn";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    FloatingButton,
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>


