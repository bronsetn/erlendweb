
<template>
  <body>
    <v-container>
      <span class="font-weight-light">&#8545;</span>
      <v-row class="d-flex justify-center">
        <v-col xs="12" sm="12" md="10" lg="8" xl="8">
          <v-card color="primary">
            <v-container>
              <v-img
                src="../assets/images/halden.jpg"
                lazy="../assets/images/halden.jpg"
                height="300"
                aspect-ratio="2"
                class="white--text"
                alt="Bilde av Halden by, hvorfor ikke"
              >
                <h1 class="pt-6">Erlend Brønseth</h1>
              </v-img>

              <!-- OM INFO -->
              <v-card-text>
                <p class="subtitle-1">Hei!</p>
                <p class="normal">
                  Jeg er en 23 åring fra Inderøy som tar et bachelorstudium i
                  digitale medier og design på Høgskolen i Østfold. Mitt mål med
                  studiet og prosjekter som dette er å bli bedre innenfor
                  front-end utvikling hovedsaklig.
                </p>
                <p class="normal">
                  Tanken bak dette nettstedet er å kunne bruke det som
                  portefølje i tillegg til en plass å ekspirementere innenfor
                  utvikling og design.
                </p>
                <!-- Media -->
                <v-list-item class="justify-center">
                  <v-btn
                    title="Facebook"
                    href="https://www.facebook.com/profile.php?id=100003582864001"
                    target="_blank"
                    color="secondary"
                    icon
                  >
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn
                    title="Linkedin"
                    href="https://no.linkedin.com/in/erlend-brønseth-b5a99612b/en-us"
                    target="_blank"
                    color="secondary"
                    icon
                  >
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                </v-list-item>

                <v-divider inset></v-divider>
                <br />
                <!-- KONTAKTINFO -->
                  <v-list-item dense>
                    <v-list-item-icon>
                      <v-icon color="secondary"> mdi-email </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <p class="light">bronsetherlend@gmail.com</p>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item dense>
                    <v-list-item-icon>
                      <v-icon color="secondary"> mdi-phone </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <p class="light">(+47) 45 80 44 52</p>
                    </v-list-item-content>
                  </v-list-item>

                <v-divider inset></v-divider>
                <br />
                <!-- Digitale medier -->
                <p class="subtitle-1">Digitale medier og design</p>
                <p class="normal">
                  Digitale medier og design gir opplæring i design,
                  programmering og produksjon av digitale applikasjoner.
                  Bacheloren går gjennom mange av stegene fra å ha en ide til å
                  utvikle et ferdig produkt. Noen av fagene jeg har vært innom
                  er webutvikling, programmering, 3D-modellering, spillutvikling
                  og grafisk-design.
                </p>
                <p class="normal">
                  Inntil nylig har jeg brukt wordpress for publisering av
                  prosjekter fra studiet, de finnes fortsatt her:
                  <a dark href="https://erlendworkblog.wordpress.com"
                    >https://erlendworkblog.wordpress.com</a
                  >
                </p>
              </v-card-text>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
