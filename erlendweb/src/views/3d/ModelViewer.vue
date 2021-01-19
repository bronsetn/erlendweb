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
    >
      <v-card-title>3D modell visning med ThreeJS <v-spacer></v-spacer>
        <v-icon color="tertiary">mdi-vuetify</v-icon>
      </v-card-title>
      <v-container justify="center">
        <div class="pt-2">
          <v-btn
            x-large
            outlined
            color="tertiary"
            @click="dialog1 = true"
          >
            3D Cube
          </v-btn>
        </div>
        <div class="pt-2">
          <v-btn
            x-large
            outlined
            color="tertiary"
            @click="dialog2 = true"
          >
            3D figure
          </v-btn>
        </div>
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

    <!-- DIALOG 2 -->
    <v-dialog
      v-model="dialog2"
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
          @click="dialog2 = false"
        >
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
        <Figure></Figure>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import Cube from "./Cube.vue";
import Figure from "./Figure.vue";

export default {
  components: {
    Cube,
    Figure,
  },

  data() {
    return {
      dialog1: false,
      dialog2: false,
    }
  },
}
</script>