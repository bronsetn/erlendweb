<template>
  <body>
    <Projects id="projects"></Projects>
    <About id="about"></About>
    <Other id="other"></Other>
  </body>
</template>

<script>
import Projects from "./Projects.vue";
import About from "./About.vue";
import Other from "./Other.vue";

export default {
  components: {
    Projects,
    About,
    Other,
  },
};
</script>




