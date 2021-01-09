<template>
  <body>
    <v-container>
      <v-container class="justify-center">
        <p class="font-weight-light ma-1 pa-0">&#8544;</p>
        <h1>Prosjekter</h1>
      </v-container>

      <v-row class="d-flex justify-center">
        <!-- PRIOS EVENTS -->
        <v-col xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card elevation="5" color="secondary">
            <v-container>
              <v-img
                height="300"
                contain
                src="../assets/images/prios-events/3d-wireframe.png"
                lazy="../assets/images/prios-events/3d-wireframe.png"
                alt="Wireframe fra Prios Events"
              ></v-img>

              <v-card-title
                ><h2 class="font-weight-regular">Prios Events</h2>
              </v-card-title>
              <p class="light text-left pl-4">
                Prosjekt for Prios kompetanse AS
              </p>
            </v-container>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="accent" text @click="$router.push('/priosEvents')"
                >Vis mer</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- BACHELOR OPPGAVE -->
        <v-col xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card elevation="5" color="secondary">
            <v-container>
              <v-img
                height="300"
                contain
                src="../assets/images/bachelor/3d-many.png"
                lazy="../assets/images/bachelor/3d-many.png"
                alt="Bilde av applikasjon fra bachelor oppgaven"
              ></v-img>

              <v-card-title
                ><h2 class="font-weight-regular">Bacheloroppgave</h2>
              </v-card-title>
              <p class="light text-left pl-4">
                Augmented reality til å vise utvandringshistorie
              </p>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="accent" @click="$router.push('/bachelor')" text
                >Vis mer</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Wordpress -->
        <v-col xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card elevation="5" color="secondary">
            <v-container>
              <v-img
                contain
                height="300"
                src="../assets/images/wordpress/wordpress.png"
                lazy="../assets/images/wordpress/wordpress.png"
                alt="Screenshot of wordpress site"
              ></v-img>
              <v-card-title
                ><h2 class="font-weight-regular">Wordpress nettsted</h2>
              </v-card-title>
              <p class="light text-left pl-4">
                Nettsted/Portefølje fra digitale medier og design
              </p>
            </v-container>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="accent"
                text
                target="_blank"
                href="https://erlendworkblog.wordpress.com/prosjekter/"
                >Vis mer</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>