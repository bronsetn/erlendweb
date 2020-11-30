<template>
  <body>
    <v-app-bar hide-on-scroll flat color="white">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      
      <v-spacer></v-spacer>

      <v-btn text link @click="$router.push('/')" color="primary"
        >&#8544; Home</v-btn
      >
      <v-btn text link @click="$router.push('/about')" color="primary"
        >&#8545; About</v-btn
      >
      <v-btn text link @click="$router.push('/api-experiments')" color="primary"
        >&#8546; Experiments</v-btn
      >

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
  </body>
</template>

<script>
export default {
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>