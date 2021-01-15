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
                lazy="../assets/images/halden.jpg"
                alt="Screenshot fra maribro.no"
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
          description: "Et nettsted for å vise frem tegninger og malerier for Mari Brønseth. Laget i VueJs og satt opp med Netlify som vert.",
          date: "Vinter 2021",
          alt: "Screenshot from https://maribro.no",
          src: "https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/mariweb%2Fmariweb.png?alt=media&token=48a886a3-bbd6-41b4-b297-fdbdc4ab90b9"
        },
        // Prios events
        {
          link: "https://dev.prios.events",
          title: "Prios Events",
          description: "Side for blandt annet å kunne holde jobbmesser og lignende typer messer. Jeg arbeidet med utvikling av front-end for siden for Prios kompetanse AS",
          date: "Høst 2020",
          alt: "Screenshot from prios.events",
          src: "https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/prios-events%2F3d-wireframe.png?alt=media&token=6c529375-fb00-47d4-b77a-3ccecf803f27"
        },
        // Bachelor
        // {
        //   link: "https://erlendworkblog.wordpress.com/2020/06/11/bacheloroppgave-augmented-reality-til-a-vise-utvandringshistorie/",
        //   title: "Bacheloroppgave",
        //   description: "AR applikasjon hvor man kan se 3D modeller av byggninger fra 1800 tallet. Uviklet i Unity med Høgskolen i Østfold som oppdragsgiver.",
        //   date: "Vår 2020",
        //   alt: "Picture of app from the bachelor",
        //   src: "https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/bacheloroppgave%2F3d-many.png?alt=media&token=d147b978-ba9f-44e3-996d-5491092bb89c"
        // },
        // Wordpress
        {
          link: "https://erlendworkblog.wordpress.com/2020/06/11/bacheloroppgave-augmented-reality-til-a-vise-utvandringshistorie/",
          title: "Wordpress nettsted",
          description: "Nettsted/Portefølje jeg brukte til publisering av prosjekter og oppgaver fra digitale medier og design.",
          date: "Sommer 2019",
          alt: "Sreenshot from https://erlendworkblog.wordpress.com",
          src: "https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/wordpress%2Fwordpress.png?alt=media&token=74bd6fc2-a614-4a13-89bb-79f0b4fe3794"
        },
      ],
    };
  },
};
</script>