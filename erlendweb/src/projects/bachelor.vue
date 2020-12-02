<template>
  <body>
    <v-container class="colored-container" fluid>
      <v-row class="d-flex justify-center">
        <v-col xs="12" sm="12" md="8" lg="8" xl="8">
          <v-container>
            <br />

            <h1>Bacheloroppgave</h1>
            <br />

            <div class="subtitle-1">
              Augmented reality til å vise utvandringshistorie
            </div>
            <v-card-text>
              <p>
                Prosjektet gikk ut på å designe og utvikle en prototype for en
                AR-applikasjon som visualiserer utvandringen fra Kvam til
                Amerika på 1800-tallet. Prototypen viser forlatte hustufter og
                bygninger som skal forsterke stedsopplevelsen i Kvam.
                Applikasjonen er utviklet i Unity og 3D-modellene er laget ut i
                fra hvordan mange av husmannsplassene så ut i Kvam på
                1800-tallet.
              </p>
            </v-card-text>
            <v-img
              class="center"
              max-height="400"
              contain
              src="../assets/images/bachelor/3d-many.png"
              lazy="../assets/images/bachelor/3d-many.png"
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