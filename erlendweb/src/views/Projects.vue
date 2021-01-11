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
          xs="12"
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
                height="300"
                contain
                :src="item.src"
                lazy="../assets/images/halden.jpg"
                alt="Screenshot fra maribro.no"
              ></v-img>

              <v-card-title>
                <h2 class="font-weight-regular">{{ item.title}}</h2>
              </v-card-title>
              <p class="light text-left pl-4">
                {{item.description}}</p>
            </v-container>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="accent"
                text
                target="_blank"
                :href="item.link"
              >Besøk siden</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
export default {
  data() {
    return {

      projects: [
        // Mariweb
        {
          link: "https://maribro.netlify.app",
          title: "Maribro.no",
          description: "Et nettsted for visning av tegninger og malerier",
          alt: "Screenshot from maribro.no",
          src: "https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/mariweb%2Fmariweb.png?alt=media&token=48a886a3-bbd6-41b4-b297-fdbdc4ab90b9"
        },
        // Prios events
        {
          link: "https://dev.prios.events",
          title: "Prios Events",
          description: "Prosjekt for Prios kompetanse AS",
          alt: "Screenshot from prios.events",
          src: "https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/prios-events%2F3d-wireframe.png?alt=media&token=6c529375-fb00-47d4-b77a-3ccecf803f27"
        },
        // Bachelor
        {
          link: "https://erlendworkblog.wordpress.com/2020/06/11/bacheloroppgave-augmented-reality-til-a-vise-utvandringshistorie/",
          title: "Bacheloroppgave",
          description: "Augmented reality til å vise utvandringshistorie",
          alt: "Picture of app from the bachelor",
          src: "https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/bacheloroppgave%2F3d-many.png?alt=media&token=d147b978-ba9f-44e3-996d-5491092bb89c"
        },
      ],
    };
  },
};
</script>