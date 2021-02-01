<template>
  <div>
    <v-footer
      padless
      color="secondary"
      elevation="5"
    >
      <v-container fluid>
        <v-row
          no-gutters
          justify="center"
          class="pt-4"
        >
          <!-- Contact -->
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
          >
            <v-row
              class="justify-center"
              no-gutters
            >
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
            </v-row>
            <p class="pt-2">
              bronsetherlend@gmail.com
            </p>
            <p>
              (+47) 45 80 44 52
            </p>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
            class="justify-center"
            align="center"
          >

            <v-row
              no-gutters
              justify="center"
              align="center"
              class="mt-8"
            >
              <v-btn
                href="#projects"
                color="tertiary"
                text
              >
                <div class="serif">I</div>
                <div class="pl-1">{{ $t('header.projects') }}</div>
              </v-btn>
              <v-btn
                href="#about"
                color="tertiary"
                text
              >
                <div class="serif">II</div>
                <div class="pl-1">{{ $t('header.about') }}</div>
              </v-btn>
              <v-btn
                href="#contact"
                color="tertiary"
                text
              >
                <div class="serif">III</div>
                <div class="pl-1">{{ $t('header.contact') }}</div>
              </v-btn>
              <v-btn
                href="#other"
                color="tertiary"
                text
              >
                <div class="serif">IV</div>
                <div class="pl-1">{{ $t('header.other') }}</div>
              </v-btn>
            </v-row>
          </v-col>

          <v-col
            cols="12"
            class="pa-6"
          >
            <v-divider></v-divider>
          </v-col>

          <v-col cols="12">
            <p class="normal">Copyright © {{ new Date().getFullYear() }} | Erlend Brønseth | All Rights Reserved </p>
          </v-col>

        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {

      navigation: [
        { link: "#projects", icon: "I", title: "Prosjekter" },
        { link: "#about", icon: "II", title: "Om meg" },
        { link: "#contact", icon: "III", title: "Ta kontakt" },
        { link: "#other", icon: "IV", title: "Annet" },
      ],
    };
  },
};
</script>