<template>
  <!-- Floating button for scrolling to the top of the page -->
  <v-fade-transition>
    <v-btn
      fixed
      bottom
      right
      fab
      large
      color="tertiary"
      href="#top"
      v-scroll="onScroll"
      v-show="fab"
    >
      <v-icon
        color="primary"
      > mdi-chevron-up </v-icon>
    </v-btn>
  </v-fade-transition>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
    };
  },

  methods: {
    onScroll() {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset;
      this.fab = top > 20;
    },
  },
};
</script>

<style>
</style>