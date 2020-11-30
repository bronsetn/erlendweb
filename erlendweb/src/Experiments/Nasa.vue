<template>
  <v-card dark v-if="spaceData.url">
    <v-container>
      <v-img
        v-if="spaceData.url"
        :lazy="spaceData.url"
        :src="spaceData.hdurl"
        aspect-ratio="1.5"
        contain
      >
        <v-card-title>{{ spaceData.title }}</v-card-title>
        <v-card-subtitle>{{ spaceData.date }}</v-card-subtitle>
      </v-img>
      <v-img v-else src="https://picsum.photos/500/500?blur=1">
        <v-card-title>{{ spaceData.title }}</v-card-title>
      </v-img>
      <v-card-text class="text-justify body-1 font-weight-light">{{
        spaceData.explanation
      }}</v-card-text>
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
            Her har jeg brukt en av Nasa sine offentlig APIer som publiserer et
            nytt rom-bilde pluss informasjon hver dag.
          </p>
          <p>
            En liste over alle bildene publisert siden 2015 er å finne her:
            <a href="https://apod.nasa.gov/apod/archivepix.html" target="_blank"
              >https://apod.nasa.gov/apod/archivepix.html</a
            >
          </p>
          <p>
            For informasjon om å ta i bruk APIen har jeg hovedsaklig brukt denne
            veiledningen:
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
</template>


<script>
import axios from "axios";

export default {
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
    var d = new Date();
    var today = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();

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