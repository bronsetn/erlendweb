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
            color="primary"
            src="../assets/icons/logo-light.svg"
            lazy="../assets/icons/logo-light.svg"
            height="45px"
            width="45px"
            contain
          ></v-img>
        </v-btn>
        <v-btn icon v-if="$vuetify.theme.dark" @click="$router.push('/')">
          <v-img
            color="primary"
            src="../assets/icons/logo-dark.svg"
            lazy="../assets/icons/logo-dark.svg"
            height="45px"
            width="45px"
            contain
          ></v-img>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- When user is at one of the specific project pages change the links -->
      <div
        v-if="
          !$vuetify.breakpoint.mobile &&
          ['PriosEvents', 'Bachelor'].includes($route.name)
        "
      >
        <v-btn text link color="tertiary" @click="$router.push('/')"
          >&#8544; Prosjekter</v-btn
        >
        <v-btn text link color="tertiary" @click="$router.push('/')"
          >&#8545; Om meg</v-btn
        >
        <v-btn text link color="tertiary" @click="$router.push('/')"
          >&#8546; Kontakt</v-btn
        >
        <v-btn text link color="tertiary" @click="$router.push('/')"
          >&#8546; Annet</v-btn
        >
      </div>

      <!-- Else just link to the main page -->
      <div v-else-if="!$vuetify.breakpoint.mobile">
        <v-btn text link href="#projects" color="tertiary"
          >&#8544; Prosjekter</v-btn
        >
        <v-btn text link href="#about" color="tertiary">&#8545; Om meg</v-btn>
        <v-btn text link href="#contact" color="tertiary">&#8546; Kontakt</v-btn>
        <v-btn text link href="#other" color="tertiary">&#8547; Annet</v-btn>
      </div>

      <v-spacer v-if="!$vuetify.breakpoint.mobile"></v-spacer>
      <v-btn
        color="accent"
        icon
        fab
        v-if="$vuetify.theme.dark"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        ><v-icon>mdi-white-balance-sunny</v-icon></v-btn
      >
      <v-btn
        icon
        fab
        color="tertiary"
        v-else
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        ><v-icon>mdi-moon-waxing-crescent</v-icon></v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary color="primary">
      <v-list-item></v-list-item>
      <v-list
        transparent
        class="pl-4"
        v-if="['PriosEvents', 'Bachelor'].includes($route.name)"
      >
        <v-list-item @click="$router.push('/')">
          <v-list-item-icon> &#8544; </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Prosjekter</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/')">
          <v-list-item-icon> &#8545; </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Om meg</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/')">
          <v-list-item-icon> &#8545; </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Eksperiment</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list transparent v-else class="pl-4">
        <v-list-item href="#projects">
          <v-list-item-icon> &#8544; </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Prosjekter</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="#about">
          <v-list-item-icon> &#8545; </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Om meg</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="#other">
          <v-list-item-icon> &#8545; </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Eksperiment</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </body>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
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