<template>

  <body>
    <v-app-bar
      hide-on-scroll
      fixed
      flat
      color="secondary"
    >
      <v-app-bar-nav-icon
        class="pl-4"
        color="tertiary"
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-spacer v-if="$vuetify.breakpoint.mobile"></v-spacer>

      <v-toolbar-title>
        <v-btn
          icon
          v-if="!$vuetify.theme.dark"
          @click="$router.push('/')"
        >
          <v-img
            src="../assets/icons/logo-light.svg"
            height="40px"
            width="40px"
            contain
          ></v-img>
        </v-btn>
        <v-btn
          icon
          v-if="$vuetify.theme.dark"
          @click="$router.push('/')"
        >
          <v-img
            src="../assets/icons/logo-dark.svg"
            height="40px"
            width="40px"
            contain
          ></v-img>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-spacer v-if="!$vuetify.breakpoint.mobile"></v-spacer>

      <!-- Else link to different content in the main page -->
      <v-row v-if="!$vuetify.breakpoint.mobile">
        <div
          v-for="(item, index) in navigation"
          :item="item"
          :key="index"
        >
          <v-btn
            :href="item.link1"
            color="tertiary"
            text
          >
            <div class="serif">{{ item.icon }}</div>
            <div class="pl-1">{{ item.title }}</div>
          </v-btn>
        </div>
      </v-row>

      <v-spacer v-if="!$vuetify.breakpoint.mobile"></v-spacer>

      <LanguageSwitch></LanguageSwitch>

      <v-btn
        color="accent"
        icon
        v-if="$vuetify.theme.dark"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-weather-night</v-icon>
      </v-btn>
      <v-btn
        icon
        v-else
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-weather-night</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      color="secondary"
    >
      <v-list-item></v-list-item>
      <v-list
        transparent
        class="pl-4"
      >
        <div
          v-for="(item, index) in navigation"
          :item="item"
          :key="index"
        >
          <v-list-item :href="item.link1">
            <v-list-item-icon class="serif">{{ item.icon }}</v-list-item-icon>
            <v-list-item-content>
              {{ item.title }}
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </body>
</template>

<script>
import LanguageSwitch from "./LanguageSwitch.vue";

export default {
  components: {
    LanguageSwitch,
  },

  data() {
    return {
      drawer: null,

      navigation: [
        { link1: "#projects", link2: "/#projects", icon: "I", title: "Prosjekter" },
        { link1: "#about", link2: "/#about", icon: "II", title: "Om meg" },
        { link1: "#contact", link2: "/#contact", icon: "III", title: "Ta kontakt" },
        { link1: "#other", link2: "/#other", icon: "IV", title: "Annet" },
      ],
    };
  },
};
</script>

<style>
</style>