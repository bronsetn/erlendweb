<template>
  <body>
    <v-card dark v-if="weather">
      <v-container>
        <v-card-title> Forecast</v-card-title>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">
              {{ city }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ formatedDate }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col cols="5"
              ><p class="display-3">{{ temperature }} &deg;C</p>
            </v-col>
            <v-col cols="5">
              <v-img :src="wicon"></v-img>
            </v-col>
          </v-row>
          <p class="text-uppercase">
            {{ weather.list[0].weather[0].description }}
          </p>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weather-windy</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >{{ weather.list[0].wind.speed }} m/s</v-list-item-subtitle
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-waves</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >Luftfuktighet:
            {{ weather.list[0].main.humidity }}%</v-list-item-subtitle
          >
        </v-list-item>

        <v-list-item v-if="weather.list[0].rain">
          <v-list-item-icon>
            <v-icon>mdi-water</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >Nedbørsmengde:
            {{ weather.list[0].rain["3h"] }} %</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item v-if="weather.list[0].snow">
          <v-list-item-icon>
            <v-icon>mdi-snowflake</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >Mengde snø:
            {{ weather.list[0].snow["3h"] }} %</v-list-item-subtitle
          >
        </v-list-item>
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
            <p>openweathermap</p>
            <a href="https://openweathermap.org/api" target="_blank"
              >https://openweathermap.org/api</a
            >
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    <v-card dark v-else>
      <v-container>
        <v-card-title> Forecast </v-card-title>
        <v-card-text>
          <p class="text-justify">
            This component uses your browser's geoloaction functionality. Enable
            loaction acces it to get forecast for your position.
          </p>

          <p class="text-justify">
            For many browsers the function does not work when called after the
            page has loader. Therefor the user needs to enable location acces
            mannualy.
          </p>
          <p>
            For chrome you can enable it by following these instructions:
            <a
              href="https://support.google.com/chrome/answer/142065?hl=en"
              target="_blank"
              >https://support.google.com/chrome/answer/142065?hl=en</a
            >
          </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn light @click="getLocation()">Get forecast</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </body>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show: false,

      weather: null,
      temperature: null,
      wicon: false,

      formatedDate: null,

      city: null,
      geolocation: null,
    };
  },

  mounted() {
    this.getLocation();
  },

  methods: {
    // Get user longitude and latitude from browser geodata on startup
    // https://www.youtube.com/watch?v=_pRSfB17_7Y
    getLocation() {
      // Get year, month and date
      let date = new Date();
      let format = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      this.formatedDate = date.toLocaleTimeString("metric", format);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            //   console.log("Dine koordinater:");
            //   console.log(position.coords.latitude, position.coords.longitude);

            this.getCity(position.coords.latitude, position.coords.longitude);

            this.geolocation = "true";
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Your browser does not support geolocation API ");
      }
    },

    // Get city from the coordinates
    // Format https://nominatim.openstreetmap.org/reverse?format=xml&lat=43.8338&lon=4.3596
    getCity(lat, long) {
      axios
        .get(
          "https://nominatim.openstreetmap.org/reverse?format=xml" +
            "&lat=" +
            lat +
            "&lon=" +
            long +
            "&format=geocodejson"
        )
        .then((Response) => {
          if (Response.data.error_message) {
            console.log("error");
          } else {
            // console.log("By/Plass:");
            // console.log(Response.data);
            this.city = Response.data.features[0].properties.geocoding.city;

            this.getWeather(
              Response.data.features[0].properties.geocoding.city
            );
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    // Create weather from latest forecast
    /*Tutorialish: https://www.youtube.com/watch?v=tFVdxGgJPCo&list=LL70GBoeL8ASdIRG0A89Rpsg&index=2&t=4s*/
    getWeather(city) {
      /*Format http://api.openweathermap.org/data/2.5/forecast?q=steinkjer&units=metric&lang=no&appid={KEY}*/
      const apiData = {
        url: "https://api.openweathermap.org/data/2.5/",
        type: "forecast",
        location: city,
        language: "no",
        key: "b5b8e021d8316b270eb7d264dab861c6",
      };

      const { url, type, location, language, key } = apiData;
      const apiUrl = `${url}${type}?q=${location}&units=metric&lang=${language}&appid=${key}`;

      axios.get(apiUrl).then((Response) => {
        if (Response.data.error_message) {
          console.log("error");
        } else {
          console.log("Værmelding");
          console.log(Response);
          this.weather = Response.data;

          this.wicon =
            "http://openweathermap.org/img/wn/" +
            Response.data.list[0].weather[0].icon +
            "@2x.png";

          this.temperature = new Intl.NumberFormat("en-IN", {
            maximumSignificantDigits: 1,
          }).format(Response.data.list[0].main.temp);
        }
      });
    },
  },
};
</script>

<style>
</style>