  <!-- Fixed button for scrolling back to the top of the page -->
<template>
  <v-fade-transition>
    <v-btn
      fixed
      bottom
      right
      fab
      small
      color="tertiary"
      v-scroll="onScroll"
      v-show="fab"
      :to="{hash: 'home'}"
      title="Tilbake til topp"
    >
      <v-icon color="primary"> mdi-chevron-up </v-icon>
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