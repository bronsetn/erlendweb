

<template>

  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">II</div>
        <h1> {{ $t('about.title') }}
        </h1>
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
                <v-row>
                  <v-col
                    cols="12"
                    class="center"
                  >
                    <v-avatar size="200">
                      <v-img
                        alt="Personbilde"
                        src="../assets/images/about-image.jpg"
                        lazy-src="../assets/images/placeholder-coffee.png"
                      >
                      </v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="12">
                    <h1>Erlend Brønseth</h1>

                    <p class="pt-4">
                      <v-icon
                        small
                        class="pb-1 pr-2"
                        color="tertiary"
                      >mdi-email</v-icon> bronsetherlend@gmail.com
                    </p>
                    <p>
                      <v-icon
                        small
                        class="pb-1 pr-2"
                        color="tertiary"
                      >mdi-phone</v-icon> (+47) 45 80 44 52
                    </p>
                    <v-btn
                      title="Linkedin"
                      href="https://no.linkedin.com/in/erlend-brønseth-b5a99612b/en-us"
                      target="_blank"
                      color="tertiary"
                      icon
                    >
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn
                      title="Facebook"
                      href="https://www.facebook.com/profile.php?id=100003582864001"
                      target="_blank"
                      color="tertiary"
                      icon
                    >
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>

                <v-card-text>
                  <p class="normal">
                    {{ $t('about.content1') }}
                  </p>

                  <p
                    class="normal"
                    v-html="$t('about.content2')"
                  ></p>

                  <h3 class="thick pa-4">Digitale medier og design</h3>

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

                  <h3 class="thick pa-4">Wordpress</h3>

                  <p class="normal pb-4">
                    Inntil nylig har jeg brukt wordpress for publisering av
                    prosjekter fra studiet, de finnes fortsatt her:
                    <br>
                    <a
                      target="_blank"
                      href="https://erlendworkblog.wordpress.com"
                    >https://erlendworkblog.wordpress.com</a>
                  </p>

                  <v-divider></v-divider>

                  <h3 class="thick pa-4 pt-8">Teknologier</h3>

                  <v-row
                    justify="center"
                    class="pa-2"
                  >
                    <v-col
                      v-for="(item, index) in techs"
                      :item="item"
                      :key="index"
                    >
                      <v-icon color="tertiary">{{ item.icon }}</v-icon>
                      <p> {{item.name}} </p>
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
