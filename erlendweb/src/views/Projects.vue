<template>

  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">I</div>
        <h1>Prosjekter</h1>
      </v-container>

      <v-row class="d-flex justify-center">
        <v-col
          v-for="(item, index) in projects"
          :item="item"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
        >
          <v-card
            elevation="5"
            color="secondary"
          >
            <v-container>
              <v-img
                height="280"
                contain
                :src="item.src"
                lazy-src="../assets/images/placeholder-coffee.png"
              ></v-img>
            </v-container>

            <v-card-title class="pb-2">
              <h2 class="text-truncate">
                {{ item.title}}
              </h2>
            </v-card-title>
            <v-card-text>
              <p class="subtitle-2 text-left pa-0 ma-0 pb-2">
                {{ item.date }}
              </p>
              <p class="text-left">
                <v-clamp
                  class="text--primary"
                  autoresize
                  :max-lines="2"
                >
                  {{item.description}} <template #after="{ toggle, expanded, clamped }">
                    <a
                      href="#"
                      v-if="expanded || clamped"
                      class="clamp"
                      @click.prevent="toggle"
                    >{{ expanded ? "mindre" : "mer" }}</a>
                  </template>
                </v-clamp>
              </p>
            </v-card-text>

            <v-card-actions class="ma-0">
              <v-spacer></v-spacer>
              <v-btn
                color="accent"
                text
                target="_blank"
                :href="item.link"
              >Besøk</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import VClamp from "vue-clamp";

export default {
  components: {
    VClamp,
  },

  data() {
    return {

      projects: [
        // Mariweb
        {
          link: "https://maribro.no",
          title: "Maribro.no",
          description: "En side for å vise tegninger og malerier laget av Mari Brønseth. Laget i VueJs og satt opp med Netlify som vert.",
          date: "Vinter 2021",
          alt: "Screenshot from https://maribro.no",
          src: "https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/mariweb.png?alt=media&token=edcce03c-8fee-4be0-9c39-de239ff519a2"
        },
        // Prios events
        {
          link: "https://dev.prios.events",
          title: "Prios Events",
          description: "Side for blandt annet å kunne holde jobbmesser og lignende typer messer. Jeg arbeidet med utvikling av front-end og deisgn av siden for Prios kompetanse AS. Siden er utviklet i VueJs.",
          date: "Høst 2020",
          alt: "Screenshot from prios.events",
          src: "https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/events.png?alt=media&token=89518a63-485d-439b-993f-79c4852f4870"
        },
        // Wordpress
        {
          link: "https://erlendworkblog.wordpress.com/2020/06/11/bacheloroppgave-augmented-reality-til-a-vise-utvandringshistorie/",
          title: "Wordpress nettsted",
          description: "Nettsted jeg brukte til publisering av prosjekter og oppgaver fra bachelorstudiuet. Satt opp som en standard wordpress blogg.",
          date: "Sommer 2019",
          alt: "Sreenshot from https://erlendworkblog.wordpress.com",
          src: "https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/wordpress.png?alt=media&token=0b8b963f-5431-40b5-bc86-996f5f56d6c2"
        },
      ],
    };
  },
};
</script>