<template>
  <div id="app">
    <v-app id="home">
      <Header></Header>
      <main
        :style="{ background: $vuetify.theme.themes[theme].background }"
        class="pt-10 pb-10"
      >
        <router-view></router-view>
        <FloatingButton></FloatingButton>
      </main>
      <Footer></Footer>
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

  mounted() {
    this.selectTheme()
  },

  methods: {

    // Checks browser preference for light/dark mode
    selectTheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }

  },

};
</script>


