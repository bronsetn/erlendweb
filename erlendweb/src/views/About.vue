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
                      rel="noopener"
                      target="_blank"
                      color="tertiary"
                      icon
                    >
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn
                      title="Facebook"
                      href="https://www.facebook.com/profile.php?id=100003582864001"
                      rel="noopener"
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
                    {{ $t('about.intro1') }}
                  </p>

                  <p
                    class="normal"
                    v-html="$t('about.intro2')"
                  ></p>

                  <h3 class="thick pa-4"> {{ $t('about.bachelor') }}
                  </h3>

                  <p
                    class="normal"
                    v-html="$t('about.bachelorDescription')"
                  ></p>

                  <h3 class="thick pa-4">{{ $t('about.wordpress') }}</h3>

                  <p class="normal pb-4">
                    {{ $t('about.wordpressDescription') }}
                    <br>
                    <a
                      rel="noopener"
                      target="_blank"
                      href="https://erlendworkblog.wordpress.com"
                    >https://erlendworkblog.wordpress.com</a>
                  </p>

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
