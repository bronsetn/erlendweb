<template>
  <body>
    <v-app-bar hide-on-scroll fixed flat fluid color="primary">
      <v-app-bar-nav-icon
        class="pl-4"
        color="tertiary"
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer v-if="$vuetify.breakpoint.mobile"></v-spacer>
      <v-toolbar-title>
        <v-btn icon v-if="!$vuetify.theme.dark" @click="$router.push('/')">
          <v-img
            src="../assets/icons/logo-light.svg"
            lazy="../assets/icons/logo-light.svg"
            height="40px"
            width="4px"
            contain
          ></v-img>
        </v-btn>
        <v-btn icon v-if="$vuetify.theme.dark" @click="$router.push('/')">
          <v-img
            src="../assets/icons/logo-dark.svg"
            lazy="../assets/icons/logo-dark.svg"
            height="40px"
            width="40px"
            contain
          ></v-img>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-spacer v-if="!$vuetify.breakpoint.mobile"></v-spacer>

      <!-- When user is at one of the specific project pages, change the links -->
      <v-row
        v-if="
          !$vuetify.breakpoint.mobile &&
          ['PriosEvents', 'Bachelor'].includes($route.name)
        "
      >
        <div v-for="(item, index) in navigation" :item="item" :key="index">
          <v-btn text link color="tertiary" @click="$router.push('/')"
            ><div class="serif">{{ item.icon }}</div>
            <div class="pl-1">{{ item.title }}</div></v-btn
          >
        </div>
      </v-row>

      <!-- Else link to different content in the main page -->
      <v-row v-else-if="!$vuetify.breakpoint.mobile">
        <div v-for="(item, index) in navigation" :item="item" :key="index">
          <v-btn :href="item.link" color="tertiary" text
            ><div class="serif">{{ item.icon }}</div>
            <div class="pl-1">{{ item.title }}</div></v-btn
          >
        </div>
      </v-row>

      <v-spacer v-if="!$vuetify.breakpoint.mobile"></v-spacer>
      <v-btn
        color="accent"
        icon
        v-if="$vuetify.theme.dark"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        ><v-icon>mdi-moon-first-quarter</v-icon></v-btn
      >
      <v-btn
        icon
        color="tertiary"
        v-else
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        ><v-icon>mdi-moon-last-quarter</v-icon></v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary color="primary">
      <v-list-item></v-list-item>
      <!-- When user is at one of the specific project pages, change the links -->
      <v-list
        transparent
        class="pl-4"
        v-if="['PriosEvents', 'Bachelor'].includes($route.name)"
        ><div v-for="(item, index) in navigation" :item="item" :key="index">
          <v-list-item @click="$router.push('/')">
            <v-list-item-icon class="serif">{{ item.icon }}</v-list-item-icon>
            <v-list-item-content>
              {{ item.title }}
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>

      <!-- Else link to different content in the main page -->
      <v-list transparent v-else class="pl-4">
        <div v-for="(item, index) in navigation" :item="item" :key="index">
          <v-list-item :href="item.link">
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
export default {
  data() {
    return {
      drawer: null,

      navigation: [
        { link: "#projects", icon: "I", title: "Prosjekter" },
        { link: "#about", icon: "II", title: "Om meg" },
        { link: "#contact", icon: "III", title: "Kontakt" },
        { link: "#other", icon: "IV", title: "Annet" },
      ],
    };
  },

  // watch: {
  //   $route() {
  //     console.log(this.$route);
  //   },
  // },
};
</script>

<style>
</style>