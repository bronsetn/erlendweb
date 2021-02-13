<template>
  <v-col
    cols="12"
    sm="12"
    md="6"
    lg="6"
    xl="4"
  >
    <v-card
      color="secondary"
      elevation="5"
      height="400"
      style="overflow: hidden;"
    >
      <v-card-title>{{ $t('other.threeJs') }}<v-spacer></v-spacer>
        <v-icon color="tertiary">mdi-cube-outline</v-icon>
      </v-card-title>

      <v-container
        fill-height
        class="faded center"
      >
        <v-btn
          outlined
          x-large
          color="white"
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
    height: 350px;
    background-image: linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%);
  }
</style>