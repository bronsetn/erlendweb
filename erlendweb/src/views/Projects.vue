<template>

  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">I</div>
        <h1>{{ $t('header.projects') }}</h1>
      </v-container>

      <v-row class="d-flex justify-center">
        <v-col
          v-for="(item, index) in $t('projects')"
          :item="item"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
        >
          <v-card
            elevation="5"
            color="secondary"
          >
            <v-container>
              <v-img
                height="300"
                contain
                :src="item.imageCompressed"
                :lazy-src="item.imageCompressed"
              ></v-img>
            </v-container>

            <v-card-title class="pb-2">
              <h2 class="text-truncate">
                {{ item.title}}
              </h2>
            </v-card-title>
            <v-card-text>
              <p class="subtitle-2 text-left pa-0 ma-0 pb-2">
                {{ item.date }}
              </p>
              <p class="text-left">
                <v-clamp
                  class="text--primary"
                  autoresize
                  :max-lines="2"
                >
                  {{item.description}} <template #after="{ toggle, expanded, clamped }">
                    <a
                      href="#"
                      v-if="expanded || clamped"
                      class="clamp"
                      @click.prevent="toggle"
                    >{{ expanded ? "mindre" : "mer" }}</a>
                  </template>
                </v-clamp>
              </p>
            </v-card-text>

            <v-card-actions class="ma-0">
              <v-spacer></v-spacer>
              <v-btn
                color="accent"
                text
                rel="noopener"
                target="_blank"
                :href="item.link"
              >{{ $t('misc.visit') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import VClamp from "vue-clamp";

export default {
  components: {
    VClamp,
  },
};
</script>