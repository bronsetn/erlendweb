<template>

  <body>
    <Front></Front>
    <About id="about"></About>
    <Projects
      id="projects"
      class="pt-8"
    ></Projects>
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




