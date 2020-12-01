<template>
  <body>
    <v-app-bar hide-on-scroll flat color="white">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="drawer = !drawer"
        color="primary"
      ></v-app-bar-nav-icon>

      <v-btn icon v-if="!$vuetify.breakpoint.mobile" @click="$router.push('/')">
        <!-- <v-img
          src="../assets/icon-crimson.png"
          height="40"
          width="40"
        ></v-img> -->
        <h1 color="primary">B</h1>
      </v-btn>
      <v-spacer></v-spacer>
      <div v-if="!$vuetify.breakpoint.mobile">
        <v-btn text link @click="$router.push('/')" color="primary"
          >&#8544; Home</v-btn
        >
        <v-btn text link @click="$router.push('/about')" color="primary"
          >&#8545; About</v-btn
        >
        <v-btn text link @click="$router.push('/experiments')" color="primary"
          >&#8546; Experiments</v-btn
        >
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary width="100%">
      <v-list-item></v-list-item>
      <v-list transparent dense>
        <v-list-item @click="$router.push('/')">
          <v-list-item-icon> &#8544; </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
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

  // props: {
  //   attrs: {
  //     type: Object,
  //     default: () => ({}),
  //   },
  // },
};
</script>

<style>
</style>