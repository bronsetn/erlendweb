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
    <Contact
      id="contact"
      class="pt-4"
    ></Contact>
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
import Contact from "./Contact.vue";
import Other from "./Other.vue";

export default {
  components: {
    Front,
    About,
    Projects,
    Contact,
    Other,
  },

  mounted() {
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log("Welcome to erlendweb!")
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log("")
  },
};
</script>




