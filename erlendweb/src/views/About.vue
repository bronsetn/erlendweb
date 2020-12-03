
<template>
  <body>
    <v-container>
      <span>&#8545;</span>
      <h1>om</h1>
      <br />
      <v-row class="d-flex justify-center">
        <v-col xs="12" sm="12" md="8" lg="8" xl="8">
          <v-container>
            <v-img
              src="../assets/images/halden.jpg"
              lazy="../assets/images/halden.jpg"
              height="250px"
              class="white--text"
              dark
            >
              <h2 class="font-weight-regular pt-4">Erlend Brønseth</h2>
            </v-img>

            <!-- OM INFO -->
            <v-card-text class="text-justify">
              <h3>Hei!</h3>
              <p>
                Jeg er en 23 åring fra Inderøy som tar et bachelorstudium i
                digitale medier og design på Høgskolen i Østfold. Mitt mål med
                studiet og prosjekter som dette nettstedet er å bli bedre
                innenfor front-end utvikling hovedsaklig.
              </p>
              <p>
                Tanken bak dette nettstedet er å kunne bruke det som portefølje
                i tillegg til en plass å ekspirementere innenfor utvikling og
                design. Inntil nylig har jeg brukt wordpress for prosjekter fra
                studiet, det finnes fortsatt her:
                <a dark href="https://erlendworkblog.wordpress.com"
                  >https://erlendworkblog.wordpress.com</a
                >
              </p>
              <h4>Digitale medier og design</h4>
              <p>
                Digitale medier og design gir opplæring i design, programmering
                og produksjon av digitale applikasjoner. Bacheloren går gjennom
                mange av stegene fra å ha en ide til å utvikle et ferdig
                produkt. Noen av fagene jeg har vært innom er webutvikling,
                programmering, 3D-modellering, spillutvikling og grafisk-design.
              </p>
            </v-card-text>

            <!-- KONTAKTINFO -->
            <v-card-text>
              <v-list-item class="justify-center" dense>
                <v-btn
                  title="Facebook"
                  href="https://www.facebook.com/profile.php?id=100003582864001"
                  target="_blank"
                  color="indigo"
                  icon
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  title="Linkedin"
                  href="https://no.linkedin.com/in/erlend-brønseth-b5a99612b/en-us"
                  target="_blank"
                  color="blue"
                  icon
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="secondary"> mdi-email </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    >bronsetherlend@gmail.com</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="secondary"> mdi-phone </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>(+47) 45 80 44 52</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-card-text>
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
</style>