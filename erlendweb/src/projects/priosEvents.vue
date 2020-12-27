<template>
  <body>
    <v-container class="colored-container pt-16" fluid>
      <v-row class="d-flex justify-center">
        <v-col xs="12" sm="12" md="8" lg="8" xl="8">
          <v-container>
            <br />
            <h1>Prios Events</h1>
            <br />
            <p class="light">
              Prosjekt under utvikling for prios kompetanse AS
              <br />
              <a href="https://dev.prios.events/" target="_blank"
                >https://dev.prios.events</a
              >
            </p>

            <p class="light">
              For mer info om prosjektet;
              <a href="https://prios.events" target="_blank"
                >https://prios.events</a
              >
            </p>
            <v-img
              class="center"
              max-height="400"
              contain
              src="../assets/images/prios-events/3d-wireframe.png"
              lazy="../assets/images/prios-events/3d-wireframe.png"
            ></v-img>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>


<script>
export default {};
</script>

<style>
.colored-container {
  height: 500px;
}
</style>