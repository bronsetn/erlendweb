<template>
  <body>
    <v-container>
      <v-card
        class="mx-auto center"
        max-width="400"
        v-if="(geolocation = true || weatherData)"
        id="theWeather"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">
              {{ weatherPlace }}
            </v-list-item-title>
            <v-list-item-subtitle
              >{{ roundedTemp }} &#8451; Mostly sunny</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="display-3" cols="6"> 23&deg;C </v-col>
            <v-col cols="6">
              <v-list-item-avatar>
                <v-avatar size="50" v-html="weatherIcon"></v-avatar>
              </v-list-item-avatar>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text> Full Report </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </body>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      weatherPlace: "",
      roundedTemp: "",
      weatherData: "",
      weatherIcon: "",

      city: "",
      geolocation: "",
    };
  },

  // Get user longitude and latitude from browser geodata on startup
  // https://www.youtube.com/watch?v=_pRSfB17_7Y
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude, position.coords.longitude);
          var box = document.getElementById("theWeather");
          box.style.opacity = 1;

          this.getCity(position.coords.latitude, position.coords.longitude);

          geolocation = "true";
        },
        (error) => {
          console.log(error.message);

          var box = document.getElementById("theWeather");
          box.style.opacity = 0;
        }
      );
    } else {
      console.log("Your browser does not support geolocation API ");
    }
  },

  // Get city from the coordinates
  // Format https://nominatim.openstreetmap.org/reverse?format=xml&lat=43.8338&lon=4.3596
  methods: {
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
        .then((response) => {
          if (response.data.error_message) {
            console.log(data.error_message);
          } else {
            // console.log(response.data);
            this.city = response.data.features[0].properties.geocoding.city;

            this.getWeather(
              response.data.features[0].properties.geocoding.city
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
        url: "http://api.openweathermap.org/data/2.5/",
        type: "weather",
        location: city,
        language: "no",
        //Akkurat nå min key - er gratis men bør forandres
        key: "b5b8e021d8316b270eb7d264dab861c6",
      };

      const { url, type, location, language, key } = apiData;
      const apiUrl = `${url}${type}?q=${location}&units=metric&lang=${language}&appid=${key}`;

      fetch(apiUrl)
        .then((data) => data.json())
        .then((forecast) => generateHtml(forecast));

      console.log(apiUrl);

      /*Data shown in page*/
      const generateHtml = (data) => {
        const weatherPlace = `
          ${data.name}
        `;
        const weatherTemp = `
         ${data.main.temp}
        `;
        const weatherData = `
         ${data.weather[0].description}
        `;
        const weatherIcon = `
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather icon"/>
        `;
        this.weatherPlace = weatherPlace;
        this.weatherTemp = weatherTemp;
        this.weatherData = weatherData;
        this.weatherIcon = weatherIcon;

        // Remove some of the decimals
        let roundedTemp;

        this.roundedTemp = new Intl.NumberFormat("en-IN", {
          maximumSignificantDigits: 2,
        }).format(weatherTemp);
      };
    },
  },
};
</script>

<style>
</style>


