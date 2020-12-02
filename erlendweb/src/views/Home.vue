<template>
  <body>
    <v-container>
      <br />

      <v-row class="d-flex justify-center">
        <!-- PRIOS EVENTS -->
        <v-col xs="12" sm="12" md="6" lg="4" xl="4">
          <v-container>
            <v-card elevation="5">
              <v-img
                height="300"
                contain
                src="../assets/images/prios-events/3d-wireframe.png"
                lazy="../assets/images/prios-events/3d-wireframe.png"
              ></v-img>

              <v-card-title><h2>Prios Events</h2> </v-card-title>
              <p class="subtitle-2 text-truncate text-left pl-4">
                Prios kompetanse AS
              </p>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange" text @click="$router.push('/priosEvents')"
                  >Vis mer</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>
        <!-- BACHELOR OPPGAVE -->
        <v-col xs="12" sm="12" md="6" lg="4" xl="4">
          <v-container>
            <v-card elevation="5">
              <v-img
                height="300"
                contain
                src="../assets/images/bachelor/3d-many.png"
                lazy="../assets/images/bachelor/3d-many.png"
              ></v-img>

              <v-card-title class="text-justify"
                ><h2>Bacheloroppgave</h2>
              </v-card-title>
              <p class="subtitle-2 text-truncate text-left pl-4">
                Augmented reality til å vise utvandringshistorie
              </p>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange" @click="$router.push('/bachelor')" text
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


