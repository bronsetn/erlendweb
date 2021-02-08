<template>

  <body>

    <!-- Front image + title -->
    <Front></Front>

    <!-- Projects listed -->
    <v-sheet
      min-height="300"
      class="fill-height"
      color="transparent"
    >
      <v-lazy
        id="projects"
        v-model="isActive1"
        :options="{
          threshold: .5
        }"
        class="fill-height"
        transition="fade-transition"
      >
        <Projects class="pt-4"></Projects>
      </v-lazy>
    </v-sheet>

    <!-- About me section -->
    <v-sheet
      min-height="300"
      class="fill-height"
      color="transparent"
    >
      <v-lazy
        id="about"
        v-model="isActive2"
        :options="{
          threshold: .5
        }"
        class="fill-height"
        transition="fade-transition"
      >
        <About class="pt-4"></About>
      </v-lazy>
    </v-sheet>

    <!-- Contact form -->
    <v-sheet
      min-height="300"
      class="fill-height"
      color="transparent"
    >
      <v-lazy
        id="contact"
        v-model="isActive3"
        :options="{
          threshold: .5
        }"
        class="fill-height"
        transition="fade-transition"
      >
        <Contact class="pt-4"></Contact>
      </v-lazy>
    </v-sheet>

    <!-- Other stuff - section for experiments -->
    <v-sheet
      min-height="300"
      class="fill-height"
      color="transparent"
    >
      <v-lazy
        id="other"
        v-model="isActive4"
        :options="{
          threshold: .5
        }"
        class="fill-height"
        transition="fade-transition"
      >
        <Other class="pt-4 pb-8"></Other>
      </v-lazy>
    </v-sheet>
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

  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
    }
  },

  mounted() {
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log("Welcome to erlendweb!")
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log("")
  },
};
</script>




