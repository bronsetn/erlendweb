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

              <!-- DIALOG PC screen -->
              <v-dialog
                v-model="dialog['dialog_' + index]"
                transition="slide-x-transition"
                v-if="!$vuetify.breakpoint.mobile"
              >
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
                <v-card
                  color="secondary"
                  class="pb-8"
                >
                  <div
                    class="skewedContainer"
                    style="padding: 100px 0 0 0"
                  >
                    <div class="content">
                      <v-btn
                        class="mml-4"
                        absolute
                        top
                        left
                        icon
                        color="tertiary"
                        title="Go back"
                        @click="closeDialog(index)"
                      >
                        <v-icon large>mdi-arrow-left-bold</v-icon>
                      </v-btn>
                      <v-row
                        justify="center"
                        class="pb-8"
                        no-gutters
                      >
                        <v-col cols="12">
                          <h1 class="pa-4">{{ item.title}}</h1>
                        </v-col>
                        <a
                          rel="noopener"
                          target="_blank"
                          :href="item.link"
                        >{{ item.link }}
                        </a>
                      </v-row>
                      <v-container>
                        <v-img
                          max-height="500px"
                          contain
                          :alt="item.alt"
                          :src="item.imageCompressed"
                          :lazy-src="item.imageCompressed"
                        ></v-img>
                      </v-container>
                    </div>
                  </div>
                  <v-card-text>
                    <v-row justify="center">
                      <v-col
                        cols="12"
                        sm="12"
                        md="10"
                        lg="6"
                        xl="6"
                      >
                        <p class="text--primary">{{ item.description }}</p>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-container>
                    <v-img
                      max-height="500px"
                      contain
                      :alt="item.alt"
                      :src="item.imageContent"
                      :lazy-src="item.imageContent"
                    ></v-img>
                  </v-container>
                  <v-card-text>
                    <v-row justify="center">
                      <v-col
                        cols="12"
                        sm="12"
                        md="10"
                        lg="6"
                        xl="6"
                      >
                        <p class="text--primary pt-8 pb-4">{{ item.content }}</p>
                        <v-btn
                          color="accent"
                          text
                          rel="noopener"
                          target="_blank"
                          :href="item.link"
                        >{{ $t('misc.visit') }}
                          <v-icon
                            color="accent"
                            class="pb-1 pl-1"
                            small
                          >mdi-launch</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-dialog>

              <!-- DIALOG TABLET/PHONE -->
              <v-dialog
                v-model="dialog['dialog_' + index]"
                transition="slide-x-transition"
                fullscreen
                v-else
              >
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
                <v-card
                  color="secondary"
                  class="pb-16"
                >

                  <div
                    class="skewedContainer"
                    style="padding: 25px 0 0 0"
                  >
                    <div class="content">
                      <v-btn
                        absolute
                        top
                        left
                        icon
                        color="tertiary"
                        title="Go back"
                        @click="closeDialog(index)"
                      >
                        <v-icon large>mdi-arrow-left-bold</v-icon>
                      </v-btn>
                      <v-row
                        justify="center"
                        no-gutters
                        class="pt-16 pb-8"
                      >
                        <v-col cols="12">
                          <h1 class="pa-4">{{ item.title}}</h1>
                        </v-col>
                        <a
                          rel="noopener"
                          target="_blank"
                          :href="item.link"
                        >{{ item.link }}
                        </a>
                      </v-row>
                      <v-container>
                        <v-img
                          contain
                          :alt="item.alt"
                          :src="item.imageCompressed"
                          :lazy-src="item.imageCompressed"
                        ></v-img>
                      </v-container>
                    </div>
                  </div>

                  <v-card-text>
                    <v-row justify="center">
                      <v-col
                        cols="12"
                        sm="12"
                        md="10"
                        lg="6"
                        xl="6"
                      >
                        <p class="text--primary">{{ item.description }}</p>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-container>
                    <v-img
                      contain
                      :alt="item.alt"
                      :src="item.imageContent"
                      :lazy-src="item.imageContent"
                    ></v-img>
                  </v-container>
                  <v-card-text>
                    <v-row justify="center">
                      <v-col
                        cols="12"
                        sm="12"
                        md="10"
                        lg="6"
                        xl="6"
                      >
                        <p class="text--primary pt-8 pb-4">{{ item.content }}</p>
                        <v-btn
                          color="accent"
                          text
                          rel="noopener"
                          target="_blank"
                          :href="item.link"
                        >{{ $t('misc.visit') }}
                          <v-icon
                            color="accent"
                            class="pb-1 pl-1"
                            small
                          >mdi-launch</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
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

<style scoped>

.skewedContainer {
  background: var(--v-primary-base);
  transform: skew(0deg, 4deg);
  transform-origin: top right;
}
/* Skew back the content */
.content {
    transform: skew(0deg, -4deg);
}

</style>