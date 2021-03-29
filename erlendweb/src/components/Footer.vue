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
          <!-- Contact info -->
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
                class='animatedLink'
                title="Github"
                href="https://github.com/bronsetn?tab=repositories"
                rel="noopener"
                target="_blank"
                color="accent"
                icon
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>

              <v-btn
                class='animatedLink'
                title="Linkedin"
                href="https://no.linkedin.com/in/erlend-brønseth-b5a99612b/en-us"
                rel="noopener"
                target="_blank"
                color="accent"
                icon
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>

            </v-row>
            <p class="pt-2">
              <a
                class='animatedLink'
                href="mailto:bronsetherlend@gmail.com"
              >
                bronsetherlend@gmail.com</a>
            </p>
            <p>
              <a
                class="animatedLink"
                href="tel:+4745804452"
              >
                (+47) 45 80 44 52
              </a>
            </p>
          </v-col>

          <!-- Navigation links -->
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
            class="justify-center"
            align="center"
          >
            <!-- If user is on the homepage -->
            <v-row
              v-if="['Home'].includes($route.name)"
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
                :to="{ name: 'Other'}"
                color="tertiary"
                text
              >
                <div class="serif">IV</div>
                <div class="pl-1">{{ $t('header.other') }}</div>
              </v-btn>
            </v-row>

            <!-- When on other pages than the homepage, footer uses these links -->
            <v-row
              v-else
              no-gutters
              justify="center"
              align="center"
              class="mt-8"
            >
              <v-btn
                @click="$router.push(`/${$i18n.locale}/#projects`)"
                color="tertiary"
                text
              >
                <div class="serif">I</div>
                <div class="pl-1">{{ $t('header.projects') }}</div>
              </v-btn>
              <v-btn
                @click="$router.push(`/${$i18n.locale}/#about`)"
                color="tertiary"
                text
              >
                <div class="serif">II</div>
                <div class="pl-1">{{ $t('header.about') }}</div>
              </v-btn>
              <v-btn
                @click="$router.push(`/${$i18n.locale}/#contact`)"
                color="tertiary"
                text
              >
                <div class="serif">III</div>
                <div class="pl-1">{{ $t('header.contact') }}</div>
              </v-btn>
              <v-btn
                :to="{ name: 'Other'}"
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

<style scoped>
* {
  text-align: center;
}
</style>

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