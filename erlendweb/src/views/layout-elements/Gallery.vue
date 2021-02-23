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
      style="overflow:hidden;"
    >
      <v-card-title>{{ $t('other.gallery') }}<v-spacer></v-spacer>
        <v-icon color="tertiary">mdi-image-multiple</v-icon>
      </v-card-title>
      <v-parallax
        :src="images[activeImage].link"
        height="350"
      >
        <v-overlay
          value="true"
          opacity="0.5"
          absolute
        >
          <v-row
            justify="center"
            align="center"
          >
            <v-btn
              outlined
              @click="showGallery = !showGallery"
            >
              <v-icon
                large
                color="white"
              >
                {{ showGallery ? "mdi-chevron-up" : "mdi-plus" }}
              </v-icon>
            </v-btn>
          </v-row>
        </v-overlay>
      </v-parallax>
    </v-card>

    <!-- Image gallery -->
    <v-expand-transition>
      <v-row v-show="showGallery">
        <v-col
          cols="6"
          v-for="(item, index) in images"
          :item="item"
          :key="index"
        >
          <v-card
            elevation="5"
            color="secondary"
            @click="openImage(index); imageDialog = true"
          >
            <v-img
              height="250"
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
              </template>
            </v-img>
          </v-card>
        </v-col>

        <v-dialog
          v-model="imageDialog"
          height="80vh"
          width="80vw"
        >
          <v-card color="primary">
            <v-img
              class="dialogImage"
              max-height="80vh"
              contain
              :src="images[activeImage].link"
            >
              <v-row
                class="fill-height imageOverlay"
                align="center"
                justify="center"
              >
                <div class="image-text">
                  {{ images[activeImage].title }}
                </div>
                <v-btn
                  absolute
                  top
                  right
                  icon
                  @click=" imageDialog = false"
                >
                  <v-icon color="tertiary">mdi-close</v-icon>
                </v-btn>
                <v-btn
                  absolute
                  left
                  icon
                  @click="previousPhoto()"
                >
                  <v-icon
                    color="tertiary"
                    large
                  >mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  absolute
                  right
                  icon
                  @click="nextPhoto()"
                >
                  <v-icon
                    color="tertiary"
                    large
                  >mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </v-img>
          </v-card>
        </v-dialog>

      </v-row>
    </v-expand-transition>
  </v-col>
</template>

<style scoped>

.imageOverlay {
  background: linear-gradient(0deg, #00000080 10%, #ffffff00 100%) !important;
}

.dialogImage:hover .image-text {
  opacity: 100%;
}

.image-text {
  opacity: 0%;
  transition: 0.5s ease-in-out;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.5em;
  color: #fff;
  z-index: 11;
  position: absolute;
  bottom: 25px;
}

</style>

<script>
export default {

  data() {
    return {
      showGallery: false,

      activeImage: 0,

      imageDialog: false,

      images: [
        {
          link: "https://picsum.photos/700/700",
          title: "Lorem ipsum dolor sit amet",
        },
        {
          link: "https://picsum.photos/500/500",
          title: "Consectetur adipiscing elit",
        },
        {
          link: "https://picsum.photos/800/800",
          title: "Sed do eiusmod tempor incididunt",
        },
        {
          link: "https://picsum.photos/600/600",
          title: "Lorem ipsum dolor sit amet",
        },
      ],
    };
  },

  // Codepen for funtions: https://codepen.io/CSWApps/embed/YoyZJZ
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