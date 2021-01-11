<template>

  <body>
    <Front></Front>
    <Projects id="projects"></Projects>
    <About
      id="about"
      class="pt-8"
    ></About>
    <ContactForm
      id="contact"
      class="pt-8"
    ></ContactForm>
    <Other
      id="other"
      class="pt-8"
    ></Other>
  </body>
</template>

<script>
import Front from "./Front.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import ContactForm from "./ContactForm.vue";
import Other from "./Other.vue";

export default {
  components: {
    Front,
    About,
    Projects,
    ContactForm,
    Other,
  },
};
</script>




