<template>
  <body>
    <v-container class="colored-container" fluid>
      <v-row class="d-flex justify-center">
        <v-col xs="10" sm="10" md="8" lg="8" xl="8">
          <v-container>
            <br />
            <h1>Bacheloroppgave</h1>
            <div class="subtitle-1">
              Augmented reality til å vise utvandringshistorie i Kvam
            </div>
            <br />
            <p class="light">
              Prosjektet gikk ut på å designe og utvikle en prototype for en
              AR-applikasjon som visualiserer utvandringen fra Kvam til Amerika
              på 1800-tallet. Prototypen vi laget viser forlatte hustufter laget
              ut i fra hvordan mange av husmannsplassene så ut i Kvam på
              1800-tallet.
            </p>
            <p class="light">
              For mer utfyllende info om prosjektet gå til:
              <a href="https://erlendworkblog.wordpress.com/" target="_blank"
                >https://erlendworkblog.wordpress.com/</a
              >
            </p>
            <v-img
              contain
              max-height="300px"
              src="../assets/images/bachelor/3d-many.png"
              lazy="../assets/images/bachelor/3d-many.png"
            ></v-img>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-col xs="12" sm="12" md="8" lg="8" xl="8">
          <v-container style="margin-top: 60px">
            <p class="normal">
              Gjennom prosjektet lagde vi en applikasjon i Unity som kunne vise
              3D modeller forhåndsplasert via lengde og breddegrader.
              Applikasjonen tok i bruk telefonens GPS fot å vise forskjellige 3D
              modeller plassert på spesifikke steder.
            </p>
            <v-img
              contain
              src="../assets/images/bachelor/3d-app.png"
              lazy="../assets/images/bachelor/3d-app.png"
            ></v-img>

            <br />
            <p class="normal">
              Prosjektgruppen bestod av Dylan Paul Lesperance, Henning
              Kristoffer Borgen, Elias Bakke og meg
            </p>

            <br />

            <v-img
              contain
              src="../assets/images/bachelor/prosjektplakat.png"
              lazy="../assets/images/bachelor/prosjektplakat.png"
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