<template>
  <body>
    <v-app-bar hide-on-scroll color="white">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="drawer = !drawer"
        color="primary"
      ></v-app-bar-nav-icon>
      <v-spacer v-if="$vuetify.breakpoint.mobile"></v-spacer>
      <v-toolbar-title>
        <v-btn icon @click="$router.push('/')">
          <v-img
            src="../assets/icons/profile-icon-glitch.png"
            height="45px"
            width="45px"
            contain
          ></v-img>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="!$vuetify.breakpoint.mobile">
        <v-btn text link @click="$router.push('/')" color="primary"
          >&#8544; Projects</v-btn
        >
        <v-btn text link @click="$router.push('/about')" color="primary"
          >&#8545; About</v-btn
        >
        <v-btn text link @click="$router.push('/experiments')" color="primary"
          >&#8546; Experiments</v-btn
        >
      </div>
      <v-spacer v-if="!$vuetify.breakpoint.mobile"></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary width="100%">
      <v-list-item></v-list-item>
      <v-list transparent dense>
        <v-list-item @click="$router.push('/')">
          <v-list-item-icon> &#8544; </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/about')">
          <v-list-item-icon> &#8545; </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/experiments')">
          <v-list-item-icon> &#8545; </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Experiments</v-list-item-title>
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