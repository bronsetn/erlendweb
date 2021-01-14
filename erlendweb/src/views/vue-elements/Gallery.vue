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
    >
      <v-card-title>Galleri layout <v-spacer></v-spacer>
        <v-icon color="tertiary">mdi-vuetify</v-icon>
      </v-card-title>
      <v-parallax
        :src="images[1].link"
        height="400"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      >
        <v-overlay
          value="true"
          absolute
          opacity="0.8"
        >
          <v-row
            justify="center"
            align="center"
          >
            <v-btn
              x-large
              icon
              @click="showGallery = !showGallery"
            >
              <v-icon
                class="display-2"
                color="white"
              >
                {{ showGallery ? "mdi-chevron-up" : "mdi-plus" }}
              </v-icon>
            </v-btn>
          </v-row>
        </v-overlay>
      </v-parallax>
    </v-card>

    <!-- Image gallery: -->
    <v-expand-transition>
      <div v-show="showGallery">
        <v-row class="justify-center">
          <v-col
            cols="6"
            v-for="(item, index) in images"
            :item="item"
            :key="index"
          >
            <v-dialog
              v-model="imageDialog['dialog_' + index]"
              max-height="80vh"
              max-width="80vw"
            >
              <template v-slot:activator="{ on: { click } }">
                <!-- Image gallery box -->
                <v-card
                  elevation="5"
                  color="secondary"
                  @click="click"
                >
                  <v-img
                    @click="openImage(index); imageDialog[index] = true"
                    class="pointer"
                    height="300"
                    :src="item.link"
                  ><template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template></v-img>
                  <v-card-title class="pb-0">
                    <p class="normal serif">{{ item.title }}</p>
                  </v-card-title>
                </v-card>
              </template>

              <!-- Image pop-up -->
              <v-card color="primary">
                <v-img
                  max-height="80vh"
                  max-width="80vw"
                  contain
                  :src="images[activeImage].link"
                >
                  <v-btn
                    small
                    absolute
                    top
                    right
                    fab
                    color="primary"
                    class="mt-8"
                    @click="closeDialog(index)"
                  >
                    <v-icon color="tertiary">mdi-close</v-icon>
                  </v-btn>

                </v-img>
                <v-card-actions>
                  <v-btn
                    small
                    icon
                    @click="previousPhoto()"
                  >
                    <v-icon color="tertiary">mdi-arrow-left</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    small
                    fab
                    @click="nextPhoto()"
                  >
                    <v-icon color="tertiary">mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </div>
    </v-expand-transition>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      showGallery: false,

      activeImage: 0,

      imageDialog: {},

      images: [
        {
          link: "https://picsum.photos/700/700",
          title: "Bildetittel",
        },
        {
          link: "https://picsum.photos/500/500",
          title: "Heisann",
        },
        {
          link: "https://picsum.photos/800/800",
          title: "Hoisann",
        },
        {
          link: "https://picsum.photos/600/600",
          title: "Heysann",
        },
      ],
    };
  },

  // Codepen used for example: https://codepen.io/CSWApps/embed/YoyZJZ
  methods: {
    openImage(index) {
      this.activeImage = index;
    },

    nextPhoto() {
      this.activeImage = (this.activeImage + 1 < this.images.length ? this.activeImage + 1 : 0)
    },

    previousPhoto() {
      this.activeImage = (this.activeImage - 1 >= 0 ? this.activeImage - 1 : this.images.length - 1)
    },

    closeDialog(index) {
      this.imageDialog["dialog_" + index] = false;
    },

  },
};
</script>