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
      height="200"
    >
      <v-card-title>3D modell visning med ThreeJS <v-spacer></v-spacer>
        <v-icon color="tertiary">mdi-vuetify</v-icon>
      </v-card-title>
      <v-card-text>
        <v-container>
          Enkle 3D modeller laget med ThreeJS
        </v-container>
        <v-btn
          outlined
          color="tertiary"
          @click="cubeDialog = true"
        >
          Cube
        </v-btn>
      </v-card-text>
    </v-card>
    <v-dialog
      v-model="cubeDialog"
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
          @click="cubeDialog = false"
        >
          <v-icon color="black">mdi-close</v-icon>
        </v-btn>
        <v-container fluid>
          <ThreeJs></ThreeJs>
        </v-container>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import ThreeJs from "./ThreeJs.vue";

export default {
  components: {
    ThreeJs,
  },

  data() {
    return {
      cubeDialog: false,
    }
  },
}
</script>