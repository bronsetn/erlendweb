<template>
  <body>
    <Projects id="projects"></Projects>
    <About id="about"></About>
    <Form id="contact"></Form>
    <Other id="other"></Other>
  </body>
</template>

<script>
import Projects from "./Projects.vue";
import About from "./About.vue";
import Form from "./ContactForm.vue";
import Other from "./Other.vue";

export default {
  components: {
    Projects,
    About,
    Form,
    Other,
  },
};
</script>




