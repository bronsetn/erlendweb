

<template>
  <body>
    <v-container>
      <v-container class="justify-center">
        <p class="font-weight-light ma-1 pa-0">&#8545;</p>
        <h2>Om meg</h2>
      </v-container>

      <v-row class="d-flex justify-center">
        <v-col>
          <v-card elevation="5" color="primary">
            <v-row class="d-flex justify-center">
              <v-col cols="12">
                <v-avatar size="200" class="ma-4">
                  <v-img
                    alt="Bilde av Halden kommune"
                    src="../assets/images/halden.jpg"
                    lazy="../assets/images/halden.jpg"
                    height="200"
                  >
                  </v-img
                ></v-avatar>
                <h2 class="pb-2">Erlend Brønseth</h2>

                <v-btn
                  title="Linkedin"
                  href="https://no.linkedin.com/in/erlend-brønseth-b5a99612b/en-us"
                  target="_blank"
                  color="tertiary"
                  large
                  icon
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>

                <v-btn
                  title="Facebook"
                  href="https://www.facebook.com/profile.php?id=100003582864001"
                  target="_blank"
                  color="tertiary"
                  large
                  icon
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>

                <v-btn
                  title="Gitlab"
                  href="https://gitlab.com/bronsetn"
                  target="_blank"
                  color="tertiary"
                  large
                  icon
                >
                  <v-icon>mdi-gitlab</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12">
                <p class="normal pl-4 pr-4">
                  Jeg er en front end juniorutvikler med en bachelor innenfor
                  digitale medier og design.
                </p>
                <p class="light pl-4 pr-4">
                  Jeg er en 23 åring fra Inderøy kommune i Nord-Trøndelag.
                  Tanken bak dette nettstedet er å kunne bruke det som
                  portefølje i tillegg til en plass å ekspirementere innenfor
                  utvikling og design.
                </p>

                <h3 class="pa-4">Digitale medier og design</h3>

                <p class="light text-justify pl-4 pr-4">
                  Digitale medier og design gir opplæring i design,
                  programmering og produksjon av digitale applikasjoner.
                  Bacheloren går gjennom mange av stegene fra å ha en ide til å
                  utvikle et ferdig produkt. Noen av fagene jeg har vært innom
                  er webutvikling, programmering, 3D-modellering, spillutvikling
                  og grafisk-design.
                </p>
                <b>Wordpress</b>
                <p class="light pl-4 pr-4">
                  Inntil nylig har jeg brukt wordpress for publisering av
                  prosjekter fra studiet, de finnes fortsatt her:
                  <a dark href="https://erlendworkblog.wordpress.com"
                    >https://erlendworkblog.wordpress.com</a
                  >
                </p>
              </v-col>

              <v-col xs="12" sm="6" md="6" lg="6" xl="6">
                <v-icon color="tertiary"> mdi-email-outline </v-icon>
                <p class="light">bronsetherlend@gmail.com</p>
              </v-col>

              <v-col xs="12" sm="6" md="6" lg="6" xl="6">
                <v-icon color="tertiary"> mdi-phone-outline</v-icon>
                <p class="light">(+47) 45 80 44 52</p>
              </v-col>
              <v-col cols="12"></v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>
