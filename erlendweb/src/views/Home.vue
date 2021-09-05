<template>

  <div>

    <!-- Initial loading overlay -->
    <PageLoader />

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
        :options="{ threshold: .8 }"
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
        :options="{ threshold: .8 }"
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
        :options="{ threshold: .8 }"
        class="fill-height"
        transition="fade-transition"
      >
        <Contact class="pt-4 pb-12"></Contact>
      </v-lazy>
    </v-sheet>

  </div>
</template>

<script>
import PageLoader from "../components/PageLoader.vue";
import Front from "./Front.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

export default {
  components: {
    PageLoader,
    Front,
    About,
    Projects,
    Contact,
  },

  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
    }
  },

  mounted() {
    console.log('%cWelcome to Erlendweb!', 'color: purple; font-size: 20px;')
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  },
};
</script>




