<template>
  <body>
    <v-container>
      <span class="font-weight-light">&#8544;</span>
      <br />

      <v-row class="d-flex justify-center">
        <!-- BACHELOR OPPGAVE -->
        <v-col xs="12" sm="12" md="6" lg="4" xl="4">
          <v-container>
            <v-card elevation="5" color="primary">
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
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="orange lighten-2"
                  @click="$router.push('/bachelor')"
                  text
                  >Vis mer</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>

        <!-- PRIOS EVENTS -->
        <v-col xs="12" sm="12" md="6" lg="4" xl="4">
          <v-container>
            <v-card elevation="5" color="primary">
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
                Prios kompetanse AS
              </p>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="orange lighten-2"
                  text
                  @click="$router.push('/priosEvents')"
                  >Vis mer</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
export default {
  data: () => ({
    length: 3,
    window: 0,
  }),
};
</script>

<style>
</style>


