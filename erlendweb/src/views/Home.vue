<template>
  <body>
    <Projects id="projects"></Projects>
    <About id="about"></About>
    <Experiments id="other"></Experiments>

    <!-- Floating button for scrolling to the top of the page -->
    <v-fade-transition>
      <v-btn
        fixed
        bottom
        right
        fab
        color="tertiary"
        href="#top"
        v-scroll="onScroll"
        v-show="fab"
      >
        <v-icon color="primary"> mdi-arrow-up </v-icon>
      </v-btn>
    </v-fade-transition>
  </body>
</template>

<script>
import Projects from "./Projects.vue";
import About from "./About.vue";
import Experiments from "./Experiments.vue";

export default {
  data() {
    return {
      fab: false,
    };
  },
  components: {
    Projects,
    About,
    Experiments,
  },

  methods: {
    onScroll() {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset;
      this.fab = top > 20;
    },
  },
};
</script>




