<template>

  <div>
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
                        alt="Bilde av Erlend"
                        src="https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/about-image.jpg?alt=media&token=2389d2fb-b60c-46f5-bd55-00c44629c270"
                        lazy-src="https://firebasestorage.googleapis.com/v0/b/erlendweb-3e2d9.appspot.com/o/about-image.jpg?alt=media&token=2389d2fb-b60c-46f5-bd55-00c44629c270"
                      >
                      </v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="12">
                    <h1>Erlend Brønseth</h1>
                    <p class="pt-4">
                      <a
                        class="animatedLink"
                        href="mailto:bronsetherlend@gmail.com"
                      >
                        <v-icon
                          class="pb-1 pr-2"
                          color="accent"
                          small
                        >mdi-email</v-icon>
                        bronsetherlend@gmail.com
                      </a>
                    </p>
                    <p>
                      <a
                        class="animatedLink"
                        href="tel:+4745804452"
                      >
                        <v-icon
                          class="pb-1 pr-2"
                          color="accent"
                          small
                        >mdi-phone</v-icon>
                        (+47) 45 80 44 52
                      </a>
                    </p>
                    <v-btn
                      class="ma-2 mt-4 animatedLink"
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
                      class="ma-2 mt-4 animatedLink"
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

                <v-card-text class="ma-0 pa-4">

                  <p>
                    {{ $t('about.intro1') }}
                  </p>

                  <p v-html="$t('about.intro2')"></p>

                  <!-- <h3 class=" pa-4">{{ $t('about.wordpress') }}</h3> -->

                  <!-- <p v-html="$t('about.wordpressDescription')"></p> -->

                  <h3 class=" pa-4">{{ $t('about.erlendweb') }}</h3>

                  <p v-html="$t('about.erlendwebDescription')"></p>

                  <h3 class="pa-4">{{ $t('about.skills') }}</h3>

                  <v-row
                    justify="center"
                    class="pa-4 pb-8"
                  >
                    <v-col
                      class="pr-4 pl-4 ma-0"
                      v-for="(item, index) in techs"
                      :item="item"
                      :key="index"
                    >
                      <v-icon
                        disabled
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
  </div>
</template>

<style scoped>
* {
  text-align: center;
}
</style>

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
      ]
    }
  }
}
</script>
