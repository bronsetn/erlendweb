<template>
  <v-col v-if="weather" xs="12" sm="12" md="6" lg="6" xl="6">
    <v-card color="primary"  elevation="5">
      <v-container>
        <v-card-title>API - Dagens værmelding</v-card-title>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">
              {{ city }}
            </v-list-item-title>
            <v-list-item-subtitle class="pt-2">{{
              formatedDate
            }}</v-list-item-subtitle>
            <p class="pt-2 text-capitalize">
              {{ weather.list[0].weather[0].description }}
            </p>
          </v-list-item-content>
        </v-list-item>

        <v-row align="center">
          <v-col></v-col>
          <v-col cols="5"
            ><p class="display-3">{{ temperature }} &deg;C</p>
          </v-col>
          <v-col cols="5">
            <v-img height="100" contain :src="wicon"></v-img>
          </v-col>
          <v-col></v-col>
        </v-row>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weather-windy</v-icon>
          </v-list-item-icon>

          <v-list-item-subtitle
            >Vindhastighet
            {{ weather.list[0].wind.speed }} m/s</v-list-item-subtitle
          >
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item v-if="weather.list[0].rain">
          <v-list-item-icon>
            <v-icon>mdi-weather-pouring</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Regn
            {{ weather.list[0].rain["3h"] }} %</v-list-item-subtitle
          >
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon> <v-icon>mdi-water</v-icon> </v-list-item-icon>
          <v-list-item-subtitle>
            Luftfuktighet
            {{ weather.list[0].main.humidity }}%</v-list-item-subtitle
          >
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item v-if="weather.list[0].snow">
          <v-list-item-icon>
            <v-icon>mdi-snowflake</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Snømengde
            {{ weather.list[0].snow["3h"] }} %</v-list-item-subtitle
          >
        </v-list-item>
      </v-container>

      <v-card-actions>
        <v-btn color="accent" text @click="show = !show">
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
              Denne komponenten tar i bruk nettleserens geolokasjons
              funksjonalitet for å hente ut værmelding for dine koordinater. For
              å hente værdata er det brukt Openweathermap sin 5 dagers
              værmeldings-API.
              <a href="https://openweathermap.org/api" target="_blank"
                >https://openweathermap.org/api</a
              >
            </p>
            <p>
              For å hente by eller stedsnavn tar jeg i bruk openstreetmap sin
              API.
              <a href="https://www.openstreetmap.org/" target="_blank"
                >https://www.openstreetmap.org/</a
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
          // console.log("Værmelding");
          // console.log(Response);
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