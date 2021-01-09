

<template>
  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">I</div>
        <h1>Om meg</h1>
      </v-container>

      <v-row class="d-flex justify-center">
        <v-col>
          <v-card elevation="5" color="secondary">
            <v-row class="d-flex justify-center">
              <v-col xs="12" sm="12" md="8" lg="8" xl="6">
                <v-avatar size="200">
                  <v-img
                    alt="Bilde av Halden kommune"
                    src="../assets/images/halden.jpg"
                    lazy="../assets/images/halden.jpg"
                    height="200"
                  >
                  </v-img
                ></v-avatar>
                <h2 class="pa-4">Erlend Brønseth</h2>

                <p class="normal">
                  Jeg er en junior front-end utvikler med en bachelor innenfor
                  digitale medier og design.
                </p>
                <p class="light">
                  Jeg er en 23 åring fra Inderøy med ambisjoner for å bli dreven
                  innenfor front-end utvikling. Tanken bak dette nettstedet er å
                  kunne bruke det som portefølje i tillegg til en plass å
                  ekspirementere innenfor utvikling og design.
                </p>

                <b class="pa-2">Digitale medier og design</b>
                <p class="light">
                  Digitale medier og design gir opplæring i design,
                  programmering og produksjon av digitale applikasjoner.
                  Bacheloren går gjennom mange av stegene fra å ha en ide til å
                  utvikle et ferdig produkt. Noen av fagene jeg har vært innom
                  er webutvikling, programmering, 3D-modellering, spillutvikling
                  og grafisk-design.
                </p>
                <b class="pa-2">Wordpress</b>
                <p class="light">
                  Inntil nylig har jeg brukt wordpress for publisering av
                  prosjekter fra studiet, de finnes fortsatt her:
                  <a dark href="https://erlendworkblog.wordpress.com"
                    >https://erlendworkblog.wordpress.com</a
                  >
                </p>

                <h2 class="pt-8">Her er jeg tilgjengelig</h2>

                <v-row class="justify-center pt-4" no-gutters>
                  <v-btn
                    title="Linkedin"
                    href="https://no.linkedin.com/in/erlend-brønseth-b5a99612b/en-us"
                    target="_blank"
                    color="tertiary"
                    x-large
                    icon
                  >
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn
                    title="Facebook"
                    href="https://www.facebook.com/profile.php?id=100003582864001"
                    target="_blank"
                    color="tertiary"
                    x-large
                    icon
                  >
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn
                    title="Gitlab"
                    href="https://gitlab.com/bronsetn"
                    target="_blank"
                    color="tertiary"
                    x-large
                    icon
                  >
                    <v-icon>mdi-gitlab</v-icon>
                  </v-btn>
                </v-row>

                <v-row class="pt-4" justify="center">
                  <v-col xs="12" sm="12" md="6" lg="4" xl="4">
                    <v-list-item>
                      <v-list-item-content>
                        <v-icon color="tertiary"> mdi-email</v-icon>
                        <p>bronsetherlend@gmail.com</p>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                  <v-col xs="12" sm="12" md="6" lg="4" xl="4">
                    <v-list-item>
                      <v-list-item-content>
                        <v-icon color="tertiary"> mdi-phone</v-icon>
                        <p>(+47) 45 80 44 52</p>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>
