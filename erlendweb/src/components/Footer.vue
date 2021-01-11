<template>
  <div style="padding-top: 100px;">
    <v-footer
      absolute
      padless
      color="primary"
      elevation="5"
    >
      <v-container fluid>
        <v-row
          no-gutters
          justify="center"
        >
          <!-- Contact -->
          <v-col cols="4">
            <v-row
              class="justify-center pt-4"
              no-gutters
            >
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
              <v-btn
                title="Gitlab"
                href="https://gitlab.com/bronsetn"
                target="_blank"
                color="tertiary"
                icon
              >
                <v-icon>mdi-gitlab</v-icon>
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
            cols="4"
            justify="center"
            align="center"
          >

            <v-row
              no-gutters
              justify="center"
              align="center"
              class="mt-8"
            >
              <div
                v-for="(item, index) in navigation"
                :item="item"
                :key="index"
              >
                <v-list-item>
                  <v-btn
                    :href="item.link"
                    text
                  >
                    <div class="serif">{{ item.icon }}</div>
                    <div class="pl-1">{{ item.title }}
                    </div>
                  </v-btn>
                </v-list-item>
              </div>
            </v-row>
          </v-col>

          <v-col
            cols="12"
            class="pt-2"
          >
            <v-divider></v-divider>
          </v-col>

          <v-col cols="12">
            <p class="light pt-2">Copyright © {{ new Date().getFullYear() }} | Erlend Brønseth | All Rights Reserved </p>
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
        { link: "#contact", icon: "III", title: "Kontakt" },
        { link: "#other", icon: "IV", title: "Annet" },
      ],
    };
  },
};
</script>