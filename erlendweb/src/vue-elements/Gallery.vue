<template>
  <v-col xs="12" sm="12" md="6" lg="6" xl="6">
    <v-card color="secondary" elevation="5">
      <v-card-title
        >Galleri layout <v-spacer></v-spacer
        ><v-icon color="tertiary">mdi-vuetify</v-icon></v-card-title
      >
      <v-parallax
        :src="images[1].link"
        height="400"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      >
        <v-overlay value="true" absolute opacity="0.8">
          <v-row justify="center" align="center">
            <v-btn x-large icon @click="show = !show"
              ><v-icon class="display-2" color="white">
                {{ show ? "mdi-chevron-up" : "mdi-plus" }}
              </v-icon>
            </v-btn>
          </v-row>
        </v-overlay>
      </v-parallax>
    </v-card>

    <!-- Image gallery: -->
    <v-expand-transition>
      <div v-show="show">
        <v-row class="d-flex justify-center">
          <v-col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            v-for="(item, index) in images"
            :item="item"
            :key="index"
          >
            <v-dialog
              v-model="dialog['dialog_' + index]"
              max-height="80vh"
              max-width="80vw"
            >
              <template v-slot:activator="{ on: { click } }">
                <!-- Image box -->
                <v-card elevation="5" color="secondary" @click="click">
                  <v-img
                    @click="dialog[index] = true"
                    class="pointer"
                    height="300"
                    :src="item.link"
                    :lazy="item.link"
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
                      </v-row> </template
                  ></v-img>
                  <v-card-title
                    ><h3 class="font-weight-regular">{{ item.title }}</h3>
                  </v-card-title>
                  <v-card-text>
                    <p class="light text-left">{{ item.description }}</p>
                  </v-card-text>
                </v-card>
              </template>

              <!-- Image pop-up -->
              <v-card color="primary">
                <v-img
                  max-height="80vh"
                  max-width="80vw"
                  contain
                  :src="item.link"
                  :lazy="item.link"
                >
                  <v-btn
                    small
                    absolute
                    top
                    right
                    fab
                    color="primary"
                    class="mt-8 pr-0"
                    @click="closeDialog(index)"
                    ><v-icon color="tertiary">mdi-close</v-icon>
                  </v-btn>
                </v-img>
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
      show: false,

      dialog: {},

      images: [
        {
          link: "https://picsum.photos/700/700",
          title: "Bildetittel",
          description: "Bilde beskrivelse for bildet",
        },
        {
          link: "https://picsum.photos/500/500",
          title: "Bildetittel",
          description: "Bilde beskrivelse for bildet",
        },
        {
          link: "https://picsum.photos/800/800",
          title: "Bildetittel",
          description: "Bilde beskrivelse for bildet",
        },
        {
          link: "https://picsum.photos/600/600",
          title: "Bildetittel",
          description: "Bilde beskrivelse for bildet",
        },
      ],
    };
  },
  methods: {
    closeDialog(index) {
      this.dialog["dialog_" + index] = false;
    },
  },
};
</script>