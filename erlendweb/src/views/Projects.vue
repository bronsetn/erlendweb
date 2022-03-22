<template>

  <div>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">I</div>
        <h1>{{ $t('header.projects') }}</h1>
      </v-container>

      <!-- Main project cards -->
      <v-row
        class="d-flex justify-center"
        no-gutters
      >
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="10"
          xl="10"
        >
          <v-row class="d-flex justify-center">
            <v-col
              v-for="(item, index) in projects"
              :item="item"
              :key="index"
              cols="12"
              sm="6"
              md="6"
              lg="3"
            >
              <v-card
                @click="openDialog(index)"
                :ripple="{ center: true }"
                elevation="5"
                color="secondary"
                height="500"
                max-width="500"
              >
                <v-container>
                  <v-img
                    height="300"
                    :alt="item.alt"
                    contain
                    :src="item.imageThumb"
                    :lazy-src="item.imageThumb"
                  ></v-img>
                </v-container>

                <v-card-title class="ma-0 pt-0 pb-0">
                  <h2 class="text-truncate">{{ item.title }}</h2>
                </v-card-title>

                <v-card-text>
                  <p class="subtitle-2 text-left">
                    {{ item.date }}
                  </p>
                  <p class="text-left text--primary description">
                    {{item.description}}
                  </p>
                  <p class="subtitle-2 text-left">
                    {{ $t('misc.clickForMore') }}
                  </p>
                </v-card-text>

              </v-card>
            </v-col>
          </v-row>

        </v-col>
      </v-row>

      <!-- Dialog on desktop -->
      <v-dialog
        v-if="!$vuetify.breakpoint.mobile"
        v-model="dialog"
        transition="slide-x-transition"
        max-width="80vw"
      >
        <v-card color="secondary">
          <div class="skewedContainer">
            <div class="content">
              <v-row
                justify="center"
                no-gutters
              >
                <v-col cols="12">
                  <h1 class="font-weight-regular">{{ projects[activeProject].title}}</h1>
                  <h2 class="font-weight-thinr">{{ projects[activeProject].subtitle}}</h2>
                  <p class="text--secondary body-2 pt-2 text-center">
                    {{ projects[activeProject].date }}
                  </p>
                </v-col>
              </v-row>

              <v-container>
                <v-img
                  max-height="500px"
                  contain
                  :alt="projects[activeProject].alt"
                  :src="projects[activeProject].imageLarge"
                  :lazy-src="projects[activeProject].imageLarge"
                ></v-img>
              </v-container>
            </div>
          </div>

          <v-card-text class="text-content text-center">

            <p><a
                rel="noopener"
                target="_blank"
                class="animatedLink"
                :href="projects[activeProject].link"
              >{{ projects[activeProject].link }}
              </a></p>

            <p class="text--primary">{{ projects[activeProject].description }}</p>
            <p class="text--primary">{{ projects[activeProject].content }}</p>

            <v-row justify="center">
              <div
                v-for="(item, index) in projects[activeProject].stack"
                :item="item"
                :key="index"
                class="pr-2 pl-2"
              >
                <v-icon
                  disabled
                  large
                  :title="projects[activeProject].stack[index].name"
                >{{ projects[activeProject].stack[index].icon }}</v-icon>
                <p class="text--primary pt-2">{{ projects[activeProject].stack[index].name }}</p>
              </div>
            </v-row>

          </v-card-text>

          <v-btn
            absolute
            top
            right
            icon
            color="tertiary"
            title="Close"
            @click="dialog = false"
          >
            <v-icon large>mdi-close</v-icon>
          </v-btn>

          <v-btn
            absolute
            bottom
            left
            text
            title="Previous"
            @click="previousProject()"
          >
            <v-icon>mdi-chevron-left </v-icon>{{ $t('misc.previous') }}
          </v-btn>

          <v-btn
            absolute
            bottom
            right
            text
            title="Next"
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
        <v-card color="secondary">
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
                  <h1>{{  projects[activeProject].title }}</h1>
                  <h3>{{ projects[activeProject].subtitle}}</h3>
                  <p class="text--secondary body-2 text-center">
                    {{ projects[activeProject].date }}
                  </p>
                </v-col>
              </v-row>

              <v-container>
                <v-img
                  contain
                  :alt="projects[activeProject].alt"
                  :src="projects[activeProject].imageLarge"
                  :lazy-src="projects[activeProject].imageLarge"
                ></v-img>
              </v-container>
            </div>
          </div>

          <v-card-text class="text-content text-center">

            <p><a
                rel="noopener"
                target="_blank"
                class="animatedLink"
                :href="projects[activeProject].link"
              >{{ projects[activeProject].link }}
              </a></p>

            <p class="text--primary">{{ projects[activeProject].description }}</p>
            <p class="text--primary">{{ projects[activeProject].content }}</p>

            <v-row justify="center">
              <div
                v-for="(item, index) in projects[activeProject].stack"
                :item="item"
                :key="index"
                class="pr-2 pl-2"
              >
                <v-icon
                  disabled
                  medium
                >{{ projects[activeProject].stack[index].icon }}</v-icon>
                <p class="text--primary pt-2">{{ projects[activeProject].stack[index].name }}</p>
              </div>
            </v-row>

          </v-card-text>

          <v-btn
            fixed
            top
            right
            icon
            title="Close"
            @click="dialog = false"
          >
            <v-icon large>mdi-close</v-icon>
          </v-btn>

          <v-btn
            absolute
            bottom
            left
            text
            title="Previous"
            @click="previousProject()"
          >
            <v-icon>mdi-chevron-left </v-icon>{{ $t('misc.previous') }}
          </v-btn>

          <v-btn
            absolute
            bottom
            right
            text
            title="Next"
            @click="nextProject()"
          >
            {{ $t('misc.next') }}<v-icon>mdi-chevron-right</v-icon>
          </v-btn>

        </v-card>
      </v-dialog>

    </v-container>
  </div>
</template>

<script>

export default {
  components: {
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
      this.activeProject = (this.activeProject + 1 < this.projects.length ? this.activeProject + 1 : 0);

      // Scrolls to top of v-dialog
      document.getElementsByClassName('v-dialog--active')[0].scrollTop = 0;
    },

    previousProject() {
      this.activeProject = (this.activeProject - 1 >= 0 ? this.activeProject - 1 : this.projects.length - 1)
      // Scrolls to top of v-dialog
      document.getElementsByClassName('v-dialog--active')[0].scrollTop = 0;
    },
  }
};
</script>

<style scoped>
.text-content {
  margin: 0 auto;
  max-width: 50em;
  padding: 20px !important;
  padding-bottom: 50px !important;
}

.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  /* max-height = line-height (1.2) * lines max number (3) */
  line-height: 1.4em;
  max-height: 2.8em;

  /* fix problem when last visible word doesn't adjoin right side  */
  text-align: justify;
}

.skewedContainer {
  background: var(--v-background-base);
  transform: skew(0deg, 2deg);
  transform-origin: top right;
  padding: 100px 0 0 0;
}
/* Skew back the content */
.content {
  transform: skew(0deg, -2deg);
}
</style>