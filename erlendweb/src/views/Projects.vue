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
                alt="Image of website, from earlier projects"
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
                  :max-lines="2"
                >{{item.description}}
                </v-clamp>
              </p>
            </v-card-text>

            <v-card-actions class="ma-0">
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog['dialog_' + index]">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="accent"
                    text
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ $t('misc.more') }}
                  </v-btn>
                </template>
                <v-card color="secondary">
                  <v-btn
                    absolute
                    top
                    right
                    icon
                    color="tertiary"
                    title="Close project page"
                    @click="closeDialog(index)"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-container>
                    <h1 class="pt-4 pb-2">{{ item.title}}</h1>
                    <v-img
                      alt="Image of website, from earlier projects"
                      max-height="600px"
                      contain
                      :src="item.imageCompressed"
                      :lazy-src="item.imageCompressed"
                    ></v-img>
                    <v-card-text>
                      <v-row justify="center">
                        <v-col
                          cols="12"
                          sm="12"
                          md="10"
                          lg="8"
                          xl="8"
                        >
                          <p class="text--primary">
                            {{item.description}}
                          </p>
                          <v-btn
                            color="accent"
                            text
                            rel="noopener"
                            target="_blank"
                            :href="item.link"
                          >{{ $t('misc.visit') }}
                            <v-icon>mdi-chevron-right</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-container>
                </v-card>
              </v-dialog>
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
  data() {
    return {
      dialog: {},
    }
  },

  methods: {
    closeDialog(index) {
      this.dialog["dialog_" + index] = false;
    },

  }
};
</script>