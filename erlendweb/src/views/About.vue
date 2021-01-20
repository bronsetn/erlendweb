

<template>
  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">II</div>
        <h1>Om meg</h1>
      </v-container>

      <v-row class="justify-center">
        <v-col
          cols="12"
          sm="12"
          md="10"
          lg="10"
          xl="8"
        >
          <v-card
            elevation="5"
            color="secondary"
          >
            <v-row class="justify-center">
              <v-col
                xs="12"
                sm="12"
                md="10"
                lg="10"
                xl="8"
              >
                <v-avatar size="200">
                  <v-img
                    alt="Personbilde"
                    src="../assets/images/about-image.jpg"
                    lazy-src="../assets/images/placeholder-coffee.png"
                    height="200"
                  >
                  </v-img>
                </v-avatar>

                <h1 class="pa-4">Erlend Brønseth</h1>

                <v-row class="justify-center">
                  <v-btn
                    title="Linkedin"
                    href="https://no.linkedin.com/in/erlend-brønseth-b5a99612b/en-us"
                    target="_blank"
                    color="tertiary"
                    class="ma-1"
                    icon
                  >
                    <v-icon large>mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn
                    title="Facebook"
                    href="https://www.facebook.com/profile.php?id=100003582864001"
                    target="_blank"
                    color="tertiary"
                    class="ma-1"
                    icon
                  >
                    <v-icon large>mdi-facebook</v-icon>
                  </v-btn>
                </v-row>

                <v-card-text>
                  <p class="normal pt-2">
                    Jeg er en 23 åring fra Inderøy med en bachelor innenfor
                    digitale medier og design. Dette nettstedet er ment som en
                    portefølje i tillegg til et sted jeg kan
                    ekspirementere innenfor utvikling og design.
                  </p>
                  <p>Jeg har ambisjoner om å bli dreven
                    innenfor front-end utvikling og
                    har i høst arbeidet hos Prios Kompetanse AS,
                    hvor jeg har blitt kjent med bruk av rammeverket VueJs.</p>

                  <p class="thick pt-4">Teknologier</p>

                  <v-row justify="center">
                    <v-col
                      v-for="(item, index) in techs"
                      :item="item"
                      :key="index"
                    >
                      <v-icon color="tertiary">{{ item.icon }}</v-icon>
                      <p> {{item.name}} </p>
                    </v-col>
                  </v-row>

                  <v-divider></v-divider>

                  <p class="thick pt-8">Digitale medier og design</p>

                  <p class="normal">
                    Bachelorstudiumet digitale medier og design på HIØ gir opplæring i
                    mange av stegene innenfor utvikling av digitale ting og applikasjoner.
                    Noen av fagene jeg har vært innom
                    er webutvikling, programmering, 3D-modellering, spillutvikling
                    og grafisk-design.
                    <br>
                    <a
                      target="_blank"
                      href="https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/erlendweb%2FKarakterutskrift%20-%20Digitale%20medier%20og%20design.pdf?alt=media&token=e83e4807-efbd-4f48-98be-3f26a9fca847"
                    >Dokumentasjon</a>
                  </p>

                  <p class="thick pt-4">Wordpress</p>

                  <p class="normal">
                    Inntil nylig har jeg brukt wordpress for publisering av
                    prosjekter fra studiet, de finnes fortsatt her:
                    <br>
                    <a
                      target="_blank"
                      href="https://erlendworkblog.wordpress.com"
                    >https://erlendworkblog.wordpress.com</a>
                  </p>

                  <v-row
                    class="pt-4"
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                      lg="6"
                      xl="5"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-icon color="tertiary">mdi-email</v-icon>
                          <p>bronsetherlend@gmail.com</p>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                      lg="6"
                      xl="5"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-icon color="tertiary"> mdi-phone</v-icon>
                          <p>(+47) 45 80 44 52</p>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
export default {
  data() {
    return {
      techs: [
        {
          name: "VueJs",
          icon: "mdi-vuejs",
        },
        {
          name: "Vuetify",
          icon: "mdi-vuetify",
        },
        {
          name: "HTML",
          icon: "mdi-language-html5",
        },
        {
          name: "Javascript",
          icon: "mdi-language-javascript",
        },
        {
          name: "CSS",
          icon: "mdi-language-css3",
        },
        {
          name: "Unity",
          icon: "mdi-unity",
        },
      ]
    }
  }
}
</script>
