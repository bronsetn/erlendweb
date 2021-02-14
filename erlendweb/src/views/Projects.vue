<template>

  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">I</div>
        <h1>{{ $t('header.projects') }}</h1>
      </v-container>

      <v-row
        class="d-flex justify-center"
        v-if="projects"
      >
        <v-col
          v-for="(item, index) in projects"
          :item="item"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="3"
        >
          <v-card
            @click="openDialog(index)"
            :ripple="{ center: true }"
            elevation="5"
            color="secondary"
            height="520"
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
                {{ item.title }}
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
              <p class="text-left"> {{ $t('misc.clickForMore') }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- DIALOG PC screen -->
      <v-dialog
        v-if="!$vuetify.breakpoint.mobile"
        v-model="dialog"
        transition="slide-x-transition"
      >
        <v-btn
          class="ml-8 mt-16"
          style="z-index: 1;"
          fixed
          top
          left
          icon
          color="tertiary"
          title="Go back"
          @click="dialog = false"
        >
          <v-icon large>mdi-arrow-left</v-icon>
        </v-btn>
        <v-card
          color="secondary"
          class="pb-8"
        >
          <div
            class="skewedContainer"
            style="padding: 100px 0 0 0"
          >
            <div class="content">
              <v-row
                justify="center"
                no-gutters
              >
                <v-col cols="12">
                  <h1 class="pt-4 pb-2">{{ projects[activeProject].title}}</h1>
                  <p><a
                      rel="noopener"
                      target="_blank"
                      class="animatedLink"
                      :href="projects[activeProject].link"
                    >{{ projects[activeProject].link }}
                    </a></p>
                  <p class="text--secondary">
                    {{ projects[activeProject].date }}
                  </p>
                </v-col>
              </v-row>
              <v-container>
                <v-img
                  max-height="500px"
                  contain
                  :alt="projects[activeProject].alt"
                  :src="projects[activeProject].imageCompressed"
                  :lazy-src="projects[activeProject].imageCompressed"
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
                <p class="text--primary">{{ projects[activeProject].description }}</p>
              </v-col>
            </v-row>
          </v-card-text>
          <v-container>
            <v-img
              max-height="500px"
              contain
              :alt="projects[activeProject].alt"
              :src="projects[activeProject].imageContent"
              :lazy-src="projects[activeProject].imageContent"
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
                <p class="text--primary pt-8 pb-4">{{ projects[activeProject].content }}</p>
                <v-btn
                  color="accent"
                  text
                  rel="noopener"
                  target="_blank"
                  :href="projects[activeProject].link"
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
          <v-btn
            class="ml-8 mb-12"
            fixed
            left
            bottom
            text
            @click="previousProject()"
          >
            <v-icon>mdi-chevron-left </v-icon>{{ $t('misc.previous') }}
          </v-btn>
          <v-btn
            class="mr-8 mb-12"
            fixed
            right
            bottom
            text
            @click="nextProject()"
          >
            {{ $t('misc.next') }}<v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card>
      </v-dialog>

      <!-- DIALOG TABLET/PHONE -->
      <v-dialog
        v-model="dialog"
        transition="slide-x-transition"
        fullscreen
        v-else
      >
        <v-btn
          class="mt-2"
          fixed
          top
          left
          fab
          color="tertiary"
          title="Go back"
          @click="dialog = false"
          small
        >
          <v-icon
            color="primary"
            large
          >mdi-arrow-left</v-icon>
        </v-btn>
        <v-card
          color="secondary"
          class="pb-16"
        >
          <div
            class="skewedContainer"
            style="padding: 25px 0 0 0"
          >
            <div class="content">

              <v-row
                justify="center"
                no-gutters
                class="pt-16"
              >
                <v-col cols="12">
                  <h1 class="pt-4 pb-2">{{  projects[activeProject].title }}</h1>
                  <p><a
                      rel="noopener"
                      target="_blank"
                      class="animatedLink"
                      :href="projects[activeProject].link"
                    >{{ projects[activeProject].link }}
                    </a></p>
                  <p class="text--secondary">
                    {{ projects[activeProject].date }}
                  </p>
                </v-col>
              </v-row>
              <v-container>
                <v-img
                  contain
                  :alt="projects[activeProject].alt"
                  :src="projects[activeProject].imageCompressed"
                  :lazy-src="projects[activeProject].imageCompressed"
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
                <p class="text--primary">{{ projects[activeProject].description }}</p>
              </v-col>
            </v-row>
          </v-card-text>
          <v-container>
            <v-img
              contain
              :alt="projects[activeProject].alt"
              :src="projects[activeProject].imageContent"
              :lazy-src="projects[activeProject].imageContent"
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
                <p class="text--primary pt-8 pb-4">{{ projects[activeProject].content }}</p>
                <v-btn
                  color="accent"
                  text
                  rel="noopener"
                  target="_blank"
                  :href="projects[activeProject].link"
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
          <v-card-actions>
            <v-row no-gutters>
              <v-btn
                text
                @click="previousProject()"
              >
                <v-icon>mdi-chevron-left </v-icon>{{ $t('misc.previous') }}
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                text
                @click="nextProject()"
              >
                {{ $t('misc.next') }}<v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
      dialog: false,
      projects: this.$t('projects'),
      activeProject: '1',
    }
  },

  methods: {
    openDialog(index) {
      this.activeProject = index;
      this.dialog = true;
    },

    nextProject() {
      this.activeProject = (this.activeProject + 1 < this.projects.length ? this.activeProject + 1 : 0)
    },

    previousProject() {
      this.activeProject = (this.activeProject - 1 >= 0 ? this.activeProject - 1 : this.projects.length - 1)
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