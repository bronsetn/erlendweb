<template>
  <v-col
    cols="12"
    sm="12"
    md="6"
    lg="4"
    xl="4"
  >
    <v-card
      color="secondary"
      elevation="5"
      style="overflow: hidden;"
    >
      <v-card-title>{{ $t('other.forecast') }}<v-spacer></v-spacer>
        <v-icon color="tertiary">mdi-satellite-variant</v-icon>
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
          <v-col
            cols="6"
            md="4"
          >
            <p class="display-2">{{ temperature }} &deg;C</p>
          </v-col>
          <v-col
            cols="6"
            md="4"
          >
            <v-avatar
              color="primary"
              size="150"
            >
              <v-img
                height="100"
                :src="wicon"
              ></v-img>
            </v-avatar>
          </v-col>
        </v-row>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weather-windy</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Wind speed
            {{ weather.list[0].wind.speed }} m/s
          </v-list-item-subtitle>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item v-if="weather.list[0].rain">
          <v-list-item-icon>
            <v-icon>mdi-weather-pouring</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Rain
            {{ weather.list[0].rain["3h"] }} %
          </v-list-item-subtitle>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-waves</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Humidity
            {{ weather.list[0].main.humidity }}%
          </v-list-item-subtitle>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item v-if="weather.list[0].snow">
          <v-list-item-icon>
            <v-icon>mdi-snowflake</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Snow
            {{ weather.list[0].snow["3h"] }} %
          </v-list-item-subtitle>
        </v-list-item>
      </div>

      <!-- Shown before/if weatherdata is not loaded -->
      <v-container
        fill-height
        class="faded center"
        v-else
      >
        <v-btn
          outlined
          x-large
          color="white"
          :loading="loading"
          @click="getLocation()"
        >{{ $t('other.forecastCaption') }}
        </v-btn>
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="tertiary"
          text
          @click="show = !show"
        >{{ $t('misc.about') }}<v-icon class="pl-1">{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text class="pa-4">
            <p>{{ $t('other.forecastDescription') }}</p>
            <p v-html="$t('other.forecastSources')"></p>
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

      loading: false,

      weather: null,
      temperature: null,
      wicon: false,

      formatedDate: null,

      city: null,
      geolocation: null,
    };
  },

  mounted() {
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
  },

  methods: {
    // Get user longitude and latitude from browser geodata on startup
    // https://www.youtube.com/watch?v=_pRSfB17_7Y
    getLocation() {
      this.loading = true;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Your coordinates are:");
            console.log(position.coords.latitude, position.coords.longitude);

            this.getCity(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            console.log(error.message);
            console.log("Trying to get forecast from Oslo instead");
            this.getForecastOslo();
          }
        );
      } else {
        console.log("Your browser does not support geolocation API ");
        console.log("Trying to get forecast from Oslo instead");
        this.getForecastOslo();
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

          console.log("City/Place:");
          console.log(json.features[0].properties.geocoding.city)
          console.log("If the name uses ÆØÅ the funtion might fail");

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
        language: "en",
        key: "b5b8e021d8316b270eb7d264dab861c6",
      };

      const { url, type, location, language, key } = apiData;
      const apiUrl = `${url}${type}?q=${location}&units=metric&lang=${language}&appid=${key}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then((json) => {
          // console.log("Forecast");
          // console.log(json);

          if (json.cod == 404) {
            console.log(json.message)
            this.getForecastOslo();
          }
          else {
            console.log("Forecast:");
            console.log(json);

            this.loading = false;

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
          this.loading = false;
          console.log('Request Failed', err);
        }
        );
    },

    getForecastOslo() {
      const apiData = {
        url: "https://api.openweathermap.org/data/2.5/",
        type: "forecast",
        location: "oslo",
        language: "en",
        key: "b5b8e021d8316b270eb7d264dab861c6",
      };

      const { url, type, location, language, key } = apiData;
      const apiUrl = `${url}${type}?q=${location}&units=metric&lang=${language}&appid=${key}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then((json) => {
          console.log("Forecast Oslo:");
          console.log(json);

          this.loading = false;

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
          this.loading = false;
          console.log('Request Failed', err);
        });
    },
  },
};
</script>

<style scoped>
.faded {
  height: 350px;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>