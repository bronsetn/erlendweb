<template>

  <body>
    <Front></Front>
    <Projects
      id="projects"
      class="pt-4"
    ></Projects>
    <About
      id="about"
      class="pt-4"
    ></About>
    <ContactForm
      id="contact"
      class="pt-4"
    ></ContactForm>
    <Other
      id="other"
      class="pt-4 pb-8"
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

  mounted() {
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log("Welcome to erlendweb!")
    console.log("~~~~~~~~~~~~~~~~~~~~~")

  },
};
</script>




