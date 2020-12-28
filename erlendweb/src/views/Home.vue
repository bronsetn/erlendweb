<template>
  <body>
    <Projects id="projects"></Projects>
    <About id="about"></About>
    <Experiments id="other"></Experiments>
  </body>
</template>

<script>
import Projects from "./Projects.vue";
import About from "./About.vue";
import Experiments from "./Experiments.vue";

export default {
  components: {
    Projects,
    About,
    Experiments,
  },
};
</script>




