<template>
  <v-col
    cols="12"
    sm="12"
    md="6"
    lg="6"
    xl="4"
    v-if="spaceData"
  >
    <v-card
      color="secondary"
      elevation="5"
    >
      <v-card-title>{{ $t('other.nasa') }}<v-spacer></v-spacer>
        <v-icon color="tertiary">mdi-rocket-outline</v-icon>
      </v-card-title>

      <v-img
        v-if="spaceData.media_type == 'image'"
        :lazy-src="spaceData.url"
        :src="spaceData.url"
        height="305"
      >
      </v-img>
      <div
        v-else
        class="video-container"
      >
        <iframe :src="spaceData.url"> </iframe>
      </div>
      <p class="light pt-2"><a
          :href="spaceData.url"
          rel="noopener"
          target="_blank"
          class="animatedLink"
        >{{ spaceData.url }}</a></p>

      <v-card-title><span class="text-truncate">{{ spaceData.title }}</span></v-card-title>

      <v-card-text class="pb-2 pt-0">
        <p class="normal pa-0 ma-0">
          <v-clamp
            autoresize
            :max-lines="2"
            class="text-justify"
          >
            {{ spaceData.explanation }}
            <template #after="{ toggle, expanded, clamped }">
              <a
                href="#"
                v-if="expanded || clamped"
                class="ml-1 badge badge-light"
                @click.prevent="toggle"
              >{{ expanded ? $t('misc.less'): $t('misc.more') }}</a>
            </template>
          </v-clamp>
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="accent"
          text
          @click="show = !show"
        > {{ $t('misc.about') }}</v-btn>
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            <p>{{ $t('other.nasaDescription') }}</p>
            <p v-html="$t('other.nasaSources')"></p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>


<script>
import axios from "axios";
import VClamp from "vue-clamp";

export default {
  components: {
    VClamp,
  },

  data() {
    return {
      show: false,

      spaceData: null,
      spaceImg: false,

      date: "",
    };
  },

  mounted() {
    this.getSpaceData();
  },

  methods: {
    getSpaceData() {
      // Get nasa's space image of the day, because we can
      // https://blog.jakelee.co.uk/an-introduction-to-the-nasa-apod-api/
      // https://api.nasa.gov/

      // Get year, month and date
      let d = new Date();
      let today = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

      const apiData = {
        url: "https://api.nasa.gov/planetary/apod",
        // Personal key
        key: "Kc1D0rF8COldenZrRdiV0VESLYJUkhvAIPxh63ke",
        // date: "2020-10-30",
        date: today,
      };

      const { url, key, date } = apiData;
      const apiUrl = `${url}?api_key=${key}&date=${date}`;

      axios
        .get(apiUrl)
        .then((Response) => {
          if (Response.data.error_message) {
            console.log("error");
          } else {
            console.log("Space data for: ", date);
            console.log(Response);

            this.spaceData = Response.data;
            this.spaceImg == true;
            this.date = date;
          }
        })
        .catch((error) => {
          console.log(error.message);
          // console.log(apiUrl);
          // console.log(date)
        });
    },
  }
};
</script>

<style scoped>
/* For moreresponsive iframe */
/* Ref: https://codepen.io/virtualmason/pen/BjPEaO */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin: 0;
}
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>