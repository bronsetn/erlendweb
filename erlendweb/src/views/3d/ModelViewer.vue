<template>
  <v-col
    cols="12"
    sm="12"
    md="6"
    lg="6"
    xl="6"
  >
    <v-card
      color="secondary"
      elevation="5"
      height="400"
      style="overflow:hidden;"
    >
      <v-card-title>{{ $t('other.threeJs') }}<v-spacer></v-spacer>
        <v-icon color="tertiary">mdi-cube-outline</v-icon>
      </v-card-title>

      <v-container
        fill-height
        class="faded center"
      >
        <v-btn
          dark
          x-large
          class="mb-12 pa-6"
          color="blue darken-4"
          @click="dialog1 = true"
        >
          <div>{{ $t('other.threeJsButton') }}</div>
        </v-btn>
      </v-container>
    </v-card>

    <!-- DIALOG 1 -->
    <v-dialog
      v-model="dialog1"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-btn
          absolute
          top
          right
          icon
          large
          @click="dialog1 = false"
        >
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
        <Cube></Cube>
      </v-card>
    </v-dialog>

  </v-col>
</template>

<script>
import Cube from "./Cube.vue";

export default {
  components: {
    Cube,
  },

  data() {
    return {
      dialog1: false,
    }
  },
}
</script>

<style scoped>
.faded {
    background: linear-gradient(90deg, rgba(8,14,33,1) 0%, rgba(18,24,108,1) 10%, rgba(173,117,185,1) 20%, rgba(255,169,236,1) 30%, rgba(251,191,222,1) 40%, 
    rgba(231,121,139,1) 50%, rgba(255,123,123,1) 60%, rgba(244,111,19,1) 70%, rgba(255,213,79,1) 80%, rgba(255,253,208,1) 90%, rgba(255,255,240,1) 100%);
}
</style>