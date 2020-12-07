<template>
  <v-col xs="12" sm="12" md="6" lg="6" xl="6">
    <v-card v-if="spaceData" color="primary">
      <v-container>
        <v-card-title>Dagens bilde fra Nasa:</v-card-title>
        <v-parallax
          v-if="spaceData.media_type == 'image'"
          :lazy="spaceData.url"
          :src="spaceData.url"
          :href="spaceData.url"
          aspect-ratio="1.5"
          contain
          height="400"
          class="white--text align-end"
        >
        </v-parallax>
        <div v-else class="video-container">
          <iframe :src="spaceData.url"> </iframe>
        </div>
        <v-card-title>{{ spaceData.title }}</v-card-title>

        <v-card-text
          ><v-clamp autoresize :max-lines="2" class="body-1 font-weight-light"
            >{{ spaceData.explanation
            }}<template #after="{ toggle, expanded, clamped }">
              <a
                href="#"
                v-if="expanded || clamped"
                class="ml-1 badge badge-light"
                @click.prevent="toggle"
                >{{ expanded ? "Less" : "More" }}</a
              >
            </template>
          </v-clamp></v-card-text
        >
      </v-container>

      <v-card-actions>
        <v-btn color="orange lighten-2" text @click="show = !show">
          Om dette
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <p>
              Her har jeg brukt en av Nasa sine offentlig APIer som publiserer
              et nytt rom-bilde pluss informasjon hver dag.
            </p>
            <p>
              En liste over alle bildene publisert siden 2015 er å finne her:
              <a
                href="https://apod.nasa.gov/apod/archivepix.html"
                target="_blank"
                >https://apod.nasa.gov/apod/archivepix.html</a
              >
            </p>
            <p>
              For informasjon om å ta i bruk APIen har jeg hovedsaklig brukt
              denne veiledningen:
              <a
                href="https://blog.jakelee.co.uk/an-introduction-to-the-nasa-apod-api/"
                target="_blank"
                >https://blog.jakelee.co.uk/an-introduction-to-the-nasa-apod-api/</a
              >
            </p>
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
    };
  },

  mounted() {
    // Get nasa's space image of the day, because we can
    // https://blog.jakelee.co.uk/an-introduction-to-the-nasa-apod-api/
    // https://api.nasa.gov/

    // Get year, month and date
    let d = new Date();
    let today = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();

    const apiData = {
      url: "https://api.nasa.gov/planetary/apod",
      // Personal key pls no fuckery
      key: "rDwFcjwwdmxeqnq0aOFJmIRwzUbd0PgSSokdcf5v",
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
          console.log("Space data:");
          console.log(Response);

          this.spaceData = Response.data;
          this.spaceImg == true;
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
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