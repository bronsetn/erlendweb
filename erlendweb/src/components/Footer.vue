  <!-- <div class="pt-16">
    <v-footer absolute padless color="primary">
      <v-row justify="center" class="pt-3 ma-0 pa-0 footer" no-gutters>
        <v-col></v-col>

        <v-col>
          <v-icon color="secondary"> mdi-email-outline </v-icon>
          <p class="light">bronsetherlend@gmail.com</p>
        </v-col>

        <v-col>
          <v-icon color="secondary"> mdi-phone-outline</v-icon>
          <p class="light">(+47) 12 34 56 78</p>
        </v-col>

        <v-col> </v-col>
      </v-row>
    </v-footer>
  </div> -->

<template>
  <div class="pt-12">
    <v-footer absolute padless color="primary" >
      <v-row justify="center" class="pt-2 ma-0 pa-0" no-gutters>
        <p class="light ma-2 pa-0">Erlend Brønseth - {{ new Date().getFullYear() }}</p>
      </v-row>
    </v-footer>
  </div>
</template>
