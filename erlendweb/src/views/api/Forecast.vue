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
      <v-container>
        <v-card-title>Dagens værmelding<v-spacer></v-spacer>
          <v-icon color="tertiary">mdi-api</v-icon>
        </v-card-title>
        <div v-if="weather">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ weather.city.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="pt-2">{{
              formatedDate
            }}</v-list-item-subtitle>
              <p class="pt-2 text-capitalize">
                {{ weather.list[0].weather[0].description }}
              </p>
            </v-list-item-content>
          </v-list-item>

          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="5">
              <p class="display-1">{{ temperature }} &deg;C</p>
            </v-col>
            <v-col cols="5">
              <v-avatar
                color="primary lighten-6"
                size="100"
              >
                <v-img
                  height="200"
                  contain
                  :src="wicon"
                ></v-img>
              </v-avatar>
            </v-col>
          </v-row>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-weather-windy</v-icon>
            </v-list-item-icon>

            <v-list-item-subtitle>Vindhastighet
              {{ weather.list[0].wind.speed }} m/s</v-list-item-subtitle>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item v-if="weather.list[0].rain">
            <v-list-item-icon>
              <v-icon>mdi-weather-pouring</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>
              Regn
              {{ weather.list[0].rain["3h"] }} %</v-list-item-subtitle>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-water</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>
              Luftfuktighet
              {{ weather.list[0].main.humidity }}%</v-list-item-subtitle>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item v-if="weather.list[0].snow">
            <v-list-item-icon>
              <v-icon>mdi-snowflake</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>
              Snømengde
              {{ weather.list[0].snow["3h"] }} %</v-list-item-subtitle>
          </v-list-item>
        </div>

        <!-- If weatherdata doesn't load -->
        <div v-else>
          <p class="Normal">Click to get today's weather</p>
          <v-btn
            fab
            color="tertiary"
            class="ma-2"
            @click="getLocation()"
          >
            <v-icon color="primary">mdi-cached</v-icon>
          </v-btn>
          <p class="normal pt-2">To get weatherdata this component needs to use your browser's geolocation.
            If nothing happens after clicking the button, try to deletign the site's cache.</p>
        </div>
      </v-container>

      <v-card-actions>
        <v-btn
          color="accent"
          text
          @click="show = !show"
        > Om dette </v-btn>
        <v-spacer></v-spacer>

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
            <p>
              Denne komponenten tar i bruk nettleserens geolokasjon
              for å hente ut værmeldingen for dine koordinater.
            </p>
            <p>For
              å hente værdata er det brukt Openweathermap sin 5 dagers
              værmelding API.
              <a
                href="https://openweathermap.org/api"
                target="_blank"
              >https://openweathermap.org/api</a>
            </p>
            <p>
              For å hente by eller stedsnavn tar jeg i bruk openstreetmap sin
              API.
              <a
                href="https://www.openstreetmap.org/"
                target="_blank"
              >https://www.openstreetmap.org/</a>
            </p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<script>

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
            // console.log("Dine koordinater:");
            // console.log(position.coords.latitude, position.coords.longitude);

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
      fetch(
        "https://nominatim.openstreetmap.org/reverse?format=xml" +
        "&lat=" +
        lat +
        "&lon=" +
        long +
        "&format=geocodejson",
      )
        .then(response => response.json())
        .then(json => {

          // console.log("By/Plass:");
          // console.log(json.features[0].properties.geocoding.city)
          // console.log("Hvis plassen inneholder ÆØÅ blir det vanskelig");

          this.getWeather(json.features[0].properties.geocoding.city);
        })
        // Catch errors
        .catch(err => {
          console.log('Request Failed', err)
        });
    },

    // Create weather from latest forecast
    /*Tutorialish: https://www.youtube.com/watch?v=tFVdxGgJPCo&list=LL70GBoeL8ASdIRG0A89Rpsg&index=2&t=4s*/
    /*Format http://api.openweathermap.org/data/2.5/forecast?q=steinkjer&units=metric&lang=no&appid={KEY}*/
    getWeather(city) {
      const apiData = {
        url: "https://api.openweathermap.org/data/2.5/",
        type: "forecast",
        location: city,
        language: "no",
        key: "b5b8e021d8316b270eb7d264dab861c6",
      };

      const { url, type, location, language, key } = apiData;
      const apiUrl = `${url}${type}?q=${location}&units=metric&lang=${language}&appid=${key}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then((json) => {
          // console.log("Værmelding");
          // console.log(json);

          if (json.cod == 404) {
            console.log(json.message, ", trying to get forecast from Oslo")
            this.getForecastOslo();

          }
          else {
            // console.log("Værmelding");
            // console.log(json);

            this.weather = json;

            this.wicon =
              "https://openweathermap.org/img/wn/" +
              json.list[0].weather[0].icon +
              "@2x.png";

            this.temperature = new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 1,
            }).format(json.list[0].main.temp);
          }
        })
        // Catch errors
        .catch(err => {
          console.log('Request Failed', err);
        }
        );
    },

    getForecastOslo() {
      const apiData = {
        url: "https://api.openweathermap.org/data/2.5/",
        type: "forecast",
        location: "oslo",
        language: "no",
        key: "b5b8e021d8316b270eb7d264dab861c6",
      };

      const { url, type, location, language, key } = apiData;
      const apiUrl = `${url}${type}?q=${location}&units=metric&lang=${language}&appid=${key}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then((json) => {
          // console.log("Værmelding");
          // console.log(json);

          this.weather = json;

          this.wicon =
            "https://openweathermap.org/img/wn/" +
            json.list[0].weather[0].icon +
            "@2x.png";

          this.temperature = new Intl.NumberFormat("en-IN", {
            maximumSignificantDigits: 1,
          }).format(json.list[0].main.temp);
        })
        // Catch errors
        .catch(err => {
          console.log('Request Failed', err);
        });
    },
  },
};
</script>

<style>
</style>