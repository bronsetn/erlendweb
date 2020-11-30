<template>
  <body>
    <v-app-bar hide-on-scroll flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-btn text @click="$router.push('/')" color="primary">Home</v-btn>
      <v-btn text @click="$router.push('/about')" color="primary">About</v-btn>
      <v-btn text @click="$router.push('/api-experiments')" color="primary"
        >Experiments</v-btn
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