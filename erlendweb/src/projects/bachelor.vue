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
              src="https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/bacheloroppgave%2F3d-many.png?alt=media&token=d147b978-ba9f-44e3-996d-5491092bb89c"
              lazy="https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/bacheloroppgave%2F3d-many.png?alt=media&token=d147b978-ba9f-44e3-996d-5491092bb89c"
            ></v-img>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-col xs="12" sm="12" md="8" lg="8" xl="8">
          <v-container style="margin-top: 50px">
            <p class="normal">
              Gjennom prosjektet lagde vi en applikasjon i Unity som kunne vise
              3D modeller forhåndsplasert via lengde og breddegrader.
              Applikasjonen tok i bruk telefonens GPS fot å vise forskjellige 3D
              modeller plassert på spesifikke steder.
            </p>
            <v-img
              contain
              max-height="500px"
              src="https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/bacheloroppgave%2F3d-app.png?alt=media&token=9a968cff-eeb0-4091-ba26-9032e059f1fd"
              lazy="https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/bacheloroppgave%2F3d-app.png?alt=media&token=9a968cff-eeb0-4091-ba26-9032e059f1fd"
            ></v-img>

            <br />
            <p class="normal">
              Prosjektgruppen bestod av Dylan Paul Lesperance, Henning
              Kristoffer Borgen, Elias Bakke og meg
            </p>

            <br />

            <v-img
              contain
              src="https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/bacheloroppgave%2Fprosjektplakat.png?alt=media&token=18a27094-dad7-4c20-b438-9a90268f5274"
              lazy="https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/bacheloroppgave%2Fprosjektplakat.png?alt=media&token=18a27094-dad7-4c20-b438-9a90268f5274"
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

<style scoped>
.colored-container {
  height: 500px;
}
</style>