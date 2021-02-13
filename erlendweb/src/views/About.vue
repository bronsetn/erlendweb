<template>

  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">II</div>
        <h1> {{ $t('header.about') }}</h1>
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
                        lazy-src="../assets/images/about-image.jpg"
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
                      >mdi-email</v-icon>
                      <a
                        class="animatedLink"
                        href="mailto:bronsetherlend@gmail.com"
                      >
                        bronsetherlend@gmail.com
                      </a>
                    </p>
                    <p>
                      <v-icon
                        small
                        class="pb-1 pr-2"
                        color="tertiary"
                      >mdi-phone</v-icon>(+47) 45 80 44 52
                    </p>
                    <v-btn
                      class="ma-2 animatedLink"
                      title="Github"
                      href="https://github.com/bronsetn"
                      rel="noopener"
                      target="_blank"
                      color="accent"
                      icon
                    >
                      <v-icon large>mdi-github</v-icon>
                    </v-btn>
                    <v-btn
                      class="ma-2 animatedLink"
                      title="Linkedin"
                      href="https://no.linkedin.com/in/erlend-brønseth-b5a99612b/en-us"
                      rel="noopener"
                      target="_blank"
                      color="accent"
                      icon
                    >
                      <v-icon large>mdi-linkedin</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>

                <v-card-text>
                  <p class="normal">
                    {{ $t('about.intro1') }}
                  </p>

                  <p
                    class="normal"
                    v-html="$t('about.intro2')"
                  ></p>

                  <!-- <h3 class="thick pa-4"> {{ $t('about.bachelor') }}
                  </h3>
                  <p
                    class="normal"
                    v-html="$t('about.bachelorDescription')"
                  ></p> -->

                  <h3 class="thick pa-4">{{ $t('about.wordpress') }}</h3>

                  <p
                    class="normal"
                    v-html="$t('about.wordpressDescription')"
                  ></p>

                  <h3 class="thick pa-4">{{ $t('about.erlendweb') }}</h3>

                  <p
                    class="normal pb-2"
                    v-html="$t('about.erlendwebDescription')"
                  >
                  </p>

                  <br>

                  <v-divider></v-divider>

                  <h3 class="thick pa-4 pt-8">{{ $t('about.skills') }}</h3>

                  <v-row
                    justify="center"
                    class="pa-2"
                  >
                    <v-col
                      v-for="(item, index) in techs"
                      :item="item"
                      :key="index"
                    >
                      <v-icon
                        disabled
                        class="pb-2"
                        medium
                      >{{ item.icon }}</v-icon>
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
          name: "HTML",
          icon: "mdi-language-html5",
        },
        {
          name: "CSS",
          icon: "mdi-language-css3",
        },
        {
          name: "Javascript",
          icon: "mdi-language-javascript",
        },
        {
          name: "VueJS",
          icon: "mdi-vuejs",
        },
        {
          name: "Vuetify",
          icon: "mdi-vuetify",
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
