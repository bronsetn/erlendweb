<template>
  <body>
    <v-app-bar hide-on-scroll flat color="primary">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer v-if="$vuetify.breakpoint.mobile"></v-spacer>
      <v-toolbar-title>
        <v-btn icon v-if="!$vuetify.theme.dark" @click="$router.push('/')">
          <v-img
            src="../assets/icons/profile-icon.png"
            lazy="../assets/icons/profile-icon.png"
            height="45px"
            width="45px"
            contain
          ></v-img>
        </v-btn>
        <v-btn icon v-if="$vuetify.theme.dark" @click="$router.push('/')">
          <v-img
            src="../assets/icons/profile-icon-w.png"
            lazy="../assets/icons/profile-icon-w.png"
            height="45px"
            width="45px"
            contain
          ></v-img>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="!$vuetify.breakpoint.mobile">
        <v-btn text link href="#projects" color="secondary"
          >&#8544; Prosjekter</v-btn
        >
        <v-btn text link href="#about" color="secondary">&#8545; Om meg</v-btn>
        <v-btn text link href="#experiments" color="secondary"
          >&#8546; Annet</v-btn
        >

        <!-- <v-btn text link @click="$router.push('/')" color="secondary"
          >&#8544; Projects</v-btn
        >

        <v-btn text link @click="$router.push('/about')" color="secondary"
          >&#8545; About</v-btn
        >
        <v-btn text link @click="$router.push('/experiments')" color="secondary"
          >&#8546; Experiments</v-btn
        > -->
      </div>
      <v-spacer v-if="!$vuetify.breakpoint.mobile"></v-spacer>
      <v-btn
        color="yellow"
        icon
        v-if="$vuetify.theme.dark"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        ><v-icon>mdi-white-balance-sunny</v-icon></v-btn
      >
      <v-btn
        icon
        color="black"
        v-else
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        ><v-icon>mdi-moon-waxing-crescent</v-icon></v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary color="primary">
      <v-list-item></v-list-item>

      <!-- <v-btn text link href="#projects" color="secondary"
        >&#8544; Prosjekter</v-btn
      >
      <v-btn text link href="#about" color="secondary">&#8545; Om meg</v-btn>
      <v-btn text link href="#experiments" color="secondary"
        >&#8546; Annet</v-btn
      > -->

      <v-list transparent dense>
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

        <v-list-item href="#experiments">
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
};
</script>

<style>
</style>