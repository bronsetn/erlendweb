<template>
  <div id="app">
    <v-app id="home">
      <Header></Header>
      <main
        :style="{ background: $vuetify.theme.themes[theme].background }"
        class="pt-10 pb-10"
      >
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>
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

<style scoped>
/* FADE TRANSITION*/
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>


